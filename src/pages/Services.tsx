import { Link } from 'react-router-dom';
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Database,
  TrendingUp,
  Palette,
  PenTool,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Layers,
  Cloud,
  LineChart
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'We create stunning, responsive websites that deliver exceptional user experiences across all devices.',
      features: [
        'Custom Website Design',
        'React & Next.js Development',
        'Progressive Web Apps (PWA)',
        'RESTful API Development',
        'Content Management Systems',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Build powerful native and cross-platform mobile applications for iOS and Android that users love.',
      features: [
        'iOS & Android Apps',
        'React Native Development',
        'Cross-Platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with secure payment integration and inventory management.',
      features: [
        'Custom Shopping Cart',
        'Payment Gateway Integration',
        'Product Management',
        'Order Tracking System',
        'Multi-Currency Support',
        'Analytics Dashboard'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Square'],
      color: 'from-orange-500 to-rose-600'
    },
    {
      icon: Database,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to solve your unique business challenges efficiently.',
      features: [
        'Business Process Automation',
        'Enterprise Applications',
        'Database Design & Management',
        'Third-Party Integrations',
        'Legacy System Modernization',
        'Cloud Migration'
      ],
      technologies: ['Python', 'Java', 'PostgreSQL', 'MongoDB', 'AWS'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'PPC Advertising',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      technologies: ['Google Analytics', 'Facebook Ads', 'SEMrush', 'Mailchimp', 'Hootsuite'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative visual solutions that bring your brand to life and captivate your audience.',
      features: [
        'Logo Design & Branding',
        'UI/UX Design',
        'Print Design',
        'Digital Graphics',
        'Social Media Graphics',
        'Packaging Design'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva', 'Illustrator'],
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Professional content writing that engages your audience and drives conversions.',
      features: [
        'Blog Writing',
        'Website Content',
        'SEO Content Creation',
        'Social Media Content',
        'Email Copywriting',
        'Product Descriptions'
      ],
      technologies: ['SEO Tools', 'Content Management Systems', 'Analytics', 'Keyword Research', 'Copywriting Frameworks'],
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: 'SEO Optimization',
      description: 'Improve search engine rankings and drive organic traffic to your website.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create intuitive and beautiful user interfaces that engage your audience.'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Keep your applications secure and running smoothly with our support.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Deploy and manage your applications on reliable cloud infrastructure.'
    },
    {
      icon: Layers,
      title: 'API Development',
      description: 'Build robust APIs for seamless integration with other systems.'
    },
    {
      icon: LineChart,
      title: 'Analytics Integration',
      description: 'Track user behavior and gain insights with advanced analytics tools.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Our designers create mockups and interactive prototypes for your approval.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Expert developers bring your vision to life using cutting-edge technologies.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures quality before deploying to production.'
    },
    {
      step: '05',
      title: 'Support & Growth',
      description: 'Ongoing maintenance and updates to keep your application running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-0 right-0"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Development Services
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                That Drive Results
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From web and mobile applications to e-commerce platforms and custom software, we deliver comprehensive solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Key Features:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-semibold mb-3 text-slate-400 uppercase">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex-1">
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-3xl`}></div>
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50"
                        >
                          <Zap className="w-6 h-6 text-cyan-400 mb-2" />
                          <p className="text-sm text-slate-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Additional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Comprehensive solutions to support your digital growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <service.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              How We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-slate-400 text-lg">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-cyan-400/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Build Your Next Project?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create a custom solution for your business
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
