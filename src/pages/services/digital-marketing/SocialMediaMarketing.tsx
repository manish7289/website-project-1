import { Link } from 'react-router-dom';
import { Users, Heart, Share2, TrendingUp, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function SocialMediaMarketing() {
  const features = [
    'Social Media Strategy',
    'Content Creation',
    'Community Management',
    'Paid Social Advertising',
    'Influencer Marketing',
    'Social Media Analytics',
    'Brand Awareness Campaigns',
    'Engagement Optimization'
  ];

  const platforms = [
    { name: 'Facebook', color: 'from-blue-500 to-blue-600' },
    { name: 'Instagram', color: 'from-pink-500 to-purple-600' },
    { name: 'Twitter/X', color: 'from-gray-700 to-black' },
    { name: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
    { name: 'TikTok', color: 'from-black to-gray-800' },
    { name: 'YouTube', color: 'from-red-500 to-red-600' }
  ];

  const process = [
    {
      step: '1',
      title: 'Strategy Development',
      description: 'Analyze your audience and create a comprehensive social media strategy.'
    },
    {
      step: '2',
      title: 'Content Planning',
      description: 'Develop a content calendar with engaging posts for each platform.'
    },
    {
      step: '3',
      title: 'Content Creation',
      description: 'Create high-quality visuals, videos, and copy that resonates with your audience.'
    },
    {
      step: '4',
      title: 'Community Engagement',
      description: 'Build and nurture relationships with your followers through active engagement.'
    },
    {
      step: '5',
      title: 'Paid Advertising',
      description: 'Run targeted campaigns to reach new audiences and drive conversions.'
    },
    {
      step: '6',
      title: 'Analytics & Optimization',
      description: 'Monitor performance and optimize strategies for better results.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Social Media
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Build strong connections with your audience across all social platforms. Our expert strategies drive engagement, growth, and conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50 text-center">
                <CheckCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
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
              Platforms <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">We Cover</span>
            </h2>
            <p className="text-slate-400 text-lg">Comprehensive social media management</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-sm">{platform.name.charAt(0)}</span>
                </div>
                <p className="font-semibold text-sm">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg">Complete social media marketing solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">How we grow your social media presence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">
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
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Grow Your Social Presence?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's create a social media strategy that engages your audience and drives results
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Social Strategy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
