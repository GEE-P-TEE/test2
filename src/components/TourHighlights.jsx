import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTruck, FiHome, FiCamera, FiUtensils, FiAward, FiShoppingBag } = FiIcons;

function TourHighlights() {
  const highlights = [
    {
      icon: FiTruck,
      title: 'Convenient Pickup',
      description: 'We pick you up right at Jordan Ferry Dock - no hassle, no confusion!',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiHome,
      title: '4 Premium Farms',
      description: 'Visit Oro Verde, Guimaras Wonders, NMRDC, and Eli Sustituido farms',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiCamera,
      title: 'Instagram-Worthy Spots',
      description: 'Capture stunning photos among mango trees and scenic landscapes',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiUtensils,
      title: 'Traditional Filipino Lunch',
      description: 'Enjoy authentic local cuisine featuring delicious mango-infused dishes',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiAward,
      title: 'Expert Local Guides',
      description: 'Learn from passionate locals who know every mango variety and farming secret',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: FiShoppingBag,
      title: 'Fresh Mango Shopping',
      description: 'Take home the sweetest mangoes directly from the farm at special prices',
      image: 'https://images.unsplash.com/photo-1553279036-c52492f8a18a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#FF8C00]">Gwapo Mango Tours?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've crafted the perfect mango farm experience that combines education, 
            adventure, and the authentic taste of Guimaras hospitality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${highlight.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-[#FF8C00] rounded-full flex items-center justify-center">
                    <SafeIcon icon={highlight.icon} className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TourHighlights;