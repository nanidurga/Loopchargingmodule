import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';
import { handleNavigation } from '../../utils/navigation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 text-center md:text-left">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="LCM Logo" 
                className="block h-[80px] sm:h-[130px] w-auto max-w-full transition-all duration-300 hover:scale-105 mb-4 mx-auto md:mx-0"
                draggable="false"
              />
            </Link>
            <p className="text-white/70 text-sm">
              Revolutionizing EV charging with innovative in-motion charging technology. Drive further, charge less.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#technology" onClick={(e) => handleNavigation('/#technology', e)} className="text-white/70 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/#benefits" onClick={(e) => handleNavigation('/#benefits', e)} className="text-white/70 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/#integration" onClick={(e) => handleNavigation('/#integration', e)} className="text-white/70 hover:text-white transition-colors">
                  Integration
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/70 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/careers" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/#contact" onClick={(e) => handleNavigation('/#contact', e)} className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/company/loop-charging-module-lcm/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LCM LinkedIn">
                <Linkedin size={24} />
              </a>
              {/* Mail Icon */}
              <a href="mailto:loopchargingmodule@lcmev.com" className="text-white/70 hover:text-white transition-colors" aria-label="Email LCM">
                <Mail size={24} />
              </a>
            </div>
            <div className="text-white/70 text-sm space-y-1">
              <p>
                <a href="mailto:loopchargingmodule@lcmev.com" className="hover:text-white transition-colors inline-flex items-center">
                  <Mail size={16} className="mr-2" />
                  loopchargingmodule@lcmev.com
                </a>
              </p>
              <p>
                <a href="tel:+919014154250" className="hover:text-white transition-colors">
                  +91 9014154250
                </a>
              </p>
              <p className="mt-2">
                NO.153, F-1, FIRST FLOOR, SMS PLAZA,<br />
                5TH MAIN, 7TH SECTOR, HSR LAYOUT<br />
                BENGALURU - 560102, KARNATAKA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Loop Charging Module. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;