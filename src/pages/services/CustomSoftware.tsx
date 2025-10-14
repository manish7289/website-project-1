import { Link } from 'react-router-dom';
import { Database, CheckCircle, ArrowRight, Settings, Cloud, Lock } from 'lucide-react';

export default function CustomSoftware() {
  const features = [
    'Custom Business Logic',
    'Database Design & Development',
    'API Development & Integration',
    'Cloud Infrastructure Setup',
    'Legacy System Modernization',
    'Workflow Automation',
    'Real-Time Data Processing',
    'Advanced Security Implementation',
    'Scalable Architecture',
    'Third-Party Integrations',
    'Admin Dashboard',
    'Reporting & Analytics'
  ];

  const solutions = [
    {
      icon: Database,
      title: 'Enterprise Software',
      description: 'Large-scale business applications with complex workflows and integrations.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Settings,
      title: 'Business Automation',
      description: 'Streamline operations with custom automation tools and workflows.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud-based applications with AWS, Azure, or Google Cloud.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Lock,
      title: 'Secure Systems',
      description: 'High-security applications with advanced encryption and compliance.',
      color: 'from-orange-500 to-rose-600'
    }
  ];

  const packages = [
    {
      name: 'Small Business',
      price: '$14,999',
      description: 'Custom tools for small to medium businesses',
      features: [
        'Requirements analysis',
        'Custom development',
        'Database design',
        'Admin panel',
        'User management',
        'Basic integrations',
        '90 days support'
      ]
    },
    {
      name: 'Enterprise',
      price: '$49,999',
      description: 'Comprehensive enterprise solutions',
      features: [
        'Complex business logic',
        'Advanced integrations',
        'Scalable architecture',
        'Security implementation',
        'Performance optimization',
        'API development',
        'Training & documentation',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'Custom Quote',
      price: 'Contact Us',
      description: 'Tailored solutions for unique needs',
      features: [
        'Unlimited customization',
        'Dedicated development team',
        'Project management',
        'Quality assurance',
        'Security audit',
        'Deployment assistance',
        'Long-term partnership',
        'Premium support'
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant medical software, patient management systems, and telemedicine platforms.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Finance',
      description: 'Banking systems, payment processing, investment platforms, and financial analytics.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Manufacturing',
      description: 'Inventory management, supply chain optimization, and production tracking systems.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Real Estate',
      description: 'Property management, CRM systems, and virtual tour platforms.',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Education',
      description: 'Learning management systems, student portals, and online examination platforms.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Logistics',
      description: 'Fleet management, route optimization, and delivery tracking systems.',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl top-0 right-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl bottom-0 left-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Custom Software Development
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Build tailored software solutions designed specifically for your business needs. We create scalable, secure applications that solve your unique challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Custom <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <solution.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-slate-400 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comprehensive <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Industries <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">We Serve</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img src={industry.image} alt={industry.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                  <p className="text-slate-400 text-sm">{industry.description}</p>
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
              Pricing <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Packages</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border transition-all duration-300 hover:transform hover:-translate-y-2 ${
                pkg.popular ? 'border-purple-500 shadow-xl shadow-purple-500/20' : 'border-slate-700/50'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">{pkg.price}</div>
                <p className="text-slate-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'
                      : 'border-2 border-purple-500/30 hover:bg-purple-500/10'
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
          <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-rose-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                Let's create software that perfectly fits your business needs
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
