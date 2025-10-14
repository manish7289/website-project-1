import { Link } from 'react-router-dom';
import { ShoppingCart, CheckCircle, ArrowRight, CreditCard, Package, TrendingUp } from 'lucide-react';

export default function Ecommerce() {
  const features = [
    'Custom Shopping Cart',
    'Product Catalog Management',
    'Secure Payment Gateway',
    'Inventory Management',
    'Order Processing System',
    'Customer Accounts',
    'Wishlist & Favorites',
    'Product Reviews & Ratings',
    'Multi-Currency Support',
    'Shipping Integration',
    'Discount & Coupon System',
    'Analytics Dashboard'
  ];

  const platforms = [
    {
      name: 'Custom Build',
      description: 'Fully customized e-commerce solution built from scratch',
      icon: ShoppingCart,
      color: 'from-orange-500 to-rose-600'
    },
    {
      name: 'Shopify',
      description: 'Powerful platform with extensive features and apps',
      icon: Package,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'WooCommerce',
      description: 'WordPress-based flexible e-commerce solution',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-600'
    }
  ];



  const features_detailed = [
    {
      icon: ShoppingCart,
      title: 'Shopping Cart',
      description: 'Intuitive cart with save for later, quick view, and easy checkout process.'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure integration with Stripe, PayPal, Square, and other major gateways.'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Real-time stock tracking, low stock alerts, and automated reordering.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reports',
      description: 'Comprehensive sales reports, customer insights, and performance metrics.'
    }
  ];

  const portfolio = [
    {
      title: 'Fashion Boutique',
      category: 'Clothing Store',
      image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { products: '500+', revenue: '+250%', time: '8 weeks' }
    },
    {
      title: 'Tech Gadgets Store',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { products: '1000+', revenue: '+180%', time: '10 weeks' }
    },
    {
      title: 'Organic Market',
      category: 'Food & Grocery',
      image: 'https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { products: '300+', revenue: '+200%', time: '6 weeks' }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              E-commerce Development
              <span className="block bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Launch your online store with powerful e-commerce solutions. We build secure, scalable platforms that drive sales and deliver exceptional shopping experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              E-commerce <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">Platforms</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 text-center">
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
              Powerful <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features_detailed.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 text-center">
                <feature.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Success <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-orange-400 text-sm mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-orange-400">{project.stats.products}</div>
                      <div className="text-xs text-slate-400">Products</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-orange-400">{project.stats.revenue}</div>
                      <div className="text-xs text-slate-400">Revenue</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-orange-400">{project.stats.time}</div>
                      <div className="text-xs text-slate-400">Timeline</div>
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
          <div className="relative bg-gradient-to-br from-orange-600 via-rose-600 to-pink-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Launch Your Online Store?
              </h2>
              <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
                Start selling online with a powerful e-commerce platform
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-rose-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
