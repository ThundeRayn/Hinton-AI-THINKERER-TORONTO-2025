import { ArrowRight } from 'lucide-react'

const Content = () => {
  return (
    <div>
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
    </div>
  )
}

export default Content