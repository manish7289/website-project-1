import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">DevCraft</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Building exceptional digital solutions with cutting-edge technology and creative innovation.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">App Development</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">E-commerce Solutions</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Custom Software</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                info@devcraft.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                123 Tech Street, Silicon Valley
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 DevCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
