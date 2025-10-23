import { Link } from 'react-router-dom';
import { Code2, CheckCircle, ArrowRight, Zap, Globe, Smartphone, Layers, FileText, ShoppingCart } from 'lucide-react';

export default function WordPressDevelopment() {
  const wordpressFeatures = [
    'Custom WordPress Themes',
    'Plugin Development',
    'WooCommerce Integration',
    'SEO Optimization',
    'Responsive Design',
    'Performance Optimization',
    'Security Hardening',
    'Content Management',
    'Third-Party Integrations',
    'Ongoing Support & Maintenance'
  ];

  const shopifyFeatures = [
    'Custom Shopify Themes',
    'App Development',
    'Store Setup & Configuration',
    'Payment Gateway Integration',
    'Inventory Management',
    'Analytics & Reporting',
    'Mobile Optimization',
    'Multi-channel Selling',
    'Custom Apps & Plugins',
    '24/7 Support & Updates'
  ];

  const wordpressTechnologies = [
    { name: 'WordPress', icon: FileText },
    { name: 'PHP', icon: Code2 },
    { name: 'MySQL', icon: Globe },
    { name: 'WooCommerce', icon: ShoppingCart },
    { name: 'Elementor', icon: Layers },
    { name: 'ACF', icon: Zap }
  ];

  const shopifyTechnologies = [
    { name: 'Shopify', icon: ShoppingCart },
    { name: 'Liquid', icon: Code2 },
    { name: 'JavaScript', icon: Zap },
    { name: 'GraphQL', icon: Globe },
    { name: 'Shopify Apps', icon: Smartphone },
    { name: 'Theme Kit', icon: Layers }
  ];

  const process = [
    {
      step: '1',
      title: 'Requirements Analysis',
      description: 'We analyze your business needs, target audience, and specific requirements for your WordPress or Shopify site.'
    },
    {
      step: '2',
      title: 'Planning & Design',
      description: 'Our team creates wireframes, mockups, and a detailed project plan tailored to your platform choice.'
    },
    {
      step: '3',
      title: 'Development & Setup',
      description: 'We build and configure your site using best practices, ensuring optimal performance and user experience.'
    },
    {
      step: '4',
      title: 'Testing & Optimization',
      description: 'Rigorous testing across devices and scenarios, followed by performance optimization and security checks.'
    },
    {
      step: '5',
      title: 'Launch & Training',
      description: 'We deploy your site and provide comprehensive training for content management and ongoing maintenance.'
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
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              WordPress & Shopify
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Build powerful, user-friendly websites and e-commerce stores with WordPress and Shopify. From custom themes to full store setups, we deliver solutions that drive results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  WordPress <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Development</span>
                </h2>
                <p className="text-slate-400">Flexible CMS solutions for any website</p>
              </div>
              <div className="grid gap-4">
                {wordpressFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Shopify <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">Development</span>
                </h2>
                <p className="text-slate-400">E-commerce solutions that scale</p>
              </div>
              <div className="grid gap-4">
                {shopifyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  WordPress <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Technologies</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {wordpressTechnologies.map((tech, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-center">
                    <tech.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <p className="font-semibold text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Shopify <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">Technologies</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {shopifyTechnologies.map((tech, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 text-center">
                    <tech.icon className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                    <p className="font-semibold text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">How we bring your WordPress or Shopify project to life</p>
          </div>

          <div className="space-y-8">
            {process.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
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
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Build Your Website?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your WordPress or Shopify project and create a solution that drives your business forward
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
