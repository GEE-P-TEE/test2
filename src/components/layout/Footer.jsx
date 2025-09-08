import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-mango-orange to-golden-yellow rounded-full flex items-center justify-center text-white font-bold">
                🥭
              </div>
              <div>
                <h3 className="text-lg font-bold">Gwapo Mango Tours</h3>
                <p className="text-sm text-gray-300">Authentic Farm Adventures</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover the world's sweetest mangoes through authentic farm experiences in beautiful Guimaras. 
              Small groups, premium quality, unforgettable memories.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-mango-orange transition-colors">
                <SafeIcon icon={FiFacebook} size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mango-orange transition-colors">
                <SafeIcon icon={FiInstagram} size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-mango-orange transition-colors">
                <SafeIcon icon={FiTwitter} size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-mango-orange transition-colors">Home</Link></li>
              <li><Link to="/tour-experience" className="text-gray-300 hover:text-mango-orange transition-colors">Tour Experience</Link></li>
              <li><Link to="/book" className="text-gray-300 hover:text-mango-orange transition-colors">Book Now</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-mango-orange transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-mango-orange transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-mango-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Tour Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tour Info</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Daily tours except Sundays</li>
              <li>• 7:00 AM - 5:00 PM</li>
              <li>• Maximum 12 guests</li>
              <li>• ₱3,500 per person</li>
              <li>• Pickup at Jordan Port</li>
              <li>• All-inclusive experience</li>
            </ul>
            <Link 
              to="/updates" 
              className="inline-block mt-4 text-mango-orange hover:text-golden-yellow transition-colors text-sm font-medium"
            >
              Check Weather Updates →
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="text-mango-orange mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">Jordan Port Terminal</p>
                  <p className="text-gray-300 text-sm">Guimaras, Philippines 5045</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-mango-orange flex-shrink-0" size={16} />
                <a href="tel:+639171234567" className="text-gray-300 hover:text-mango-orange transition-colors text-sm">
                  +63 917 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-mango-orange flex-shrink-0" size={16} />
                <a href="mailto:hello@gwapo-mango-tours.com" className="text-gray-300 hover:text-mango-orange transition-colors text-sm">
                  hello@gwapo-mango-tours.com
                </a>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="mt-6 p-3 bg-gray-800 rounded-lg">
              <h5 className="text-sm font-semibold text-mango-orange mb-1">24/7 Emergency</h5>
              <p className="text-gray-300 text-sm">+63 917 765 4321</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-1">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest tour updates and mango season news</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:border-mango-orange focus:outline-none"
              />
              <button className="px-6 py-2 bg-mango-orange hover:bg-orange-600 text-white rounded-r-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Gwapo Mango Tours. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-mango-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-mango-orange transition-colors">Terms of Service</Link>
            <Link to="/cancellation" className="hover:text-mango-orange transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;