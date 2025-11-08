import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronDown, Calendar, Briefcase, Globe, Smartphone, ShoppingCart, Code, Palette, TrendingUp, Store } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setServicesOpen(false);
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  }, [location]);

  const developmentLinks = [
    { name: 'Web Development', path: '/services/web-development', icon: Globe },
    { name: 'WordPress & Shopify', path: '/services/wordpress-and-shopify', icon: Store },
    { name: 'App Development', path: '/services/app-development', icon: Smartphone },
    { name: 'E-commerce Solutions', path: '/services/e-commerce-solutions', icon: ShoppingCart },
    { name: 'Custom Software Development', path: '/services/custom-software-development', icon: Code },
    { name: 'Graphic Design', path: '/services/graphic-design', icon: Palette }
  ];

  const digitalMarketingLinks = [
    { name: 'Digital Marketing', path: '/services/digital-marketing', icon: TrendingUp }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Techxellence
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === '/'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => {
                if (closeTimeout) {
                  clearTimeout(closeTimeout);
                  setCloseTimeout(null);
                }
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setServicesOpen(false), 200);
                setCloseTimeout(timeout);
              }}
            >
              <Link
                to="/services"
                className={`flex items-center gap-2 transition-colors ${
                  location.pathname.includes('/services')
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-7xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-500">
                  <div className="w-80 border-r border-slate-700 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl"></div>
                    <div className="relative bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 rounded-xl p-8 text-center shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 border border-cyan-400/20">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent rounded-xl animate-pulse"></div>
                      <Calendar className="w-16 h-16 text-white mx-auto mb-4 drop-shadow-lg animate-bounce" />
                      <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">Book Consultation</h3>
                      <p className="text-slate-100 mb-8 text-base leading-relaxed">Get expert advice for your project and turn ideas into reality</p>
                      <Link
                        to="/contact"
                        className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-50 hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-white/20 text-lg"
                      >
                        Book Now →
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="px-4 py-3 text-cyan-400 font-semibold text-sm uppercase tracking-wider border-b border-slate-700">
                      Services
                    </div>
                    <div className="flex flex-col gap-2 px-4 py-3">
                      {[...developmentLinks, ...digitalMarketingLinks].map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300 border-b border-slate-800 last:border-b-0 group"
                        >
                          <link.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>



            <Link
              to="/about"
              className={`transition-colors ${
                location.pathname === '/about'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              About
            </Link>

            <Link
              to="/portfolio"
              className={`transition-colors ${
                location.pathname === '/portfolio'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/blog"
              className={`transition-colors ${
                location.pathname === '/blog'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`transition-colors ${
                location.pathname === '/contact'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className={`block py-2 transition-colors ${
                location.pathname === '/'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Home
            </Link>

            <button
              onClick={() => setServicesOpen(true)}
              className="flex items-center justify-between w-full py-2 text-white hover:text-cyan-400 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Services
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            <Link
              to="/about"
              className={`block py-2 transition-colors ${
                location.pathname === '/about'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              About
            </Link>

            <Link
              to="/portfolio"
              className={`block py-2 transition-colors ${
                location.pathname === '/portfolio'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/blog"
              className={`block py-2 transition-colors ${
                location.pathname === '/blog'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`block py-2 transition-colors ${
                location.pathname === '/contact'
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-full mt-2 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      {servicesOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-900 z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
            <h2 className="text-xl font-bold text-white">Services</h2>
            <button
              onClick={() => setServicesOpen(false)}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-center mb-6">
                <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Book Consultation</h3>
                <p className="text-slate-200 mb-6">Get expert advice for your project</p>
                <Link
                  to="/contact"
                  onClick={() => setServicesOpen(false)}
                  className="inline-block bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors"
                >
                  Book Now
                </Link>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-cyan-400 font-semibold text-lg uppercase tracking-wider mb-4">Development</h4>
                  <div className="space-y-2">
                    {developmentLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 text-white hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300 rounded-lg group"
                      >
                        <link.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-semibold text-lg uppercase tracking-wider mb-4">Digital Marketing</h4>
                  <div className="space-y-2">
                    {digitalMarketingLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 text-white hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300 rounded-lg group"
                      >
                        <link.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
