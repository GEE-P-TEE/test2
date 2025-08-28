import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiMapPin, FiUsers, FiCheck, FiCamera, FiUtensils } = FiIcons;

function Tours() {
  const itinerary = [
    {
      time: '7:00 AM',
      title: 'Pickup at Jordan Ferry Dock',
      description: 'Meet your friendly guide and board our comfortable air-conditioned vehicle',
      icon: FiMapPin,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      time: '8:00 AM',
      title: 'Oro Verde Mango Plantation',
      description: 'Premium mango tasting and learn about different mango varieties',
      icon: FiCheck,
      image: 'https://images.unsplash.com/photo-1553279036-c52492f8a18a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      time: '10:00 AM',
      title: 'Guimaras Wonder\'s Farm',
      description: 'Farm tour with Instagram-worthy photo opportunities among mango trees',
      icon: FiCamera,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      time: '12:00 PM',
      title: 'Traditional Filipino Lunch',
      description: 'Enjoy authentic local cuisine featuring creative mango-infused dishes',
      icon: FiUtensils,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      time: '2:00 PM',
      title: 'National Mango Research Center',
      description: 'Educational tour about mango science and research',
      icon: FiCheck,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      time: '3:30 PM',
      title: 'Eli Sustituido Farm',
      description: 'Final tasting session and fresh mango shopping at special prices',
      icon: FiCheck,
      image: 'https://images.unsplash.com/photo-1553279036-c52492f8a18a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      time: '5:00 PM',
      title: 'Return to Jordan Ferry Dock',
      description: 'Safe return with bags full of fresh mangoes and unforgettable memories',
      icon: FiMapPin,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const inclusions = [
    'Round-trip transportation from Jordan Ferry Dock',
    'All farm entrance fees and guided tours',
    'Traditional Filipino lunch with mango specialties',
    'Unlimited mango tastings at all farms',
    'Professional local guide throughout the tour',
    'Photo assistance and scenic spot recommendations',
    'Bottled water and light snacks',
    'Shopping assistance for fresh mangoes'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#228B22] to-[#32CD32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Full-Day Mango Farm Experience
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-green-100 mb-8">
              A complete 8-hour journey through Guimaras' finest mango farms, 
              featuring tastings, education, and authentic Filipino hospitality.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="w-6 h-6" />
                <span>8 Hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} className="w-6 h-6" />
                <span>Max 12 Guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="w-6 h-6" />
                <span>4 Premium Farms</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tour Itinerary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Day-by-Day Itinerary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every moment is carefully planned to give you the most authentic and enjoyable mango farm experience
            </p>
          </motion.div>

          <div className="space-y-8">
            {itinerary.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#FF8C00] rounded-full flex items-center justify-center mr-4">
                      <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-[#FF8C00]">{item.time}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What's Included in Your Tour
              </h2>
              <div className="space-y-4">
                {inclusions.map((inclusion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-[#228B22] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{inclusion}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tour Pricing</h3>
                <p className="text-gray-600">All-inclusive experience</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-[#FF8C00] mb-2">₱3,500</div>
                <div className="text-lg text-gray-600">per person</div>
              </div>
              
              <div className="space-y-3 mb-8 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Transportation & Guide</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between">
                  <span>All Farm Entries</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Traditional Lunch</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Mango Tastings</span>
                  <span>Unlimited</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold text-gray-900">
                  <span>Total Value</span>
                  <span>₱3,500</span>
                </div>
              </div>
              
              <Link
                to="/booking"
                className="w-full bg-gradient-to-r from-[#FF8C00] to-[#FF7F00] text-white py-4 rounded-xl text-lg font-semibold hover:from-[#FF7F00] hover:to-[#FF6B00] transition-all transform hover:scale-105 shadow-lg text-center block"
              >
                Book Your Adventure Now!
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tours;