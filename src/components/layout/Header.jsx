import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiMapPin, FiPhone, FiMail } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tour Experience', path: '/tour-experience' },
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-deep-navy text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiMapPin} className="text-mango-orange" />
              <span>Jordan Port, Guimaras</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiPhone} className="text-mango-orange" />
              <span>+63 917 123 4567</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiMail} className="text-mango-orange" />
            <span>hello@gwapo-mango-tours.com</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-mango-orange to-golden-yellow rounded-full flex items-center justify-center text-white font-bold text-xl">
                🥭
              </div>
              <div>
                <h1 className="text-xl font-bold text-deep-navy">Gwapo Mango Tours</h1>
                <p className="text-sm text-warm-gray hidden sm:block">Authentic Farm Adventures</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-deep-navy hover:text-mango-orange transition-colors duration-300 font-medium ${
                    location.pathname === item.path ? 'text-mango-orange' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/book"
                className="bg-mango-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold btn-hover transition-all duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-deep-navy hover:text-mango-orange transition-colors"
              aria-label="Toggle menu"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t shadow-lg"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`text-deep-navy hover:text-mango-orange transition-colors duration-300 font-medium py-2 ${
                        location.pathname === item.path ? 'text-mango-orange' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/book"
                    className="bg-mango-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-center mt-4 btn-hover transition-all duration-300"
                  >
                    Book Your Adventure
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;