import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube, ArrowRight, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              <span className="relative z-10">About Techxellence</span>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            </h4>
            <p className="text-white text-sm leading-relaxed">
              Techxellence is a leading digital solutions provider specializing in web development,
              mobile applications, and digital marketing. We transform ideas into innovative digital
              experiences that drive business growth.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              <span className="relative z-10">Services</span>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="group flex items-center gap-2 text-white hover:text-cyan-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="group flex items-center gap-2 text-white hover:text-cyan-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="group flex items-center gap-2 text-white hover:text-cyan-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  E-commerce
                </Link>
              </li>
              <li>
                <Link to="/services/custom-software" className="group flex items-center gap-2 text-white hover:text-cyan-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              <span className="relative z-10">Digital Marketing</span>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/digital-marketing/seo" className="group flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing/ppc" className="group flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  PPC
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing/social-media-marketing" className="group flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing/content-marketing" className="group flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              <span className="relative z-10">Company</span>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="group flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="group flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="group flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm">info@devcraft.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm">+91 1234567890</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm">Udaipur, Rajasthan</p>
                  <p className="text-white text-sm">India</p>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Instagram className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Facebook className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group">
                <Youtube className="w-5 h-5 text-white group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © 2025 Techxellence. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
