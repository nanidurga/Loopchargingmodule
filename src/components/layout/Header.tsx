import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';
import { handleNavigation } from '../../utils/navigation';

const navLinks = [
  { name: 'Technology', href: '/#technology', isSection: true },
  { name: 'Benefits', href: '/#benefits', isSection: true },
  { name: 'Integration', href: '/#integration', isSection: true },
  { name: 'Timeline', href: '/timeline', isSection: false },
  { name: 'Team', href: '/team', isSection: false },
  { name: 'Careers', href: '/careers', isSection: false },
  { name: 'FAQ', href: '/faq', isSection: false },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  const bgClass = scrolled
    ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/10'
    : 'bg-transparent';

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
              link.isSection ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(link.href, e, location, navigate)}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/#contact"
              onClick={(e) => handleNavigation('/#contact', e, location, navigate)}
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
            aria-expanded={isOpen}
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
                  link.isSection ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-base font-medium text-white/70 hover:text-white transition-colors"
                      onClick={(e) => {
                        handleNavigation(link.href, e, location, navigate);
                        closeMobileMenu();
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-base font-medium text-white/70 hover:text-white transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <Link
                  to="/#contact"
                  onClick={(e) => {
                    handleNavigation('/#contact', e, location, navigate);
                    closeMobileMenu();
                  }}
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