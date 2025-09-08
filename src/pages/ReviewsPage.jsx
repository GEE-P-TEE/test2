import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiFilter, FiCamera, FiThumbsUp, FiMessageCircle, FiCalendar } = FiIcons;

const ReviewsPage = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Toronto, Canada',
      rating: 5,
      date: '2024-01-15',
      tourDate: '2024-01-10',
      verified: true,
      title: 'Absolutely incredible experience!',
      content: 'This tour exceeded all my expectations. Carlos was an amazing guide who really knows his stuff about mango farming. The monastery was so peaceful and the mangoes were the sweetest I\'ve ever tasted. The lunch was fantastic too - authentic Filipino food with the freshest ingredients. Worth every peso!',
      images: [
        'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop'
      ],
      likes: 24,
      helpful: 18,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Miguel Rodriguez',
      location: 'Madrid, Spain',
      rating: 5,
      date: '2024-01-12',
      tourDate: '2024-01-08',
      verified: true,
      title: 'Perfect small group experience',
      content: 'We were a group of 8 friends and had the most amazing day. The beachfront farm was stunning - never imagined mangoes could grow so close to the ocean! Maria Elena was so knowledgeable about the local culture and history. The processing center visit was fascinating, and we learned so much about how mangoes are turned into different products.',
      images: [
        'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300&h=200&fit=crop'
      ],
      likes: 19,
      helpful: 15,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      location: 'Singapore',
      rating: 5,
      date: '2024-01-10',
      tourDate: '2024-01-05',
      verified: true,
      title: 'Authentic and educational',
      content: 'As someone who works in agriculture, I was impressed by the depth of knowledge shared by the guides. The traditional farming methods at the monastery were fascinating, and I loved how they\'ve preserved these techniques for generations. The tasting session at the heritage grove was incredible - so many varieties I\'d never tried before!',
      images: [
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop'
      ],
      likes: 31,
      helpful: 22,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'James Wilson',
      location: 'Melbourne, Australia',
      rating: 4,
      date: '2024-01-08',
      tourDate: '2024-01-03',
      verified: true,
      title: 'Great tour, minor timing issues',
      content: 'Really enjoyed the tour overall. The farms were beautiful and the guide Roberto was very passionate about mango farming. We ran a bit behind schedule at the second stop which made the lunch feel rushed, but the food was delicious. The heritage grove at the end was definitely the highlight - those award-winning mangoes are something else!',
      images: [],
      likes: 12,
      helpful: 8,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Maria Santos',
      location: 'Manila, Philippines',
      rating: 5,
      date: '2024-01-06',
      tourDate: '2024-01-01',
      verified: true,
      title: 'Perfect New Year\'s Day activity!',
      content: 'What a wonderful way to start the year! Even though I\'m Filipino, I learned so much about our own agricultural heritage. The monastery grounds were so serene, and the monks\' dedication to preserving traditional methods was inspiring. My kids (ages 8 and 12) loved the hands-on picking experience at Raymen Beach. Highly recommend for families!',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
      ],
      likes: 27,
      helpful: 20,
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'David Kim',
      location: 'Seoul, South Korea',
      rating: 5,
      date: '2024-01-04',
      tourDate: '2023-12-30',
      verified: true,
      title: 'Incredible value for money',
      content: 'For ₱3,500, this tour offers incredible value. Transportation was comfortable, the guide spoke excellent English, and every stop was well-organized. The lunch alone was worth the price - authentic Filipino dishes with the freshest mangoes incorporated into every course. The souvenir pack was generous too. Will definitely recommend to friends visiting the Philippines.',
      images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300&h=200&fit=crop'
      ],
      likes: 33,
      helpful: 25,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Reviews', count: reviews.length },
    { value: '5', label: '5 Stars', count: reviews.filter(r => r.rating === 5).length },
    { value: '4', label: '4 Stars', count: reviews.filter(r => r.rating === 4).length },
    { value: 'verified', label: 'Verified Only', count: reviews.filter(r => r.verified).length },
    { value: 'photos', label: 'With Photos', count: reviews.filter(r => r.images.length > 0).length }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'rating', label: 'Highest Rating' },
    { value: 'helpful', label: 'Most Helpful' }
  ];

  const filteredReviews = reviews.filter(review => {
    switch (filter) {
      case '5': return review.rating === 5;
      case '4': return review.rating === 4;
      case 'verified': return review.verified;
      case 'photos': return review.images.length > 0;
      default: return true;
    }
  });

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1574484284002-952d92456975?w=1920&h=600&fit=crop')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Guest Reviews
            </h1>
            <p className="text-xl text-gray-200">
              See what travelers from around the world say about their mango farm adventures
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Rating Summary & Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Rating Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Overall Rating</h3>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-mango-orange mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon 
                      key={i} 
                      icon={FiStar} 
                      className={`${i < Math.floor(averageRating) ? 'text-golden-yellow fill-current' : 'text-gray-300'}`}
                      size={20} 
                    />
                  ))}
                </div>
                <div className="text-sm text-warm-gray">Based on {reviews.length} reviews</div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {ratingDistribution.map((dist) => (
                  <div key={dist.rating} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm text-deep-navy">{dist.rating}</span>
                      <SafeIcon icon={FiStar} size={12} className="text-golden-yellow fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-golden-yellow h-2 rounded-full"
                        style={{ width: `${dist.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-warm-gray w-8">{dist.count}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4 flex items-center space-x-2">
                <SafeIcon icon={FiFilter} />
                <span>Filter Reviews</span>
              </h3>
              
              <div className="space-y-3">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFilter(option.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      filter === option.value
                        ? 'bg-mango-orange text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-deep-navy'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{option.label}</span>
                      <span className="text-xs">{option.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Sort Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Sort By</h3>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 flex justify-between items-center"
            >
              <h2 className="text-2xl font-bold text-deep-navy">
                {filteredReviews.length} Review{filteredReviews.length !== 1 ? 's' : ''}
              </h2>
            </motion.div>

            <div className="space-y-6">
              {filteredReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-soft card-hover"
                >
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-deep-navy">{review.name}</h4>
                          {review.verified && (
                            <span className="px-2 py-1 bg-tropical-green/10 text-tropical-green text-xs rounded-full font-medium">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-warm-gray">{review.location}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <SafeIcon 
                                key={i} 
                                icon={FiStar} 
                                className={`${i < review.rating ? 'text-golden-yellow fill-current' : 'text-gray-300'}`}
                                size={14} 
                              />
                            ))}
                          </div>
                          <span className="text-xs text-warm-gray">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-deep-navy mb-2">{review.title}</h5>
                    <p className="text-warm-gray leading-relaxed text-sm">{review.content}</p>
                  </div>

                  {/* Review Images */}
                  {review.images.length > 0 && (
                    <div className="mb-4">
                      <div className="flex space-x-2 overflow-x-auto">
                        {review.images.map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`Review photo ${idx + 1}`}
                            className="w-24 h-24 object-cover rounded-lg flex-shrink-0 cursor-pointer hover:opacity-75 transition-opacity"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tour Date */}
                  <div className="mb-4 p-3 bg-soft-cream rounded-lg">
                    <div className="flex items-center space-x-2 text-sm text-deep-navy">
                      <SafeIcon icon={FiCalendar} size={14} />
                      <span>Toured on: {new Date(review.tourDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-warm-gray hover:text-mango-orange transition-colors">
                        <SafeIcon icon={FiThumbsUp} size={14} />
                        <span className="text-sm">Helpful ({review.helpful})</span>
                      </button>
                      <button className="flex items-center space-x-2 text-warm-gray hover:text-mango-orange transition-colors">
                        <SafeIcon icon={FiMessageCircle} size={14} />
                        <span className="text-sm">Reply</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2 text-warm-gray">
                      <SafeIcon icon={FiThumbsUp} size={14} />
                      <span className="text-sm">{review.likes} likes</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-8"
            >
              <button className="bg-mango-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold btn-hover transition-all duration-300">
                Load More Reviews
              </button>
            </motion.div>
          </div>
        </div>

        {/* Write Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-mango-orange to-golden-yellow rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Share Your Experience
          </h2>
          <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
            Took our mango farm tour? We'd love to hear about your experience! 
            Your feedback helps us improve and helps other travelers plan their adventures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-mango-orange hover:bg-gray-100 px-8 py-3 rounded-full font-semibold btn-hover transition-all duration-300 flex items-center justify-center space-x-2">
              <SafeIcon icon={FiStar} />
              <span>Write a Review</span>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-mango-orange text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
              <SafeIcon icon={FiCamera} />
              <span>Upload Photos</span>
            </button>
          </div>

          <div className="mt-6 text-sm text-white/80">
            <p>Reviews are verified through our booking system</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsPage;