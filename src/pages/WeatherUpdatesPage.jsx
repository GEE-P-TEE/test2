import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiCloud, FiCloudRain, FiWind, FiDroplet, FiThermometer, FiEye, FiArrowUp, FiCheck, FiAlertTriangle, FiCalendar, FiRefreshCw } = FiIcons;

const WeatherUpdatesPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Mock weather data - in real app, fetch from weather API
  const currentWeather = {
    temperature: 28,
    condition: 'Partly Cloudy',
    icon: FiSun,
    humidity: 72,
    windSpeed: 15,
    visibility: 10,
    uvIndex: 8,
    sunrise: '6:12 AM',
    sunset: '6:24 PM',
    chanceOfRain: 20
  };

  const weeklyForecast = [
    {
      day: 'Today',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      high: 30,
      low: 24,
      condition: 'Partly Cloudy',
      icon: FiSun,
      chanceOfRain: 20,
      tourStatus: 'excellent'
    },
    {
      day: 'Tomorrow',
      date: new Date(Date.now() + 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      high: 29,
      low: 23,
      condition: 'Sunny',
      icon: FiSun,
      chanceOfRain: 10,
      tourStatus: 'excellent'
    },
    {
      day: 'Wednesday',
      date: new Date(Date.now() + 172800000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      high: 31,
      low: 25,
      condition: 'Mostly Sunny',
      icon: FiSun,
      chanceOfRain: 15,
      tourStatus: 'excellent'
    },
    {
      day: 'Thursday',
      date: new Date(Date.now() + 259200000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      high: 27,
      low: 22,
      condition: 'Scattered Showers',
      icon: FiCloudRain,
      chanceOfRain: 60,
      tourStatus: 'good'
    },
    {
      day: 'Friday',
      date: new Date(Date.now() + 345600000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      high: 26,
      low: 21,
      condition: 'Light Rain',
      icon: FiCloudRain,
      chanceOfRain: 80,
      tourStatus: 'modified'
    },
    {
      day: 'Saturday',
      date: new Date(Date.now() + 432000000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      high: 29,
      low: 24,
      condition: 'Partly Cloudy',
      icon: FiCloud,
      chanceOfRain: 30,
      tourStatus: 'good'
    },
    {
      day: 'Sunday',
      date: new Date(Date.now() + 518400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      high: 30,
      low: 25,
      condition: 'Sunny',
      icon: FiSun,
      chanceOfRain: 10,
      tourStatus: 'closed'
    }
  ];

  const tourConditions = [
    {
      status: 'excellent',
      label: 'Excellent Conditions',
      color: 'text-green-600 bg-green-50',
      icon: FiCheck,
      description: 'Perfect weather for all outdoor activities'
    },
    {
      status: 'good',
      label: 'Good Conditions',
      color: 'text-blue-600 bg-blue-50',
      icon: FiCheck,
      description: 'Great for tours with possible brief showers'
    },
    {
      status: 'modified',
      label: 'Modified Tours',
      color: 'text-orange-600 bg-orange-50',
      icon: FiAlertTriangle,
      description: 'Indoor alternatives available during rain'
    },
    {
      status: 'closed',
      label: 'No Tours (Sunday)',
      color: 'text-gray-600 bg-gray-50',
      icon: FiCalendar,
      description: 'Regular weekly closure'
    }
  ];

  const seasonalInfo = {
    current: 'Dry Season',
    period: 'November - April',
    description: 'Perfect time for mango tours with minimal rainfall and comfortable temperatures.',
    nextSeason: 'Wet Season (May - October)',
    tips: [
      'Morning tours experience the coolest temperatures',
      'Afternoon can be warmer but still very comfortable',
      'Minimal rain expected during this period',
      'Mangoes are at peak sweetness'
    ]
  };

  const rainyDayAlternatives = [
    {
      activity: 'Covered Processing Areas',
      description: 'Extended time learning about mango processing under covered facilities'
    },
    {
      activity: 'Indoor Tasting Sessions',
      description: 'Comprehensive mango variety tasting in climate-controlled environments'
    },
    {
      activity: 'Cultural Presentations',
      description: 'In-depth talks about Guimaras history and agricultural heritage'
    },
    {
      activity: 'Cooking Demonstrations',
      description: 'Learn to prepare traditional mango-based Filipino dishes'
    }
  ];

  const getStatusInfo = (status) => {
    return tourConditions.find(condition => condition.status === status);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Weather & Tour Updates
            </h1>
            <p className="text-xl text-gray-200">
              Real-time conditions and tour status for your mango farm adventure
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-deep-navy">Current Conditions</h2>
                <button className="flex items-center space-x-2 text-mango-orange hover:text-orange-600 transition-colors">
                  <SafeIcon icon={FiRefreshCw} size={16} />
                  <span className="text-sm">Updated {currentTime.toLocaleTimeString()}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <SafeIcon icon={currentWeather.icon} size={80} className="text-golden-yellow mx-auto mb-4" />
                  <div className="text-4xl font-bold text-deep-navy mb-2">{currentWeather.temperature}°C</div>
                  <div className="text-lg text-warm-gray mb-4">{currentWeather.condition}</div>
                  
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${getStatusInfo('excellent').color}`}>
                    <SafeIcon icon={getStatusInfo('excellent').icon} size={16} />
                    <span className="font-medium text-sm">Excellent Tour Conditions</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-soft-cream rounded-lg">
                    <SafeIcon icon={FiDroplet} className="text-blue-500 mx-auto mb-2" />
                    <div className="text-sm text-warm-gray">Humidity</div>
                    <div className="font-semibold text-deep-navy">{currentWeather.humidity}%</div>
                  </div>
                  
                  <div className="text-center p-3 bg-soft-cream rounded-lg">
                    <SafeIcon icon={FiWind} className="text-gray-500 mx-auto mb-2" />
                    <div className="text-sm text-warm-gray">Wind</div>
                    <div className="font-semibold text-deep-navy">{currentWeather.windSpeed} km/h</div>
                  </div>
                  
                  <div className="text-center p-3 bg-soft-cream rounded-lg">
                    <SafeIcon icon={FiEye} className="text-green-500 mx-auto mb-2" />
                    <div className="text-sm text-warm-gray">Visibility</div>
                    <div className="font-semibold text-deep-navy">{currentWeather.visibility} km</div>
                  </div>
                  
                  <div className="text-center p-3 bg-soft-cream rounded-lg">
                    <SafeIcon icon={FiArrowUp} className="text-orange-500 mx-auto mb-2" />
                    <div className="text-sm text-warm-gray">UV Index</div>
                    <div className="font-semibold text-deep-navy">{currentWeather.uvIndex}/10</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-light-green rounded-lg">
                <div className="flex items-center space-x-2 text-tropical-green mb-2">
                  <SafeIcon icon={FiCheck} size={16} />
                  <span className="font-medium text-sm">Perfect for Mango Tours!</span>
                </div>
                <p className="text-sm text-deep-navy">
                  Current conditions are ideal for all outdoor activities. Comfortable temperature, 
                  low chance of rain, and excellent visibility for farm photography.
                </p>
              </div>
            </motion.div>

            {/* 7-Day Forecast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h2 className="text-2xl font-bold text-deep-navy mb-6">7-Day Forecast</h2>
              
              <div className="space-y-3">
                {weeklyForecast.map((day, index) => {
                  const statusInfo = getStatusInfo(day.tourStatus);
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedDay === index
                          ? 'border-mango-orange bg-mango-orange/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedDay(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-center min-w-[80px]">
                            <div className="font-semibold text-deep-navy">{day.day}</div>
                            <div className="text-sm text-warm-gray">{day.date}</div>
                          </div>
                          
                          <SafeIcon icon={day.icon} size={32} className="text-golden-yellow" />
                          
                          <div>
                            <div className="font-medium text-deep-navy">{day.condition}</div>
                            <div className="text-sm text-warm-gray">{day.chanceOfRain}% chance of rain</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <div className="font-semibold text-deep-navy">{day.high}°/{day.low}°</div>
                          </div>
                          
                          <div className={`px-3 py-1 rounded-full ${statusInfo.color}`}>
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={statusInfo.icon} size={12} />
                              <span className="text-xs font-medium">{statusInfo.label}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Day Details */}
              {selectedDay !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 p-4 bg-soft-cream rounded-lg"
                >
                  <h4 className="font-semibold text-deep-navy mb-2">
                    {weeklyForecast[selectedDay].day} Tour Conditions
                  </h4>
                  <p className="text-sm text-warm-gray">
                    {getStatusInfo(weeklyForecast[selectedDay].tourStatus).description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Seasonal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Season Information</h3>
              
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-mango-orange mb-1">{seasonalInfo.current}</div>
                <div className="text-sm text-warm-gray">{seasonalInfo.period}</div>
              </div>

              <p className="text-sm text-deep-navy mb-4 leading-relaxed">
                {seasonalInfo.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-deep-navy text-sm">Season Highlights:</h4>
                {seasonalInfo.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <SafeIcon icon={FiCheck} className="text-tropical-green mt-0.5 flex-shrink-0" size={12} />
                    <span className="text-xs text-warm-gray">{tip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-light-green rounded-lg">
                <div className="text-sm font-medium text-deep-navy mb-1">Next Season</div>
                <div className="text-xs text-warm-gray">{seasonalInfo.nextSeason}</div>
              </div>
            </motion.div>

            {/* Rainy Day Alternatives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Rainy Day Plan</h3>
              
              <p className="text-sm text-warm-gray mb-4">
                Don't worry about rain! We have covered alternatives to ensure you still have an amazing experience.
              </p>

              <div className="space-y-3">
                {rainyDayAlternatives.map((alternative, index) => (
                  <div key={index} className="p-3 bg-soft-cream rounded-lg">
                    <div className="font-medium text-deep-navy text-sm mb-1">
                      {alternative.activity}
                    </div>
                    <div className="text-xs text-warm-gray">
                      {alternative.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Weather Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Weather Alerts</h3>
              
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2 text-green-600 mb-2">
                  <SafeIcon icon={FiCheck} size={16} />
                  <span className="font-medium text-sm">All Clear</span>
                </div>
                <p className="text-sm text-deep-navy">
                  No weather warnings currently in effect for Guimaras. 
                  Perfect conditions for mango farm tours.
                </p>
              </div>

              <div className="mt-4 text-center">
                <button className="text-mango-orange hover:text-orange-600 text-sm font-medium transition-colors">
                  Subscribe to Weather Alerts
                </button>
              </div>
            </motion.div>

            {/* Contact for Weather Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Need Updates?</h3>
              
              <p className="text-sm text-warm-gray mb-4">
                Get real-time weather updates and tour status notifications.
              </p>

              <div className="space-y-2">
                <a 
                  href="https://wa.me/639171234567?text=Hi! Can I get a weather update for tomorrow's tour?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  WhatsApp Updates
                </a>
                
                <Link
                  to="/contact"
                  className="block w-full bg-mango-orange hover:bg-orange-600 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Call for Status
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-mango-orange to-golden-yellow rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Perfect Weather for Adventures!
          </h2>
          <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
            With excellent conditions ahead, now is the perfect time to book your mango farm tour. 
            Secure your spot for the best weather days!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-white text-mango-orange hover:bg-gray-100 px-8 py-3 rounded-full font-semibold btn-hover transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiCalendar} />
              <span>Book Your Tour</span>
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-mango-orange text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Weather Alerts</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WeatherUpdatesPage;