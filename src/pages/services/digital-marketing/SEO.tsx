import { Link } from 'react-router-dom';
import { TrendingUp, Search, BarChart, Target, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function SEO() {
  const features = [
    'Keyword Research & Analysis',
    'On-Page SEO Optimization',
    'Technical SEO Audit',
    'Content Optimization',
    'Link Building Strategy',
    'Local SEO',
    'Mobile SEO',
    'Analytics & Reporting'
  ];

  const benefits = [
    'Increased organic traffic',
    'Higher search rankings',
    'Better user experience',
    'Long-term results',
    'Cost-effective marketing',
    'Competitive advantage'
  ];

  const process = [
    {
      step: '1',
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current SEO status and identify improvement opportunities.'
    },
    {
      step: '2',
      title: 'Keyword Research',
      description: 'Identify high-value keywords and search terms your target audience is using.'
    },
    {
      step: '3',
      title: 'On-Page Optimization',
      description: 'Optimize content, meta tags, and technical elements for better search visibility.'
    },
    {
      step: '4',
      title: 'Content Strategy',
      description: 'Develop and optimize content that ranks well and engages your audience.'
    },
    {
      step: '5',
      title: 'Link Building',
      description: 'Build high-quality backlinks to improve domain authority and rankings.'
    },
    {
      step: '6',
      title: 'Monitoring & Reporting',
      description: 'Track performance and provide regular reports with actionable insights.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Search Engine
              <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Optimization (SEO)
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Improve your search rankings and drive organic traffic to your website. Our comprehensive SEO strategies help you dominate search results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50 text-center">
                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              SEO <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-slate-400 text-lg">Why SEO is essential for your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-slate-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our SEO <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg">Comprehensive SEO solutions for maximum impact</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">How we optimize your search presence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Improve Your Rankings?
              </h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Let's analyze your website and create an SEO strategy that drives organic growth
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get SEO Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
