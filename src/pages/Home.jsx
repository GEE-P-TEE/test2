import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Hero from '../components/Hero';
import TourHighlights from '../components/TourHighlights';
import BookingWidget from '../components/BookingWidget';
import Testimonials from '../components/Testimonials';

const { FiStar, FiUsers, FiClock, FiMapPin } = FiIcons;

function Home() {
  const stats = [
    { icon: FiUsers, value: '2,500+', label: 'Happy Tourists' },
    { icon: FiStar, value: '4.9/5', label: 'Average Rating' },
    { icon: FiClock, value: '8 Hours', label: 'Full Day Tour' },
    { icon: FiMapPin, value: '4 Farms', label: 'Premium Locations' },
  ];

  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF8C00] to-[#FF7F00] rounded-full mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TourHighlights />
      
      {/* Price & CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF8C00] to-[#FF7F00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Mango Adventure?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Full-day guided tour including transportation, all farm entries, traditional lunch, and unlimited mango tastings!
            </p>
            <div className="mb-8">
              <span className="text-5xl font-bold">₱3,500</span>
              <span className="text-xl text-orange-100 ml-2">per person</span>
            </div>
            <Link
              to="/booking"
              className="inline-block bg-white text-[#FF8C00] px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors transform hover:scale-105"
            >
              Book Your Tour Today!
            </Link>
          </motion.div>
        </div>
      </section>

      <BookingWidget />
      <Testimonials />
    </div>
  );
}

export default Home;