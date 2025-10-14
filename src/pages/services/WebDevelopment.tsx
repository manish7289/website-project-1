import { Link } from 'react-router-dom';
import { Code2, CheckCircle, ArrowRight, Zap, Globe, Smartphone, Layers } from 'lucide-react';

export default function WebDevelopment() {
  const features = [
    'Responsive Design for All Devices',
    'Fast Loading & Optimized Performance',
    'SEO-Friendly Architecture',
    'Modern UI/UX Design',
    'Cross-Browser Compatibility',
    'Secure & Scalable Solutions',
    'Content Management System',
    'Third-Party Integrations',
    'Analytics & Tracking Setup',
    'Ongoing Support & Maintenance'
  ];

  const technologies = [
    { name: 'React', icon: Code2 },
    { name: 'Next.js', icon: Zap },
    { name: 'TypeScript', icon: Code2 },
    { name: 'Tailwind CSS', icon: Layers },
    { name: 'Node.js', icon: Globe },
    { name: 'Vue.js', icon: Code2 }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        '30 days support',
        'Social media integration'
      ]
    },
    {
      name: 'Professional',
      price: '$5,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Advanced animations',
        'Advanced SEO optimization',
        'CMS integration',
        'E-commerce ready',
        '90 days support',
        'Analytics dashboard',
        'Custom features'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale applications',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced integrations',
        'Performance optimization',
        'Security audit',
        '1 year support',
        'Dedicated team',
        'Priority updates'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements. Our team conducts thorough research to create a comprehensive project plan.'
    },
    {
      step: '2',
      title: 'Design & Wireframing',
      description: 'Our designers create detailed wireframes and mockups, focusing on user experience and visual appeal. You review and provide feedback until we achieve the perfect design.'
    },
    {
      step: '3',
      title: 'Development',
      description: 'Expert developers bring the design to life using cutting-edge technologies. We follow best practices and write clean, maintainable code for optimal performance.'
    },
    {
      step: '4',
      title: 'Testing & QA',
      description: 'Rigorous testing across devices and browsers ensures everything works flawlessly. We fix bugs and optimize performance before launch.'
    },
    {
      step: '5',
      title: 'Launch & Support',
      description: 'We deploy your website to production and provide training. Our support team remains available for updates, maintenance, and technical assistance.'
    }
  ];

  const portfolio = [
    {
      title: 'TechCorp Solutions',
      category: 'Corporate Website',
      image: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { pages: '12', time: '6 weeks', tech: 'Next.js' }
    },
    {
      title: 'HealthPlus Medical',
      category: 'Healthcare Portal',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { pages: '20', time: '8 weeks', tech: 'React' }
    },
    {
      title: 'EduLearn Platform',
      category: 'E-Learning Website',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { pages: '25', time: '10 weeks', tech: 'Vue.js' }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Web Development
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Create powerful, responsive websites that engage users and drive business growth. Our expert team builds custom web solutions tailored to your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {features.slice(0, 5).map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50 text-center">
                <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
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
              What's <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-slate-400 text-lg">Everything you need for a successful web presence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
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
              Technologies <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">We Use</span>
            </h2>
            <p className="text-slate-400 text-lg">Modern frameworks and tools for robust applications</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2">
                <tech.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <p className="font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pricing <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-slate-400 text-lg">Choose the perfect plan for your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border transition-all duration-300 hover:transform hover:-translate-y-2 ${
                pkg.popular ? 'border-emerald-500 shadow-xl shadow-emerald-500/20' : 'border-slate-700/50'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-emerald-400 mb-2">{pkg.price}</div>
                <p className="text-slate-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/50'
                      : 'border-2 border-emerald-500/30 hover:bg-emerald-500/10'
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">How we bring your vision to life</p>
          </div>

          <div className="space-y-8">
            {process.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
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
              Recent <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg">Successful websites we've built</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-emerald-400 text-sm mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">{project.stats.pages}</div>
                      <div className="text-xs text-slate-400">Pages</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">{project.stats.time}</div>
                      <div className="text-xs text-slate-400">Timeline</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-emerald-400">{project.stats.tech}</div>
                      <div className="text-xs text-slate-400">Tech</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Build Your Website?
              </h2>
              <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a stunning website that drives results
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
