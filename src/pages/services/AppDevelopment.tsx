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

  const packages = [
    {
      name: 'MVP Launch',
      price: '$9,999',
      description: 'Get your app idea to market quickly',
      features: [
        'Single platform (iOS or Android)',
        'Core features development',
        'Basic UI/UX design',
        'App store submission',
        'Bug fixes for 30 days',
        'User authentication'
      ]
    },
    {
      name: 'Professional',
      price: '$19,999',
      description: 'Full-featured mobile application',
      features: [
        'Both iOS & Android platforms',
        'Advanced features',
        'Custom UI/UX design',
        'Backend development',
        'Push notifications',
        'Analytics integration',
        '90 days support',
        'App store optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Large-scale mobile solutions',
      features: [
        'Unlimited platforms',
        'Complex integrations',
        'Advanced security',
        'Scalable architecture',
        'Admin dashboard',
        'Real-time features',
        '1 year support',
        'Dedicated team'
      ]
    }
  ];

  const appTypes = [
    {
      title: 'E-commerce Apps',
      description: 'Shopping apps with payment integration, product catalogs, and order management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Social Networking',
      description: 'Connect users with messaging, feeds, profiles, and social interactions.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'On-Demand Services',
      description: 'Apps for food delivery, ride-sharing, home services, and more.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Health & Fitness',
      description: 'Workout tracking, nutrition planning, and wellness management apps.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Education & E-Learning',
      description: 'Interactive learning platforms with courses, quizzes, and progress tracking.',
      image: 'https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Business & Productivity',
      description: 'Tools for task management, team collaboration, and workflow optimization.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              App Types <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">We Build</span>
            </h2>
            <p className="text-slate-400 text-lg">Specialized solutions for every industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((type, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                  <p className="text-slate-400">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pricing <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Packages</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border transition-all duration-300 hover:transform hover:-translate-y-2 ${
                pkg.popular ? 'border-blue-500 shadow-xl shadow-blue-500/20' : 'border-slate-700/50'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                <p className="text-slate-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50'
                      : 'border-2 border-blue-500/30 hover:bg-blue-500/10'
                  }`}
                >
                  Get Started
                </Link>
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
