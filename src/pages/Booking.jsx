import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUsers, FiUser, FiMail, FiPhone, FiMapPin, FiCreditCard, FiCheck } = FiIcons;

function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const totalPrice = 3500 * guests;

  // Generate calendar days
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = () => {
    // In a real app, this would process the payment and create the booking
    alert('Booking functionality would be implemented with Supabase backend and payment gateway integration!');
  };

  const steps = [
    { number: 1, title: 'Select Date', icon: FiCalendar },
    { number: 2, title: 'Guest Details', icon: FiUsers },
    { number: 3, title: 'Payment', icon: FiCreditCard },
    { number: 4, title: 'Confirmation', icon: FiCheck }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Mango Adventure
          </h1>
          <p className="text-xl text-gray-600">
            Just a few steps to secure your spot on our amazing mango farm tour!
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  currentStep >= step.number 
                    ? 'bg-[#FF8C00] text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  <SafeIcon icon={step.icon} className="w-6 h-6" />
                </div>
                <span className={`ml-3 font-medium ${
                  currentStep >= step.number ? 'text-[#FF8C00]' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step.number ? 'bg-[#FF8C00]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Step 1: Date Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Tour Date</h2>
              
              {/* Calendar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => setCurrentMonth(addDays(currentMonth, -30))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    ←
                  </button>
                  <h3 className="text-xl font-semibold">
                    {format(currentMonth, 'MMMM yyyy')}
                  </h3>
                  <button
                    onClick={() => setCurrentMonth(addDays(currentMonth, 30))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    →
                  </button>
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-3 text-center font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                  
                  {days.map((day, index) => {
                    const isPast = day < new Date();
                    const isSelected = selectedDate && isSameDay(selectedDate, day);
                    
                    return (
                      <button
                        key={index}
                        onClick={() => !isPast && setSelectedDate(day)}
                        disabled={isPast}
                        className={`p-3 text-center rounded-lg transition-all ${
                          isPast 
                            ? 'text-gray-300 cursor-not-allowed'
                            : isSelected
                              ? 'bg-[#FF8C00] text-white'
                              : 'hover:bg-orange-50 text-gray-700'
                        }`}
                      >
                        {format(day, 'd')}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guests Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Number of Guests</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold min-w-[3rem] text-center">{guests}</span>
                  <button
                    onClick={() => setGuests(Math.min(12, guests + 1))}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                  >
                    +
                  </button>
                  <span className="text-gray-600 ml-4">Max 12 guests per tour</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-[#FF8C00]">
                    ₱{totalPrice.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {guests} guest{guests > 1 ? 's' : ''} × ₱3,500
                  </div>
                </div>
                <button
                  onClick={() => selectedDate && setCurrentStep(2)}
                  disabled={!selectedDate}
                  className={`px-8 py-3 rounded-xl font-semibold ${
                    selectedDate
                      ? 'bg-[#FF8C00] text-white hover:bg-[#FF7F00]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue to Details
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Guest Details */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  placeholder="Any dietary restrictions, accessibility needs, or special occasions?"
                />
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
                >
                  Back to Date
                </button>
                <button
                  onClick={() => formData.firstName && formData.lastName && formData.email && formData.phone && setCurrentStep(3)}
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  className={`px-8 py-3 rounded-xl font-semibold ${
                    formData.firstName && formData.lastName && formData.email && formData.phone
                      ? 'bg-[#FF8C00] text-white hover:bg-[#FF7F00]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue to Payment
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
              
              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tour Date:</span>
                    <span className="font-medium">{selectedDate && format(selectedDate, 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of Guests:</span>
                    <span className="font-medium">{guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact Person:</span>
                    <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-[#FF8C00]">₱{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Payment Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="p-4 border-2 border-[#FF8C00] rounded-xl text-center hover:bg-orange-50">
                    <div className="text-2xl mb-2">💳</div>
                    <div className="font-medium">Credit Card</div>
                    <div className="text-sm text-gray-600">Visa, Mastercard</div>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-xl text-center hover:bg-gray-50">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-medium">GCash</div>
                    <div className="text-sm text-gray-600">Mobile Payment</div>
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-xl text-center hover:bg-gray-50">
                    <div className="text-2xl mb-2">💰</div>
                    <div className="font-medium">PayMaya</div>
                    <div className="text-sm text-gray-600">Digital Wallet</div>
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
                >
                  Back to Details
                </button>
                <button
                  onClick={handleBooking}
                  className="bg-[#FF8C00] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#FF7F00] transform hover:scale-105"
                >
                  Complete Booking
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking;