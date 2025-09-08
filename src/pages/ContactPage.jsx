import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle, FiSend, FiInfo } = FiIcons;

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form data:', data);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    reset();
  };

  const contactMethods = [
    {
      icon: FiPhone,
      title: 'Call Us',
      subtitle: 'Speak directly with our team',
      contact: '+63 917 123 4567',
      action: 'tel:+639171234567',
      available: 'Daily 7:00 AM - 8:00 PM',
      color: 'bg-mango-orange'
    },
    {
      icon: FiMessageCircle,
      title: 'WhatsApp',
      subtitle: 'Quick chat for instant answers',
      contact: '+63 917 123 4567',
      action: 'https://wa.me/639171234567',
      available: 'Usually replies within minutes',
      color: 'bg-green-500'
    },
    {
      icon: FiMail,
      title: 'Email',
      subtitle: 'Detailed inquiries welcome',
      contact: 'hello@gwapo-mango-tours.com',
      action: 'mailto:hello@gwapo-mango-tours.com',
      available: 'Response within 24 hours',
      color: 'bg-tropical-green'
    }
  ];

  const officeInfo = {
    address: 'Jordan Port Terminal Building',
    city: 'Jordan, Guimaras 5045',
    country: 'Philippines',
    hours: [
      { day: 'Monday - Saturday', time: '7:00 AM - 6:00 PM' },
      { day: 'Sunday', time: 'Closed (No tours)' }
    ],
    emergency: '+63 917 765 4321'
  };

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 24 hours in advance, especially during peak season (December-April). For groups of 8+ people, please book 3-7 days ahead.'
    },
    {
      question: 'What happens if it rains?',
      answer: 'Tours operate rain or shine! We have covered areas at all stops and provide alternative indoor activities. If severe weather makes travel unsafe, we offer free rescheduling.'
    },
    {
      question: 'Can you accommodate dietary restrictions?',
      answer: 'Absolutely! Please mention any dietary needs when booking. We can arrange vegetarian, vegan, halal, or allergen-free meals with advance notice.'
    },
    {
      question: 'Is transportation included from Iloilo?',
      answer: 'Our tours start and end at Jordan Port in Guimaras. We can help arrange ferry transportation from Iloilo City for an additional fee.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1920&h=600&fit=crop')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              We're here to help plan your perfect mango farm adventure. 
              Reach out with any questions or special requests.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-deep-navy mb-6">Contact Methods</h2>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : '_self'}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="block bg-white rounded-2xl p-6 shadow-soft card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <SafeIcon icon={method.icon} size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-deep-navy mb-1">{method.title}</h3>
                        <p className="text-sm text-warm-gray mb-2">{method.subtitle}</p>
                        <div className="font-medium text-deep-navy text-sm mb-1">{method.contact}</div>
                        <div className="text-xs text-warm-gray">{method.available}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-deep-navy mb-4">Office Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMapPin} className="text-mango-orange mt-1 flex-shrink-0" size={16} />
                  <div>
                    <div className="font-medium text-deep-navy">{officeInfo.address}</div>
                    <div className="text-sm text-warm-gray">{officeInfo.city}</div>
                    <div className="text-sm text-warm-gray">{officeInfo.country}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiClock} className="text-mango-orange mt-1 flex-shrink-0" size={16} />
                  <div>
                    {officeInfo.hours.map((hour, index) => (
                      <div key={index} className="text-sm">
                        <span className="font-medium text-deep-navy">{hour.day}:</span>
                        <span className="text-warm-gray ml-2">{hour.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-red-600 mb-1">
                    <SafeIcon icon={FiPhone} size={16} />
                    <span className="font-medium text-sm">24/7 Emergency</span>
                  </div>
                  <div className="text-sm text-deep-navy font-medium">{officeInfo.emergency}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <h2 className="text-2xl font-bold text-deep-navy mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label className="block text-deep-navy font-medium mb-2">Phone Number</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none transition-colors"
                      placeholder="+63 917 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-deep-navy font-medium mb-2">Inquiry Type</label>
                    <select
                      {...register('inquiryType', { required: 'Please select an inquiry type' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none transition-colors"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="booking">New Booking</option>
                      <option value="existing">Existing Booking</option>
                      <option value="group">Group Booking (8+ people)</option>
                      <option value="custom">Custom Tour Request</option>
                      <option value="general">General Information</option>
                      <option value="feedback">Feedback/Review</option>
                    </select>
                    {errors.inquiryType && (
                      <span className="text-error-red text-sm mt-1">{errors.inquiryType.message}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-deep-navy font-medium mb-2">Preferred Tour Date (Optional)</label>
                  <input
                    {...register('preferredDate')}
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-deep-navy font-medium mb-2">Message *</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-tropical-green focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your inquiry, special requirements, or any questions you have..."
                  />
                  {errors.message && (
                    <span className="text-error-red text-sm mt-1">{errors.message.message}</span>
                  )}
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    {...register('newsletter')}
                    type="checkbox"
                    className="mt-1"
                  />
                  <span className="text-sm text-deep-navy">
                    Subscribe to our newsletter for mango season updates and special offers
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-mango-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold btn-hover transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-soft-cream rounded-lg">
                <div className="flex items-center space-x-2 text-tropical-green mb-2">
                  <SafeIcon icon={FiInfo} size={16} />
                  <span className="font-medium text-sm">Response Time</span>
                </div>
                <p className="text-sm text-deep-navy">
                  We typically respond to inquiries within 4-6 hours during business hours. 
                  For urgent booking needs, please call or WhatsApp us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-deep-navy text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-soft"
              >
                <h3 className="font-semibold text-deep-navy mb-3">{faq.question}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-warm-gray mb-4">
              Don't see your question answered here?
            </p>
            <a 
              href="https://wa.me/639171234567?text=Hi! I have a question about the mango tours."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-mango-orange hover:text-orange-600 font-medium transition-colors"
            >
              <SafeIcon icon={FiMessageCircle} />
              <span>Ask us on WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-deep-navy text-center mb-8">
            Find Us at Jordan Port
          </h2>
          
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <SafeIcon icon={FiMapPin} size={48} className="mx-auto mb-4" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">Jordan Port Terminal, Guimaras</p>
                <button className="mt-4 bg-mango-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                  View on Google Maps
                </button>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-deep-navy mb-2">From Iloilo City</h4>
                <p className="text-sm text-warm-gray">
                  Take the ferry from Ortiz Wharf to Jordan Port (20 minutes)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-deep-navy mb-2">Parking Available</h4>
                <p className="text-sm text-warm-gray">
                  Free parking at Jordan Port Terminal for tour participants
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-deep-navy mb-2">Easy to Find</h4>
                <p className="text-sm text-warm-gray">
                  Look for our orange "Gwapo Mango Tours" sign at the main entrance
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;