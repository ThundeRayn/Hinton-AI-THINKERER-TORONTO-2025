import { ArrowRight, Sparkles, Users, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-semibold">Indigenous AI Initiative</span>
          </div>
          <a
            href="#demo"
            className="text-sm font-medium hover:text-amber-400 transition-colors"
          >
            View Demo
          </a>
        </div>
      </nav>

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
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs text-amber-200">Human-in-the-Loop AI for Indigenous Communities</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Empowering Indigenous Youth
            <span className="block mt-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-transparent bg-clip-text">
              Through AI Technology
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bridging traditional wisdom with cutting-edge artificial intelligence
            to create meaningful opportunities for Indigenous youth worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
            >
              Experience the Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
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

      <section id="mission" className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            We believe in the power of combining ancestral knowledge with modern technology.
            Our human-in-the-loop AI systems ensure that Indigenous voices remain at the center
            of every decision, creating tools that respect cultural values while opening new doors
            for education, opportunity, and growth.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Every interaction, every insight, and every outcome is shaped by the wisdom and guidance
            of Indigenous youth and community members, ensuring technology serves the people,
            not the other way around.
          </p>
        </div>
      </section>

      <section id="demo" className="relative py-20 px-6 md:px-12 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Multi-Agent Architecture</h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Experience how our AI technology works alongside Indigenous youth to create meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm">1</span>
                </div>
                <h3 className="text-base font-semibold">Opportunity Discovery</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Web search for grants & funding opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Automated eligibility verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>Intelligent fit scoring & ranking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-sm">2</span>
                </div>
                <h3 className="text-base font-semibold">Application Writer</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>Comprehensive requirement analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>Culturally-informed content research & drafting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>Strategic budget & impact planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-xl p-6 hover:border-rose-500/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
                  <span className="text-rose-400 font-bold text-sm">3</span>
                </div>
                <h3 className="text-base font-semibold">Coordinator</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">•</span>
                  <span>Seamless workflow orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">•</span>
                  <span>Human approval checkpoint management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">•</span>
                  <span>Complete audit trail & activity logging</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://your-demo-url.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-amber-500/30"
            >
              Launch Living Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative py-10 px-6 md:px-12 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="text-xs">
            © 2025 Indigenous AI Initiative. Supporting Indigenous Youth with Human-in-the-Loop AI.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
