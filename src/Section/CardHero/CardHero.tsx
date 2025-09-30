import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import styles from './CardHero.module.css'

const CardHero = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = new THREE.Vector2(10000, 10000);
  const particleData: { originalPos: THREE.Vector3; currentPos: THREE.Vector3; velocity: THREE.Vector3 }[] = [];
  const energyLines: Line2[] = [];

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, composer: EffectComposer, particles: THREE.Points;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 50);

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        antialias: true,
        alpha: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.0,
        0.8,
        0.1
      );
      composer.addPass(bloomPass);

      createMainParticles();
      createEnergyLines();

      window.addEventListener('resize', onWindowResize);
      window.addEventListener('mousemove', onMouseMove);
    };

    const createMainParticles = () => {
      const particleCount = 15000;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const baseColor = new THREE.Color(0x001f3f);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = (Math.random() - 0.5) * 120;
        const y = (Math.random() - 0.5) * 120;

        particleData.push({
          originalPos: new THREE.Vector3(x, y, (Math.random() - 0.5) * 20),
          currentPos: new THREE.Vector3(x, y, (Math.random() - 0.5) * 20),
          velocity: new THREE.Vector3()
        });

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = particleData[i].originalPos.z;

        baseColor.toArray(colors, i3);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 1.5,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    };

    const createEnergyLines = () => {
      const lineCount = 30;
      for (let i = 0; i < lineCount; i++) {
        const geometry = new LineGeometry();
        const points: number[] = [];
        const z = (Math.random() - 0.5) * 150 - 75;
        const startX = (Math.random() - 0.5) * 150;
        const startY = (Math.random() - 0.5) * 150;
        const length = Math.random() * 10 + 5;

        points.push(startX, startY, z);
        points.push(startX, startY - length, z);
        geometry.setPositions(points);

        const material = new LineMaterial({
          color: 0x88aaff,
          linewidth: 0.003,
          transparent: true,
          opacity: 0.5,
          dashed: false
        });

        const line = new Line2(geometry, material);
        line.userData.speed = Math.random() * 30 + 15;
        line.userData.originalZ = z;

        energyLines.push(line);
        scene.add(line);
      }
    };

    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      composer.setSize(width, height);

      energyLines.forEach(line => {
        line.material.resolution.set(width, height);
      });
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();
      requestAnimationFrame(animate);

      const mousePos3D = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      mousePos3D.unproject(camera);
      const dir = mousePos3D.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const finalMousePos = camera.position.clone().add(dir.multiplyScalar(distance));

      const positions = particles.geometry.attributes.position.array as Float32Array;
      const colors = particles.geometry.attributes.color.array as Float32Array;
      const highlightColor = new THREE.Color(0xffd700);

      for (let i = 0; i < particleData.length; i++) {
        const i3 = i * 3;
        const data = particleData[i];

        const diff = new THREE.Vector3().subVectors(data.currentPos, finalMousePos);
        const dist = diff.length();
        let force = 0;
        if (dist < 20) {
          force = (1 - dist / 20) * 0.1;
          diff.normalize();
          data.velocity.add(diff.multiplyScalar(force));
        }

        const springForce = new THREE.Vector3().subVectors(data.originalPos, data.currentPos).multiplyScalar(0.01);
        data.velocity.add(springForce);
        data.velocity.multiplyScalar(0.92);

        data.currentPos.add(data.velocity);

        positions[i3] = data.currentPos.x;
        positions[i3 + 1] = data.currentPos.y;
        positions[i3 + 2] = data.currentPos.z + Math.sin(data.originalPos.x * 0.1 + elapsedTime) * 5.0;

        const colorMix = dist < 20 ? 1 - dist / 20 : 0;
        const color = new THREE.Color(0x001f3f).lerp(highlightColor, colorMix);
        color.toArray(colors, i3);
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.color.needsUpdate = true;

      energyLines.forEach(line => {
        line.position.z += line.userData.speed * delta;
        if (line.position.z > 50) {
          line.position.z = -150;
        }
      });

      composer.render();
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
      <div className={`content-container w-full h-screen flex items-center justify-center p-4 z-10 ${styles.content}`}>
        <div className={`text-center max-w-3xl mx-auto ${styles.fadeIn}`}>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-white ${styles.textShadowGold}`}>
            Facing Indigenous Agents 
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Indigenous organizations teaching truth & reconciliation to build stronger communities and heal historical wounds.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <button className={`bg-gradient-to-r from-yellow-500 to-orange-400 text-black font-bold py-3 px-8 rounded-full transform hover:scale-105 ${styles.buttonGlow}`}>
              Begin the Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHero