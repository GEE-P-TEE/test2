import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiHeart } = FiIcons;

function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/tours', label: 'Tour Details' },
    { path: '/booking', label: 'Book Now' },
    { path: '/contact', label: 'Contact' },
  ];

  const tourInfo = [
    'Daily Tours Available',
    '7:00 AM - 5:00 PM',
    '₱3,500 per person',
    'Max 12 guests per tour',
    '4 Premium Mango Farms'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF8C00] to-[#FF7F00] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🥭</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#FF8C00]">Gwapo Mango Tours</h3>
                <p className="text-sm text-gray-400">Guimaras Experience</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Sharing the sweetness of Guimaras with the world through authentic 
              mango farm experiences and genuine Filipino hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#FF8C00] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tour Information</h4>
            <ul className="space-y-3">
              {tourInfo.map((info, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {info}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-[#FF8C00]" />
                <span className="text-gray-300 text-sm">+63 917 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-[#FF8C00]" />
                <span className="text-gray-300 text-sm">hello@gwapomangotours.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-[#FF8C00] mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Jordan Ferry Dock</p>
                  <p>Guimaras Island, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Gwapo Mango Tours. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500" />
              <span>in Guimaras, Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;