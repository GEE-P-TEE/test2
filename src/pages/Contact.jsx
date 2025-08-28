import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiMessageSquare, FiSend } = FiIcons;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the message via Supabase
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Call Us',
      details: ['+63 917 123 4567', '+63 908 765 4321'],
      description: 'Available 7 AM - 7 PM daily'
    },
    {
      icon: FiMail,
      title: 'Email Us',
      details: ['hello@gwapomangotours.com', 'bookings@gwapomangotours.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: FiMapPin,
      title: 'Pickup Location',
      details: ['Jordan Ferry Dock', 'Guimaras Island, Philippines'],
      description: '7:00 AM sharp daily pickup'
    },
    {
      icon: FiMessageSquare,
      title: 'WhatsApp',
      details: ['+63 917 123 4567'],
      description: 'Quick booking and inquiries'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our mango farm tours? Need to make special arrangements? 
            We're here to help make your Guimaras experience perfect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF8C00] to-[#FF7F00] rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={info.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-[#228B22] to-[#32CD32] rounded-2xl p-6 text-white"
            >
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiClock} className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Emergency During Tours</h3>
              </div>
              <p className="mb-3">
                If you need immediate assistance during your tour, contact our emergency hotline:
              </p>
              <p className="text-2xl font-bold">+63 917 EMERGENCY</p>
              <p className="text-sm text-green-100 mt-2">
                Available 24/7 during tour days only
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                    placeholder="Tell us about your inquiry, special requests, or any questions you have about our mango farm tours..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF8C00] to-[#FF7F00] text-white py-4 rounded-xl text-lg font-semibold hover:from-[#FF7F00] hover:to-[#FF6B00] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Quick Response Guarantee:</strong> We typically respond to all inquiries within 2-4 hours during business hours (7 AM - 7 PM).
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Our Pickup Location
            </h2>
            <p className="text-lg text-gray-600">
              We meet all guests at Jordan Ferry Dock - the main entry point to Guimaras Island
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <SafeIcon icon={FiMapPin} className="w-16 h-16 text-[#FF8C00] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Jordan Ferry Dock
                </h3>
                <p className="text-gray-600 mb-4">
                  San Miguel, Jordan, Guimaras, Philippines
                </p>
                <p className="text-sm text-gray-500">
                  Interactive map integration would be implemented in production
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;