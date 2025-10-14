import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, ArrowRight, Apple, Chrome, Zap } from 'lucide-react';

export default function AppDevelopment() {
  const features = [
    'Native iOS Development',
    'Native Android Development',
    'Cross-Platform Solutions',
    'Intuitive User Interface',
    'Offline Functionality',
    'Push Notifications',
    'In-App Purchases',
    'Social Media Integration',
    'Real-Time Sync',
    'App Store Optimization'
  ];

  const platforms = [
    {
      name: 'iOS Apps',
      icon: Apple,
      description: 'Native apps for iPhone and iPad using Swift',
      color: 'from-slate-400 to-slate-600'
    },
    {
      name: 'Android Apps',
      icon: Chrome,
      description: 'Native apps for Android devices using Kotlin',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Cross-Platform',
      icon: Zap,
      description: 'Single codebase for both iOS and Android',
      color: 'from-blue-500 to-cyan-600'
    }
  ];





  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-0 right-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl bottom-0 left-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Mobile App Development
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Build powerful mobile applications for iOS and Android that users love. Our expert team creates custom apps that deliver exceptional performance and user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Platforms <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">We Support</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <platform.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-slate-400">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Features <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">We Deliver</span>
            </h2>
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
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Turn your app idea into reality with our expert development team
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
