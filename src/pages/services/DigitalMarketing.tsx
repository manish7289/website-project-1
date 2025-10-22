import { Link } from 'react-router-dom';
import { TrendingUp, Users, Target, Mail, FileText, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function DigitalMarketing() {
  const features = [
    'SEO Optimization',
    'Social Media Marketing',
    'PPC Advertising',
    'Content Marketing',
    'Email Marketing',
    'Analytics & Reporting',
    'Brand Strategy',
    'Lead Generation'
  ];

  const subServices = [
    {
      icon: TrendingUp,
      title: 'SEO',
      description: 'Improve search engine rankings and organic traffic.',
      path: '/services/digital-marketing/seo'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage with your audience.',
      path: '/services/digital-marketing/social-media'
    },
    {
      icon: Target,
      title: 'PPC',
      description: 'Targeted paid advertising for immediate results.',
      path: '/services/digital-marketing/ppc'
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Create valuable content that drives engagement.',
      path: '/services/digital-marketing/content'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and build customer relationships.',
      path: '/services/digital-marketing/email'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Strategy Development',
      description: 'We analyze your business goals and develop a comprehensive digital marketing strategy.'
    },
    {
      step: '2',
      title: 'Audience Research',
      description: 'Identify your target audience and create detailed buyer personas.'
    },
    {
      step: '3',
      title: 'Content Creation',
      description: 'Develop engaging content across all digital channels.'
    },
    {
      step: '4',
      title: 'Campaign Execution',
      description: 'Launch and manage your digital marketing campaigns.'
    },
    {
      step: '5',
      title: 'Analytics & Optimization',
      description: 'Monitor performance and optimize for better results.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Digital Marketing
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Drive growth and increase visibility with our comprehensive digital marketing solutions. From SEO to social media, we help you reach your target audience effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50 text-center">
                <CheckCircle className="w-6 h-6 text-orange-400 mx-auto mb-2" />
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
              Our <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg">Comprehensive digital marketing solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <service.icon className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                <div className="flex items-center text-orange-400 text-sm font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What's <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-slate-400 text-lg">Everything you need for digital success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
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
              Our <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">How we drive your digital growth</p>
          </div>

          <div className="space-y-8">
            {process.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your digital marketing goals and create a strategy that drives results
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Campaign
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
