import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiCalendar, FiMapPin, FiClock, FiUsers, FiDownload, FiShare2, FiPhone, FiMail, FiMessageCircle } = FiIcons;

const BookingConfirmationPage = () => {
  const { id } = useParams();
  
  // Mock booking data - in real app, fetch based on ID
  const booking = {
    id: 'GMT-2024-001',
    status: 'confirmed',
    tourDate: new Date('2024-02-15'),
    guestCount: 4,
    totalAmount: 14000,
    guestName: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '+63 917 123 4567',
    paymentMethod: 'GCash',
    specialRequirements: 'One vegetarian meal needed'
  };

  const whatToBring = [
    'Comfortable walking shoes',
    'Sun hat and sunglasses', 
    'Sunscreen (SPF 30+)',
    'Camera or smartphone',
    'Light jacket for air-conditioned transport',
    'Valid ID for verification',
    'Reusable water bottle (optional)',
    'Cash for additional souvenirs'
  ];

  const itinerary = [
    { time: '7:00 AM', activity: 'Pickup at Jordan Port Terminal' },
    { time: '8:00 AM', activity: 'Trappist Monastery Mango Orchard' },
    { time: '10:00 AM', activity: 'Raymen Beach Resort Mango Farm' },
    { time: '12:30 PM', activity: 'Local Mango Processing Center & Lunch' },
    { time: '2:30 PM', activity: 'Nueva Valencia Heritage Mango Grove' },
    { time: '5:00 PM', activity: 'Return to Jordan Port Terminal' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 bg-tropical-green rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiCheck} size={40} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-deep-navy mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-warm-gray text-lg">
            Your mango farm adventure is all set. We can't wait to show you the sweetest experience in Guimaras!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-soft p-6"
            >
              <h2 className="text-xl font-bold text-deep-navy mb-6">Booking Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-warm-gray font-medium">Booking Reference</label>
                  <div className="text-lg font-semibold text-deep-navy">{booking.id}</div>
                </div>
                
                <div>
                  <label className="text-sm text-warm-gray font-medium">Status</label>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-tropical-green rounded-full"></div>
                    <span className="text-lg font-semibold text-tropical-green capitalize">{booking.status}</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-warm-gray font-medium">Tour Date</label>
                  <div className="text-lg font-semibold text-deep-navy">
                    {booking.tourDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-warm-gray font-medium">Number of Guests</label>
                  <div className="text-lg font-semibold text-deep-navy">{booking.guestCount} people</div>
                </div>

                <div>
                  <label className="text-sm text-warm-gray font-medium">Total Amount</label>
                  <div className="text-lg font-semibold text-mango-orange">₱{booking.totalAmount.toLocaleString()}</div>
                </div>

                <div>
                  <label className="text-sm text-warm-gray font-medium">Payment Method</label>
                  <div className="text-lg font-semibold text-deep-navy">{booking.paymentMethod}</div>
                </div>
              </div>

              {booking.specialRequirements && (
                <div className="mt-6 p-4 bg-soft-cream rounded-lg">
                  <label className="text-sm text-warm-gray font-medium">Special Requirements</label>
                  <div className="text-deep-navy mt-1">{booking.specialRequirements}</div>
                </div>
              )}
            </motion.div>

            {/* Tour Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-soft p-6"
            >
              <h2 className="text-xl font-bold text-deep-navy mb-6">Your Tour Itinerary</h2>
              
              <div className="space-y-4">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-soft-cream transition-colors">
                    <div className="w-16 text-sm font-medium text-mango-orange">{item.time}</div>
                    <div className="flex-1 text-deep-navy">{item.activity}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-2 text-warning-orange mb-2">
                  <SafeIcon icon={FiClock} size={16} />
                  <span className="font-medium text-sm">Important Timing</span>
                </div>
                <p className="text-sm text-deep-navy">
                  Please arrive at Jordan Port Terminal by 6:45 AM. Our guide will be waiting with a 
                  "Gwapo Mango Tours" sign. Late arrivals may miss the tour without refund.
                </p>
              </div>
            </motion.div>

            {/* What to Bring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-soft p-6"
            >
              <h2 className="text-xl font-bold text-deep-navy mb-6">What to Bring</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatToBring.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="text-tropical-green flex-shrink-0" size={16} />
                    <span className="text-deep-navy">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-light-green rounded-lg">
                <div className="flex items-center space-x-2 text-tropical-green mb-2">
                  <SafeIcon icon={FiCheck} size={16} />
                  <span className="font-medium text-sm">Weather Prepared</span>
                </div>
                <p className="text-sm text-deep-navy">
                  Tours operate rain or shine! We provide covered areas and alternative indoor activities 
                  during inclement weather. Check weather updates 24 hours before your tour.
                </p>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="flex-1 bg-mango-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold btn-hover transition-all duration-300 flex items-center justify-center space-x-2">
                <SafeIcon icon={FiDownload} />
                <span>Download Confirmation</span>
              </button>
              
              <button className="flex-1 bg-tropical-green hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold btn-hover transition-all duration-300 flex items-center justify-center space-x-2">
                <SafeIcon icon={FiCalendar} />
                <span>Add to Calendar</span>
              </button>
              
              <button className="bg-gray-100 hover:bg-gray-200 text-deep-navy px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <SafeIcon icon={FiShare2} />
                <span>Share</span>
              </button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-soft p-6"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Need Assistance?</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-warm-gray font-medium mb-2">Tour Support</div>
                  <div className="space-y-2">
                    <a 
                      href={`tel:${booking.phone}`}
                      className="flex items-center space-x-3 p-3 bg-soft-cream hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <SafeIcon icon={FiPhone} className="text-mango-orange" />
                      <span className="text-deep-navy">+63 917 123 4567</span>
                    </a>
                    
                    <a 
                      href={`mailto:hello@gwapo-mango-tours.com`}
                      className="flex items-center space-x-3 p-3 bg-soft-cream hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <SafeIcon icon={FiMail} className="text-mango-orange" />
                      <span className="text-deep-navy">Email Support</span>
                    </a>
                    
                    <button className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                      <SafeIcon icon={FiMessageCircle} className="text-green-600" />
                      <span className="text-deep-navy">WhatsApp Chat</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-warm-gray font-medium mb-2">Emergency (Day of Tour)</div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="text-deep-navy font-semibold">+63 917 765 4321</div>
                    <div className="text-sm text-warm-gray">Available 24/7</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pickup Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-soft p-6"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Pickup Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMapPin} className="text-mango-orange mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-deep-navy">Jordan Port Terminal</div>
                    <div className="text-sm text-warm-gray">Main Passenger Terminal Building</div>
                    <div className="text-sm text-warm-gray">Jordan, Guimaras 5045</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiClock} className="text-mango-orange flex-shrink-0" />
                  <div>
                    <div className="font-medium text-deep-navy">6:45 AM</div>
                    <div className="text-sm text-warm-gray">Please arrive 15 minutes early</div>
                  </div>
                </div>

                <div className="p-3 bg-soft-cream rounded-lg">
                  <div className="text-sm font-medium text-deep-navy mb-1">Look for:</div>
                  <div className="text-sm text-warm-gray">
                    Our guide with "Gwapo Mango Tours" sign near the main entrance. 
                    They'll be wearing an orange shirt with our logo.
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-deep-navy px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                View on Google Maps
              </button>
            </motion.div>

            {/* Weather Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-soft p-6"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Weather Updates</h3>
              
              <div className="text-sm text-warm-gray mb-4">
                We monitor weather conditions closely and will notify you of any changes 24 hours before your tour.
              </div>

              <Link 
                to="/updates"
                className="block w-full bg-mango-orange hover:bg-orange-600 text-white text-center px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Check Current Conditions
              </Link>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-soft p-6"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Link 
                  to="/book"
                  className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-deep-navy px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Book Another Tour
                </Link>
                
                <Link 
                  to="/reviews"
                  className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-deep-navy px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Read Reviews
                </Link>
                
                <Link 
                  to="/"
                  className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-deep-navy px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Return Home
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;