import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiMapPin, FiCheck, FiUsers, FiCamera, FiArrowRight, FiPlay, FiStar } = FiIcons;

const TourExperiencePage = () => {
  const [activeStop, setActiveStop] = useState(0);

  const tourStops = [
    {
      id: 1,
      time: '8:00 - 9:30 AM',
      title: 'Trappist Monastery Mango Orchard',
      location: 'Jordan, Guimaras',
      description: 'Begin your journey at the historic Trappist Monastery, home to century-old mango trees that have witnessed generations of traditional farming methods. Walk through sacred grounds where monks have perfected their agricultural practices, creating some of the most prized mangoes in the Philippines.',
      highlights: [
        'Century-old heritage mango trees',
        'Traditional monastic farming methods',
        'Historical insights from local guides',
        'Peaceful monastery grounds exploration',
        'Photo opportunities in sacred gardens'
      ],
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 2,
      time: '10:00 - 11:30 AM',
      title: 'Raymen Beach Resort Mango Farm',
      location: 'Nueva Valencia, Guimaras',
      description: 'Experience the unique beauty of beachfront mango cultivation at Raymen Beach Resort. This scenic plantation offers stunning coastal views while you participate in hands-on mango picking activities and learn about the special growing conditions that make Guimaras mangoes world-renowned.',
      highlights: [
        'Beachfront mango plantation with ocean views',
        'Hands-on mango picking experience',
        'Learn about coastal growing conditions',
        'Photo session with scenic backdrops',
        'Fresh mango sampling directly from trees'
      ],
      images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 3,
      time: '12:30 - 2:00 PM',
      title: 'Local Mango Processing Center',
      location: 'San Lorenzo, Guimaras',
      description: 'Discover the journey from farm to table at our partner processing center. Watch how fresh mangoes are transformed into various products like dried mangoes, puree, and preserves while enjoying a traditional Filipino lunch featuring local specialties and, of course, fresh mango desserts.',
      highlights: [
        'Live mango processing demonstration',
        'Traditional Filipino lunch with local specialties',
        'Learn about mango product varieties',
        'Taste testing of different mango products',
        'Meet local processing artisans'
      ],
      images: [
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 4,
      time: '2:30 - 4:30 PM',
      title: 'Nueva Valencia Heritage Mango Grove',
      location: 'Nueva Valencia, Guimaras',
      description: 'Conclude your adventure at the award-winning Nueva Valencia Heritage Grove, home to the finest mango varieties that have put Guimaras on the world map. Participate in an extensive tasting session and shop for premium mango products to take home as souvenirs.',
      highlights: [
        'Award-winning mango variety showcase',
        'Extensive mango tasting session',
        'Premium souvenir shopping',
        'Certificate of completion presentation',
        'Group photo with heritage trees'
      ],
      images: [
        'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
      ]
    }
  ];

  const included = [
    'Air-conditioned transportation from Jordan Port',
    'English/Filipino speaking professional guide',
    'All farm entrance fees and permits',
    'Traditional Filipino lunch with local specialties',
    'Unlimited mango tastings at all stops',
    'Souvenir mango pack to take home',
    'Bottled water throughout the tour',
    'Professional tour photos (digital copies)',
    'Certificate of completion',
    'Emergency support and insurance'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Canada',
      rating: 5,
      text: 'The monastery was absolutely magical! Learning about traditional farming methods while surrounded by century-old trees was unforgettable.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Miguel Rodriguez',
      location: 'Spain',
      rating: 5,
      text: 'The beachfront farm was incredible! Never imagined mangoes could grow so close to the ocean. The views were spectacular.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1920&h=800&fit=crop')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Complete Tour Experience
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              A carefully crafted journey through four unique locations showcasing 
              the best of Guimaras' mango heritage
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="text-mango-orange" />
                <span>10 Hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} className="text-mango-orange" />
                <span>Max 12 People</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="text-mango-orange" />
                <span>4 Locations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tour Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Your Day-by-Day Itinerary
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Follow our expertly planned route through Guimaras' most prestigious mango farms, 
              each offering unique insights into agricultural heritage and local culture.
            </p>
          </motion.div>

          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tourStops.map((stop, index) => (
              <button
                key={stop.id}
                onClick={() => setActiveStop(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeStop === index
                    ? 'bg-mango-orange text-white shadow-lg'
                    : 'bg-gray-100 text-deep-navy hover:bg-gray-200'
                }`}
              >
                Stop {stop.id}: {stop.time}
              </button>
            ))}
          </div>

          {/* Active Stop Details */}
          <motion.div
            key={activeStop}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-soft-cream rounded-3xl overflow-hidden shadow-soft"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Gallery */}
              <div className="relative">
                <img 
                  src={tourStops[activeStop].images[0]}
                  alt={tourStops[activeStop].title}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-mango-orange text-white px-4 py-2 rounded-full font-medium">
                  {tourStops[activeStop].time}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-deep-navy mb-4">
                  {tourStops[activeStop].title}
                </h3>
                
                <div className="flex items-center text-warm-gray mb-6">
                  <SafeIcon icon={FiMapPin} className="mr-2" />
                  <span>{tourStops[activeStop].location}</span>
                </div>

                <p className="text-deep-navy mb-8 leading-relaxed">
                  {tourStops[activeStop].description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-deep-navy mb-4">Experience Highlights:</h4>
                  <ul className="space-y-2">
                    {tourStops[activeStop].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <SafeIcon icon={FiCheck} className="text-tropical-green mt-1 mr-3 flex-shrink-0" size={16} />
                        <span className="text-warm-gray">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-4">
                  <SafeIcon icon={FiCamera} className="text-mango-orange" />
                  <span className="text-sm text-warm-gray">Perfect for photography and social media</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-light-green">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
                Everything is Included
              </h2>
              <p className="text-warm-gray text-lg mb-8">
                We believe in transparent pricing with no hidden costs. Your ₱3,500 per person 
                covers absolutely everything you need for a perfect day exploring Guimaras.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <SafeIcon icon={FiCheck} className="text-tropical-green mt-1 flex-shrink-0" size={16} />
                    <span className="text-deep-navy text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-2xl shadow-soft">
                <div className="text-center">
                  <div className="text-3xl font-bold text-mango-orange mb-2">₱3,500</div>
                  <div className="text-deep-navy font-medium mb-1">Per Person</div>
                  <div className="text-warm-gray text-sm">All-inclusive pricing • No hidden fees</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=600&fit=crop"
                alt="Tour inclusions"
                className="w-full rounded-2xl shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Premium Experience</h3>
                  <p className="text-gray-200 text-sm">
                    From transportation to souvenirs, we've thought of everything 
                    to make your mango adventure seamless and memorable.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Experience Stories
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Hear directly from our guests about their unforgettable mango farm adventures 
              and the memories they created in beautiful Guimaras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="text-golden-yellow fill-current" size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-deep-navy italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&h=600&fit=crop"
                alt="Tour video preview"
                className="w-full h-96 object-cover opacity-75"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-mango-orange hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 btn-hover">
                  <SafeIcon icon={FiPlay} size={32} className="text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-xl font-bold mb-2">Watch Our Tour Highlights</h3>
                <p className="text-gray-200 text-sm">
                  See what makes our mango farm tours so special through the eyes of our guests
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mango-orange to-golden-yellow">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join us for an unforgettable journey through Guimaras' finest mango farms. 
              Book now to secure your spot in our exclusive small-group experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-white text-mango-orange hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg btn-hover transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Book Your Tour Now</span>
                <SafeIcon icon={FiArrowRight} />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-mango-orange text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Ask Questions First</span>
              </Link>
            </div>

            <div className="mt-8 text-sm text-white/80">
              <p>Tours available daily except Sundays • Book 24 hours in advance</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Booking Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-40 md:hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-deep-navy">₱3,500</div>
            <div className="text-sm text-warm-gray">per person</div>
          </div>
          <Link
            to="/book"
            className="bg-mango-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold btn-hover transition-all duration-300 flex items-center space-x-2"
          >
            <span>Book Now</span>
            <SafeIcon icon={FiArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourExperiencePage;