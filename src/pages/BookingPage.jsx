import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUsers, FiCreditCard, FiCheck, FiArrowRight, FiInfo, FiPhone, FiMail, FiMapPin, FiClock } = FiIcons;

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [guestCount, setGuestCount] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState('gcash');
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  
  const totalSteps = 4;
  const pricePerPerson = 3500;
  const totalPrice = guestCount * pricePerPerson;

  // Disable Sundays and past dates
  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      // Disable Sundays (day 0) and past dates
      return date.getDay() === 0 || date < new Date().setHours(0, 0, 0, 0);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (date.getDay() === 0) {
        return 'disabled-sunday';
      }
      if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
        return 'selected-date';
      }
    }
  };

  const onSubmit = (data) => {
    console.log('Booking data:', { ...data, selectedDate, guestCount, paymentMethod, totalPrice });
    // Handle booking submission
    alert('Booking submitted successfully! You will be redirected to payment.');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { number: 1, title: 'Select Date', icon: FiCalendar },
    { number: 2, title: 'Guest Details', icon: FiUsers },
    { number: 3, title: 'Payment', icon: FiCreditCard },
    { number: 4, title: 'Confirmation', icon: FiCheck }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-deep-navy mb-2">
            Book Your Mango Adventure
          </h1>
          <p className="text-warm-gray">Secure your spot in our exclusive small-group experience</p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-tropical-green text-white'
                      : currentStep === step.number
                      ? 'bg-mango-orange text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.number ? (
                      <SafeIcon icon={FiCheck} size={20} />
                    ) : (
                      <SafeIcon icon={step.icon} size={20} />
                    )}
                  </div>
                  {step.number < totalSteps && (
                    <div className={`w-16 h-1 mx-2 rounded transition-all duration-300 ${
                      currentStep > step.number ? 'bg-tropical-green' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <span className="text-sm text-warm-gray">
              Step {currentStep} of {totalSteps}: {steps[currentStep - 1].title}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-soft p-6 md:p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step 1: Date Selection */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-deep-navy mb-6">Choose Your Tour Date</h2>
                    <div className="mb-6">
                      <div className="calendar-container">
                        <Calendar
                          onChange={setSelectedDate}
                          value={selectedDate}
                          tileDisabled={tileDisabled}
                          tileClassName={tileClassName}
                          minDate={new Date()}
                          className="mx-auto border-none shadow-none"
                        />
                      </div>
                      
                      <div className="mt-6 p-4 bg-soft-cream rounded-lg">
                        <div className="flex items-center space-x-2 text-mango-orange mb-2">
                          <SafeIcon icon={FiInfo} size={16} />
                          <span className="font-medium text-sm">Important Notes:</span>
                        </div>
                        <ul className="text-sm text-deep-navy space-y-1">
                          <li>• Tours run daily except Sundays</li>
                          <li>• Booking must be made at least 24 hours in advance</li>
                          <li>• Tours are weather-dependent with flexible rescheduling</li>
                          <li>• Maximum 12 guests per tour for intimate experience</li>
                        </ul>
                      </div>

                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 bg-tropical-green/10 rounded-lg border border-tropical-green/20"
                        >
                          <div className="flex items-center space-x-2 text-tropical-green">
                            <SafeIcon icon={FiCheck} size={16} />
                            <span className="font-medium">Selected Date: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Guest Details */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-deep-navy mb-6">Guest Information</h2>
                    
                    {/* Guest Count */}
                    <div className="mb-6">
                      <label className="block text-deep-navy font-medium mb-3">Number of Guests</label>
                      <div className="flex items-center space-x-4">
                        <button
                          type="button"
                          onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                          className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="text-xl font-semibold text-deep-navy min-w-[3rem] text-center">
                          {guestCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setGuestCount(Math.min(12, guestCount + 1))}
                          className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                        <span className="text-sm text-warm-gray">Maximum 12 guests</span>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-deep-navy font-medium mb-2">Full Name *</label>
                        <input
                          {...register('fullName', { required: 'Full name is required' })}
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none transition-colors"
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <span className="text-error-red text-sm mt-1">{errors.fullName.message}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-deep-navy font-medium mb-2">Email Address *</label>
                        <input
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <span className="text-error-red text-sm mt-1">{errors.email.message}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-deep-navy font-medium mb-2">Phone Number *</label>
                        <input
                          {...register('phone', { required: 'Phone number is required' })}
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none transition-colors"
                          placeholder="+63 917 123 4567"
                        />
                        {errors.phone && (
                          <span className="text-error-red text-sm mt-1">{errors.phone.message}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-deep-navy font-medium mb-2">Emergency Contact</label>
                        <input
                          {...register('emergencyContact')}
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none transition-colors"
                          placeholder="Emergency contact number"
                        />
                      </div>
                    </div>

                    {/* Special Requirements */}
                    <div className="mb-6">
                      <label className="block text-deep-navy font-medium mb-2">Special Requirements</label>
                      <textarea
                        {...register('specialRequirements')}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none transition-colors resize-none"
                        placeholder="Dietary restrictions, accessibility needs, or other special requests..."
                      />
                    </div>

                    {/* Pickup Preferences */}
                    <div className="mb-6">
                      <label className="block text-deep-navy font-medium mb-3">Pickup Location</label>
                      <div className="p-4 bg-soft-cream rounded-lg">
                        <div className="flex items-center space-x-3">
                          <SafeIcon icon={FiMapPin} className="text-mango-orange" />
                          <div>
                            <div className="font-medium text-deep-navy">Jordan Port Terminal</div>
                            <div className="text-sm text-warm-gray">Main pickup point - 7:00 AM sharp</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-deep-navy mb-6">Payment Method</h2>
                    
                    <div className="space-y-4 mb-6">
                      {/* GCash */}
                      <div
                        onClick={() => setPaymentMethod('gcash')}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          paymentMethod === 'gcash'
                            ? 'border-tropical-green bg-tropical-green/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            paymentMethod === 'gcash' ? 'border-tropical-green bg-tropical-green' : 'border-gray-300'
                          }`}>
                            {paymentMethod === 'gcash' && (
                              <div className="w-full h-full rounded-full bg-white scale-50"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-deep-navy">GCash</div>
                            <div className="text-sm text-warm-gray">Pay securely with GCash e-wallet</div>
                          </div>
                          <div className="text-2xl">💙</div>
                        </div>
                      </div>

                      {/* Credit Card */}
                      <div
                        onClick={() => setPaymentMethod('card')}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          paymentMethod === 'card'
                            ? 'border-tropical-green bg-tropical-green/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            paymentMethod === 'card' ? 'border-tropical-green bg-tropical-green' : 'border-gray-300'
                          }`}>
                            {paymentMethod === 'card' && (
                              <div className="w-full h-full rounded-full bg-white scale-50"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-deep-navy">Credit/Debit Card</div>
                            <div className="text-sm text-warm-gray">Visa, Mastercard accepted</div>
                          </div>
                          <div className="flex space-x-1">
                            <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                            <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Security Notice */}
                    <div className="p-4 bg-soft-cream rounded-lg">
                      <div className="flex items-center space-x-2 text-tropical-green mb-2">
                        <SafeIcon icon={FiCheck} size={16} />
                        <span className="font-medium text-sm">Secure Payment</span>
                      </div>
                      <p className="text-sm text-deep-navy">
                        Your payment is processed securely through PayMongo. We never store your payment information.
                        You'll be redirected to complete payment after confirming your booking details.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-deep-navy mb-6">Confirm Your Booking</h2>
                    
                    <div className="space-y-6">
                      {/* Booking Summary */}
                      <div className="p-6 bg-soft-cream rounded-lg">
                        <h3 className="font-semibold text-deep-navy mb-4">Booking Summary</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-warm-gray">Tour Date:</span>
                            <span className="font-medium text-deep-navy">
                              {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-warm-gray">Number of Guests:</span>
                            <span className="font-medium text-deep-navy">{guestCount} {guestCount === 1 ? 'person' : 'people'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-warm-gray">Pickup Location:</span>
                            <span className="font-medium text-deep-navy">Jordan Port Terminal</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-warm-gray">Pickup Time:</span>
                            <span className="font-medium text-deep-navy">7:00 AM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-warm-gray">Payment Method:</span>
                            <span className="font-medium text-deep-navy capitalize">{paymentMethod === 'gcash' ? 'GCash' : 'Credit Card'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <label className="flex items-start space-x-3">
                          <input
                            {...register('agreeTerms', { required: 'You must agree to the terms and conditions' })}
                            type="checkbox"
                            className="mt-1"
                          />
                          <span className="text-sm text-deep-navy">
                            I agree to the <a href="#" className="text-mango-orange hover:underline">Terms and Conditions</a>, 
                            <a href="#" className="text-mango-orange hover:underline ml-1">Cancellation Policy</a>, and 
                            <a href="#" className="text-mango-orange hover:underline ml-1">Privacy Policy</a>
                          </span>
                        </label>
                        {errors.agreeTerms && (
                          <span className="text-error-red text-sm mt-1 block">{errors.agreeTerms.message}</span>
                        )}
                      </div>

                      {/* Cancellation Policy Reminder */}
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-center space-x-2 text-warning-orange mb-2">
                          <SafeIcon icon={FiInfo} size={16} />
                          <span className="font-medium text-sm">Cancellation Policy</span>
                        </div>
                        <p className="text-sm text-deep-navy">
                          Full refund available if cancelled 48+ hours in advance. 
                          Tours are weather-dependent with flexible rescheduling options.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      currentStep === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-deep-navy hover:bg-gray-100'
                    }`}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={currentStep === 1 && !selectedDate}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                        (currentStep === 1 && !selectedDate)
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-mango-orange hover:bg-orange-600 text-white btn-hover'
                      }`}
                    >
                      <span>Next Step</span>
                      <SafeIcon icon={FiArrowRight} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-tropical-green hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold btn-hover transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Complete Booking</span>
                      <SafeIcon icon={FiCheck} />
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-soft p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold text-deep-navy mb-6">Booking Summary</h3>
              
              {/* Tour Info */}
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=200&fit=crop"
                  alt="Mango farm tour"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-deep-navy mb-2">Gwapo Mango Farm Adventure</h4>
                <div className="space-y-2 text-sm text-warm-gray">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiClock} size={14} />
                    <span>10 hours (7 AM - 5 PM)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiUsers} size={14} />
                    <span>Small group (max 12 people)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMapPin} size={14} />
                    <span>4 unique farm locations</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-6">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-warm-gray">Price per person</span>
                    <span className="text-deep-navy">₱{pricePerPerson.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-gray">Number of guests</span>
                    <span className="text-deep-navy">{guestCount}</span>
                  </div>
                  {selectedDate && (
                    <div className="flex justify-between">
                      <span className="text-warm-gray">Tour date</span>
                      <span className="text-deep-navy text-sm">
                        {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-deep-navy">Total</span>
                    <span className="text-2xl font-bold text-mango-orange">₱{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="border-t pt-6 mt-6">
                <h4 className="font-semibold text-deep-navy mb-3">What's Included</h4>
                <ul className="space-y-2 text-sm text-warm-gray">
                  <li className="flex items-start space-x-2">
                    <SafeIcon icon={FiCheck} className="text-tropical-green mt-0.5 flex-shrink-0" size={14} />
                    <span>Air-conditioned transportation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <SafeIcon icon={FiCheck} className="text-tropical-green mt-0.5 flex-shrink-0" size={14} />
                    <span>Professional guide</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <SafeIcon icon={FiCheck} className="text-tropical-green mt-0.5 flex-shrink-0" size={14} />
                    <span>Traditional Filipino lunch</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <SafeIcon icon={FiCheck} className="text-tropical-green mt-0.5 flex-shrink-0" size={14} />
                    <span>All farm entrance fees</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <SafeIcon icon={FiCheck} className="text-tropical-green mt-0.5 flex-shrink-0" size={14} />
                    <span>Mango tastings & souvenirs</span>
                  </li>
                </ul>
              </div>

              {/* Contact Support */}
              <div className="border-t pt-6 mt-6">
                <h4 className="font-semibold text-deep-navy mb-3">Need Help?</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-warm-gray">
                    <SafeIcon icon={FiPhone} size={14} />
                    <span>+63 917 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-warm-gray">
                    <SafeIcon icon={FiMail} size={14} />
                    <span>hello@gwapo-mango-tours.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom Calendar Styles */}
      <style jsx>{`
        .calendar-container .react-calendar {
          width: 100%;
          background: white;
          border: none;
          font-family: 'Inter', sans-serif;
        }
        
        .calendar-container .react-calendar__tile {
          background: none;
          border: none;
          padding: 12px 6px;
          position: relative;
        }
        
        .calendar-container .react-calendar__tile:enabled:hover,
        .calendar-container .react-calendar__tile:enabled:focus {
          background-color: #FFF8E1;
        }
        
        .calendar-container .react-calendar__tile.selected-date {
          background-color: #FF8C42 !important;
          color: white;
          border-radius: 8px;
        }
        
        .calendar-container .react-calendar__tile.disabled-sunday {
          color: #ccc;
          background-color: #f5f5f5;
        }
        
        .calendar-container .react-calendar__navigation button {
          color: #2C3E50;
          font-weight: 500;
        }
        
        .calendar-container .react-calendar__navigation button:enabled:hover,
        .calendar-container .react-calendar__navigation button:enabled:focus {
          background-color: #FFF8E1;
        }
      `}</style>
    </div>
  );
};

export default BookingPage;