import { Link } from 'react-router-dom';
import { Target, DollarSign, BarChart, Users, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function PPC() {
  const features = [
    'Google Ads Management',
    'Facebook & Instagram Ads',
    'Keyword Research & Selection',
    'Ad Copy & Creative Design',
    'Landing Page Optimization',
    'A/B Testing & Optimization',
    'Conversion Tracking',
    'Performance Analytics'
  ];

  const platforms = [
    { name: 'Google Ads', icon: 'G', color: 'from-blue-500 to-blue-600' },
    { name: 'Facebook Ads', icon: 'F', color: 'from-blue-600 to-blue-800' },
    { name: 'Instagram Ads', icon: 'I', color: 'from-pink-500 to-purple-600' },
    { name: 'LinkedIn Ads', icon: 'L', color: 'from-blue-700 to-blue-900' },
    { name: 'Twitter Ads', icon: 'T', color: 'from-gray-700 to-black' },
    { name: 'YouTube Ads', icon: 'Y', color: 'from-red-500 to-red-600' }
  ];

  const benefits = [
    'Immediate traffic and leads',
    'Precise audience targeting',
    'Measurable ROI',
    'Scalable campaigns',
    'Quick results',
    'Brand awareness boost'
  ];

  const process = [
    {
      step: '1',
      title: 'Campaign Strategy',
      description: 'Define goals, target audience, and budget for your PPC campaigns.'
    },
    {
      step: '2',
      title: 'Keyword & Audience Research',
      description: 'Identify high-converting keywords and build detailed audience profiles.'
    },
    {
      step: '3',
      title: 'Ad Creation',
      description: 'Design compelling ad copy and creatives that drive clicks and conversions.'
    },
    {
      step: '4',
      title: 'Campaign Launch',
      description: 'Set up and launch campaigns across selected platforms.'
    },
    {
      step: '5',
      title: 'Monitoring & Optimization',
      description: 'Track performance and optimize campaigns for better results.'
    },
    {
      step: '6',
      title: 'Reporting & Scaling',
      description: 'Provide detailed reports and scale successful campaigns.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Pay-Per-Click
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                (PPC) Advertising
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Drive immediate traffic and conversions with targeted PPC campaigns. Our expert management ensures maximum ROI from your advertising budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50 text-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
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
              PPC <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Platforms</span>
            </h2>
            <p className="text-slate-400 text-lg">We advertise where your customers are</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-sm">{platform.icon}</span>
                </div>
                <p className="font-semibold text-sm">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">PPC?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                PPC advertising offers immediate visibility and measurable results. Unlike organic methods, you can start driving traffic and conversions from day one.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50">
              <div className="text-center mb-6">
                <DollarSign className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">ROI Focused</h3>
                <p className="text-slate-400">Every dollar spent is tracked and optimized for maximum return</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <BarChart className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">Real-time</p>
                  <p className="text-slate-400 text-sm">Analytics</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">Precise</p>
                  <p className="text-slate-400 text-sm">Targeting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our PPC <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg">Complete PPC campaign management</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
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
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">How we maximize your PPC ROI</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-xl font-bold">
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
          <div className="relative bg-gradient-to-br from-yellow-600 via-orange-600 to-red-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Drive Conversions?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Let's create high-converting PPC campaigns that deliver measurable results
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start PPC Campaign
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
