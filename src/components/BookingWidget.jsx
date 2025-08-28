import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, isSameDay } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUsers, FiClock } = FiIcons;

function BookingWidget() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [guests, setGuests] = useState(1);

  // Generate next 14 days for quick booking
  const availableDates = [...Array(14)].map((_, i) => addDays(new Date(), i + 1));

  const handleQuickBook = () => {
    if (selectedDate) {
      // In a real app, this would navigate to booking page with pre-selected date
      window.location.hash = '/booking';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#228B22] to-[#32CD32] rounded-3xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Quick Booking</h3>
            <p className="text-green-100">Select your preferred date and join the mango adventure!</p>
          </div>

          {/* Date Selection */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
              <span className="font-medium">Choose Your Date</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {availableDates.map((date, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDate(date)}
                  className={`p-3 rounded-lg text-center transition-all ${
                    selectedDate && isSameDay(selectedDate, date)
                      ? 'bg-white text-[#228B22] shadow-lg'
                      : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                  }`}
                >
                  <div className="text-xs font-medium">
                    {format(date, 'MMM')}
                  </div>
                  <div className="text-lg font-bold">
                    {format(date, 'd')}
                  </div>
                  <div className="text-xs">
                    {format(date, 'EEE')}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Guests Selection */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiUsers} className="w-5 h-5 mr-2" />
              <span className="font-medium">Number of Guests</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30"
              >
                -
              </button>
              <span className="text-2xl font-bold min-w-[3rem] text-center">{guests}</span>
              <button
                onClick={() => setGuests(Math.min(12, guests + 1))}
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30"
              >
                +
              </button>
              <span className="text-sm text-green-100 ml-4">Max 12 guests per tour</span>
            </div>
          </div>

          {/* Tour Info */}
          <div className="bg-white bg-opacity-10 rounded-xl p-4 mb-6">
            <div className="flex items-center mb-2">
              <SafeIcon icon={FiClock} className="w-5 h-5 mr-2" />
              <span className="font-medium">Tour Details</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium">Duration</div>
                <div className="text-green-100">8 hours (7 AM - 5 PM)</div>
              </div>
              <div>
                <div className="font-medium">Price</div>
                <div className="text-green-100">₱3,500 per person</div>
              </div>
              <div>
                <div className="font-medium">Total</div>
                <div className="text-xl font-bold">₱{(3500 * guests).toLocaleString()}</div>
              </div>
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={handleQuickBook}
            disabled={!selectedDate}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
              selectedDate
                ? 'bg-white text-[#228B22] hover:bg-green-50 transform hover:scale-105'
                : 'bg-white bg-opacity-20 text-white cursor-not-allowed'
            }`}
          >
            {selectedDate 
              ? `Book Tour for ${format(selectedDate, 'MMMM d, yyyy')}`
              : 'Select a Date to Continue'
            }
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default BookingWidget;