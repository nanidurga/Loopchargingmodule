import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

interface NavLink {
  name: string;
  href: string;
  isPage?: boolean;
}

const navLinks: NavLink[] = [
  { name: 'Technology', href: '/#technology' },
  { name: 'Benefits', href: '/#benefits' },
  { name: 'Integration', href: '/#integration' },
  { name: 'Timeline', href: '/#timeline' },
  { name: 'Team', href: '/team', isPage: true },
  { name: 'Careers', href: '/careers', isPage: true },
  { name: 'FAQ', href: '/faq', isPage: true }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = useCallback((href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname === '/') {
        // If we're already on the home page, just scroll to the section
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // If we're on another page, navigate to home and then scroll
        navigate('/', { state: { scrollTo: id } });
      }
    } else {
      // For regular page links
      navigate(href);
    }
  }, [location, navigate]);

  // Listen for navigation state to handle scrolling after navigation
  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          // Clear the state after scrolling
          navigate(location.pathname, { replace: true });
        }, 100);
      }
    }
  }, [location, navigate]);

  const bgClass = isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent';

  const closeMobileMenu = useCallback(() => setIsOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${bgClass}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center pointer-events-auto"
            onClick={closeMobileMenu}
          >
            <div className="relative h-[70px] w-auto transition-all duration-300 md:h-[70px] lg:h-[70px]">
              <img 
                src={logo} 
                alt="LCM Logo" 
                className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                style={{ maxWidth: '180px' }}
                draggable="false"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                onClick={(e) => handleNavClick(link.href, e)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick('/#contact', e)}
              className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-md border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium text-white/70 hover:text-white transition-colors"
                    onClick={(e) => handleNavClick(link.href, e)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/#contact"
                  onClick={(e) => handleNavClick('/#contact', e)}
                  className="text-base font-medium text-primary-500 hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;