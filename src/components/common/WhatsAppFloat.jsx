import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from './SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageCircle, FiX } = FiIcons;

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "+639171234567";
  const defaultMessage = "Hi! I'm interested in booking a mango farm tour. Can you help me?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-4 bg-white rounded-2xl shadow-2xl border max-w-sm w-80"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-lg">🥭</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Gwapo Mango Tours</h4>
                    <p className="text-xs opacity-90">Usually replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded-full transition-colors"
                >
                  <SafeIcon icon={FiX} size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="bg-gray-100 rounded-2xl p-3 mb-4">
                  <p className="text-sm text-gray-700">
                    👋 Hi there! Ready to explore Guimaras' sweetest mango farms? 
                    I'm here to help you plan your perfect adventure!
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-sm"
                  >
                    📅 Book a tour for today/tomorrow
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-sm"
                  >
                    ❓ Ask about tour details
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-sm"
                  >
                    🌤️ Check weather conditions
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-sm"
                  >
                    💬 Chat with us directly
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t text-center">
                  <p className="text-xs text-gray-500">
                    Powered by WhatsApp • End-to-end encrypted
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Float Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
            isOpen 
              ? 'bg-gray-500 hover:bg-gray-600' 
              : 'bg-green-500 hover:bg-green-600 animate-pulse-slow'
          }`}
        >
          <SafeIcon icon={isOpen ? FiX : FiMessageCircle} size={24} />
        </motion.button>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default WhatsAppFloat;