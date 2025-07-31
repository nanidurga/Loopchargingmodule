import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
import logo from '../../assets/logo.png';
import { handleNavigation } from '../../utils/navigation';

const sectionLinks = [
  { name: 'Technology', href: '/#technology' },
  { name: 'Benefits', href: '/#benefits' },
  { name: 'Integration', href: '/#integration' },
];

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="bg-dark-800 border-t border-white/10">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo + Description */}
          <div className="space-y-5 text-center md:text-left">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="LCM Logo" 
                className="block h-[100px] sm:h-[140px] w-auto max-w-full transition-transform duration-300 hover:scale-105 mx-auto md:mx-0"
                draggable="false"
              />
            </Link>
            <p className="text-white/70 text-base leading-relaxed">
              Revolutionizing EV charging with innovative in-motion charging technology.
              Drive further, charge less.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-base">
              {sectionLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    onClick={e => handleNavigation(link.href, e, location, navigate)} 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/team" className="text-white/70 hover:text-white transition-colors">Team</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/careers" className="text-white/70 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link 
                  to="/#contact" 
                  onClick={e => handleNavigation('/#contact', e, location, navigate)} 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-5 mb-4">
              <a 
                href="https://www.linkedin.com/company/loop-charging-module-lcm/posts/?feedView=all"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors" 
                aria-label="LCM LinkedIn"
              >
                <Linkedin size={26} />
              </a>
              <a 
                href="mailto:loopchargingmodule@lcmev.com" 
                className="text-white/70 hover:text-white transition-colors" 
                aria-label="Email LCM"
              >
                <Mail size={26} />
              </a>
            </div>
            <div className="text-white/70 text-base space-y-2">
              <p>
                <a 
                  href="mailto:loopchargingmodule@lcmev.com" 
                  className="hover:text-white transition-colors inline-flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  loopchargingmodule@lcmev.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+919014154250" 
                  className="hover:text-white transition-colors"
                >
                  +91 90141 54250
                </a>
              </p>
              <p className="mt-2 leading-relaxed">
                NO.153, F-1, FIRST FLOOR, SMS PLAZA,<br />
                5TH MAIN, 7TH SECTOR, HSR LAYOUT<br />
                BENGALURU - 560102, KARNATAKA
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Loop Charging Module. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
