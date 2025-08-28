import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiUsers, FiAward, FiMapPin } = FiIcons;

function About() {
  const team = [
    {
      name: 'Juan dela Cruz',
      role: 'Founder & Head Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Born and raised in Guimaras, Juan has been sharing his love for mangoes for over 15 years.'
    },
    {
      name: 'Maria Reyes',
      role: 'Tour Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Maria ensures every detail of your tour is perfect, from pickup to drop-off.'
    },
    {
      name: 'Pedro Santos',
      role: 'Farm Relations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Pedro works closely with local farmers to provide exclusive access to the best farms.'
    }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Passion for Guimaras',
      description: 'We genuinely love our island and want every visitor to experience its magic'
    },
    {
      icon: FiUsers,
      title: 'Supporting Local Communities',
      description: 'Every tour directly supports local farmers and their families'
    },
    {
      icon: FiAward,
      title: 'Quality & Authenticity',
      description: 'We never compromise on the quality of experience we provide'
    },
    {
      icon: FiMapPin,
      title: 'Sustainable Tourism',
      description: 'We practice responsible tourism that protects our environment'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF8C00] to-[#FF7F00] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-orange-100">
              Born from a deep love for Guimaras and its world-renowned mangoes, 
              Gwapo Mango Tours started as a dream to share our island paradise with the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Sweet Beginning
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Three years ago, Juan dela Cruz, a third-generation mango farmer, 
                  noticed that tourists visiting Guimaras often missed the true essence 
                  of our mango heritage. They would buy mangoes at the port and leave, 
                  never experiencing the farms, the farmers, or the stories behind each fruit.
                </p>
                <p>
                  That's when the idea for Gwapo Mango Tours was born. Juan partnered 
                  with local farmers to create authentic experiences that would showcase 
                  not just the mangoes, but the culture, tradition, and passion behind 
                  Guimaras' agricultural heritage.
                </p>
                <p>
                  Today, we've welcomed over 2,500 guests from around the world, 
                  each leaving with a deeper appreciation for our island and its people. 
                  We're not just a tour company - we're ambassadors of Guimaras culture.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mango Farm"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FF8C00] text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm">Happy Guests</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by these core principles that define who we are
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C00] to-[#FF7F00] rounded-full flex items-center justify-center mb-6">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate locals who make every tour a memorable experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#FF8C00] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {member.role}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {member.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;