import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DevCraft</span>
            </div>
            <p className="text-slate-400 text-sm">
              Building exceptional digital solutions with cutting-edge technology and creative innovation.
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">App Development</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">E-commerce Solutions</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Custom Software</Link></li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm mb-4">
              <li className="flex items-center gap-2 justify-center md:justify-end">
                <Mail className="w-4 h-4 text-cyan-400" />
                info@devcraft.com
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-end">
                <Phone className="w-4 h-4 text-cyan-400" />
                +91 1234567890
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-end">
                <MapPin className="w-4 h-4 text-cyan-400" />
                udaipur,rajasthan,india
              </li>
            </ul>
            <div className="flex justify-center md:justify-end space-x-3">
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-white text-sm">
          <p>&copy; 2025 DevCraft. All rights reserved.</p>
        </div>


      </div>
    </footer>
  );
}
