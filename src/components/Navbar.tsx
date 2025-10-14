import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';

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

  const serviceLinks = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'App Development', path: '/services/app-development' },
    { name: 'E-commerce Solutions', path: '/services/ecommerce' },
    { name: 'Custom Software', path: '/services/custom-software' }
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
              DevCraft
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
                className={`flex items-center gap-1 transition-colors ${
                  location.pathname.includes('/services')
                    ? 'text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-3 hover:bg-slate-800 hover:text-cyan-400 transition-colors border-b border-slate-800 last:border-b-0"
                    >
                      {link.name}
                    </Link>
                  ))}
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

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-2 text-white hover:text-cyan-400 transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>



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
    </nav>
  );
}
