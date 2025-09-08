import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiUsers, FiMapPin, FiStar, FiCheck, FiArrowRight, FiCalendar, FiCamera, FiMessageCircle } = FiIcons;

const HomePage = () => {
  const features = [
    {
      icon: FiUsers,
      title: 'Small Groups Only',
      description: 'Maximum 12 people for intimate, personalized experiences'
    },
    {
      icon: FiClock,
      title: 'Full Day Adventure',
      description: '7 AM - 5 PM complete farm-to-table journey'
    },
    {
      icon: FiMapPin,
      title: '4 Unique Stops',
      description: 'Historic monasteries, beachfront farms, processing centers'
    },
    {
      icon: FiCheck,
      title: 'All Inclusive',
      description: 'Transportation, guide, lunch, tastings, souvenirs'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'Manila',
      rating: 5,
      text: 'Absolutely incredible! The sweetest mangoes I\'ve ever tasted and our guide knew everything about the farming process.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'John Mitchell',
      location: 'Australia',
      rating: 5,
      text: 'Perfect introduction to Filipino agriculture. The monastery farm was breathtaking and lunch was amazing!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lisa Chen',
      location: 'Singapore',
      rating: 5,
      text: 'Small group made it feel special. Got to pick mangoes myself and learned so much about Guimaras culture.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const tourStops = [
    {
      time: '8:00 AM',
      title: 'Trappist Monastery',
      description: 'Century-old mango trees & traditional farming',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      time: '10:00 AM',
      title: 'Raymen Beach Resort',
      description: 'Beachfront plantation & hands-on picking',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
    },
    {
      time: '12:30 PM',
      title: 'Processing Center',
      description: 'Mango products & traditional lunch',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop'
    },
    {
      time: '2:30 PM',
      title: 'Heritage Grove',
      description: 'Award-winning varieties & tasting session',
      image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 140, 66, 0.3), rgba(243, 156, 18, 0.3)), url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover the World's
              <span className="block text-golden-yellow">Sweetest Mangoes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
              Experience authentic farm tours in beautiful Guimaras. Small groups, premium quality, unforgettable memories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/book"
                className="bg-mango-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg btn-hover transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Book Your Mango Adventure</span>
                <SafeIcon icon={FiArrowRight} />
              </Link>
              <Link
                to="/tour-experience"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCamera} />
                <span>View Tour Details</span>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-yellow">₱3,500</div>
                <div className="text-sm text-gray-200">Per Person</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-yellow">10 Hours</div>
                <div className="text-sm text-gray-200">Full Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-yellow">Max 12</div>
                <div className="text-sm text-gray-200">Group Size</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Why Choose Gwapo Mango Tours?
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              We provide authentic, small-group experiences that showcase the best of Guimaras' 
              agricultural heritage and world-famous mango varieties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-soft-cream card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-mango-orange to-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-2">{feature.title}</h3>
                <p className="text-warm-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Overview Section */}
      <section className="py-20 bg-light-green">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Your Mango Farm Adventure
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Follow our carefully crafted itinerary through four unique locations, 
              each offering a different perspective on Guimaras' mango heritage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourStops.map((stop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft card-hover"
              >
                <div className="relative">
                  <img 
                    src={stop.image} 
                    alt={stop.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-mango-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {stop.time}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-deep-navy mb-2">{stop.title}</h3>
                  <p className="text-warm-gray text-sm">{stop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/tour-experience"
              className="bg-mango-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold btn-hover transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>See Complete Itinerary</span>
              <SafeIcon icon={FiArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              What Our Guests Say
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what travelers from around the world 
              have to say about their mango farm adventures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-soft-cream rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-deep-navy">{testimonial.name}</h4>
                    <p className="text-warm-gray text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="text-golden-yellow fill-current" size={16} />
                  ))}
                </div>
                <p className="text-deep-navy italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="text-mango-orange hover:text-orange-600 font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <span>Read More Reviews</span>
              <SafeIcon icon={FiArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-20 bg-gradient-to-br from-mango-orange to-golden-yellow">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Mango Adventure?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Tours run daily except Sundays. Book at least 24 hours in advance to secure your spot 
              in our intimate group experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/book"
                className="bg-white text-mango-orange hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg btn-hover transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} />
                <span>Check Available Dates</span>
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-mango-orange text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiMessageCircle} />
                <span>Ask Questions</span>
              </Link>
            </div>

            <div className="text-sm text-white/80">
              <p>• Full refund if cancelled 48+ hours in advance</p>
              <p>• Weather-dependent with flexible rescheduling</p>
              <p>• Pickup exclusively at Jordan Port</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;