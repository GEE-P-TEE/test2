import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiMapPin, FiClock } = FiIcons;

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1553279036-c52492f8a18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      {/* Floating Mango Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: 0 
            }}
            animate={{ 
              y: -100,
              rotate: 360,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          >
            🥭
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
            Experience the World's
            <span className="block text-[#FFD700]">Sweetest Mangoes</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
            Join us for an unforgettable journey through Guimaras' premium mango farms. 
            Taste, learn, and create memories in the Philippines' mango capital!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-black bg-opacity-30 px-4 py-2 rounded-full">
              <SafeIcon icon={FiMapPin} className="w-5 h-5" />
              <span>Pickup at Jordan Ferry Dock</span>
            </div>
            <div className="flex items-center space-x-2 bg-black bg-opacity-30 px-4 py-2 rounded-full">
              <SafeIcon icon={FiClock} className="w-5 h-5" />
              <span>Daily Tours 7:00 AM - 5:00 PM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="bg-gradient-to-r from-[#FF8C00] to-[#FF7F00] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#FF7F00] hover:to-[#FF6B00] transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Mango Adventure Today!
            </Link>
            
            <button className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-4 rounded-full hover:bg-opacity-30 transition-all">
              <SafeIcon icon={FiPlay} className="w-5 h-5" />
              <span>Watch Tour Preview</span>
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;