import { ArrowRight, Heart, Sparkles, Users } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 opacity-90 z-0"></div>

        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/6207875/pexels-photo-6207875.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            opacity: 0.25
          }}
        ></div>

        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <a
              href="#mission"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
            >
              Our Mission
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
              <Users className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
              <h3 className="text-sm font-semibold mb-1.5">Community-Driven</h3>
              <p className="text-slate-400 text-xs">Built with and for Indigenous communities</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
              <Sparkles className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
              <h3 className="text-sm font-semibold mb-1.5">Human-in-the-Loop</h3>
              <p className="text-slate-400 text-xs">AI that learns from human wisdom and guidance</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
              <Heart className="w-8 h-8 text-rose-400 mb-3 mx-auto" />
              <h3 className="text-sm font-semibold mb-1.5">Youth Focused</h3>
              <p className="text-slate-400 text-xs">Empowering the next generation of leaders</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero