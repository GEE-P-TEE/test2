import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiAward, FiShield, FiLeaf, FiTarget, FiArrowRight } = FiIcons;

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Carlos Mendoza',
      role: 'Founder & Head Guide',
      experience: '15 years in agricultural tourism',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Born and raised in Guimaras, Carlos has dedicated his life to sharing the beauty of local mango farming with the world.',
      specialties: ['Mango cultivation history', 'Local folklore', 'Sustainable farming']
    },
    {
      name: 'Maria Elena Santos',
      role: 'Cultural Heritage Guide',
      experience: '12 years in tourism',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'A former agricultural extension worker, Maria brings deep knowledge of traditional farming methods and local culture.',
      specialties: ['Traditional methods', 'Local cuisine', 'Cultural stories']
    },
    {
      name: 'Roberto Cruz',
      role: 'Farm Operations Specialist',
      experience: '20 years in mango farming',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'A third-generation mango farmer who manages relationships with our partner farms and ensures authentic experiences.',
      specialties: ['Farm management', 'Processing techniques', 'Quality assessment']
    }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Authentic Experiences',
      description: 'We showcase real farming practices and genuine local culture, not staged performances for tourists.'
    },
    {
      icon: FiUsers,
      title: 'Small Group Focus',
      description: 'Maximum 12 guests per tour ensures personalized attention and meaningful connections.'
    },
    {
      icon: FiLeaf,
      title: 'Sustainable Tourism',
      description: 'We support local farmers directly and promote environmentally responsible practices.'
    },
    {
      icon: FiShield,
      title: 'Safety First',
      description: 'Comprehensive insurance, trained guides, and emergency protocols protect our guests.'
    }
  ];

  const partnerships = [
    {
      name: 'Trappist Monastery',
      type: 'Heritage Partner',
      description: 'Exclusive access to century-old mango groves and traditional farming wisdom.'
    },
    {
      name: 'Guimaras Mango Growers Association',
      type: 'Industry Partner',
      description: 'Official partnership ensuring authentic farm experiences and fair farmer compensation.'
    },
    {
      name: 'Department of Tourism - Western Visayas',
      type: 'Government Partner',
      description: 'Certified tour operator promoting responsible and sustainable tourism practices.'
    },
    {
      name: 'Local Farmers Cooperative',
      type: 'Community Partner',
      description: 'Direct relationships with farming families who benefit from tourism revenue.'
    }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Best Agricultural Tourism Experience',
      organization: 'Philippine Tourism Awards'
    },
    {
      year: '2023',
      title: 'Sustainable Tourism Excellence',
      organization: 'Western Visayas Tourism Board'
    },
    {
      year: '2022',
      title: 'Community Impact Recognition',
      organization: 'Guimaras Provincial Government'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url('https://images.unsplash.com/photo-1574484284002-952d92456975?w=1920&h=800&fit=crop')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Story & Mission
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Passionate about sharing Guimaras' agricultural heritage through authentic, 
              sustainable tourism experiences that benefit local communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
                From Farm to Tour
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Gwapo Mango Tours began in 2018 when Carlos Mendoza, a third-generation Guimaras resident, 
                  noticed that most visitors only experienced mangoes through roadside stands and souvenir shops. 
                  They were missing the real story – the centuries of agricultural expertise, the sacred monastery 
                  grounds where monks perfected cultivation, and the passionate farming families who dedicate 
                  their lives to growing the world's sweetest fruit.
                </p>
                <p>
                  What started as informal farm visits for friends and family has grown into the Philippines' 
                  premier mango tourism experience. We've welcomed over 5,000 guests from 40 countries, 
                  each leaving with a deeper appreciation for agricultural heritage and sustainable farming practices.
                </p>
                <p>
                  Today, we're proud to be Guimaras' only certified small-group mango tour operator, 
                  working directly with farming families to ensure that tourism benefits the entire community. 
                  Every tour directly supports local farmers, preserves traditional knowledge, and promotes 
                  sustainable agricultural practices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=600&fit=crop"
                alt="Mango farming heritage"
                className="w-full rounded-2xl shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">5,000+ Happy Guests</h3>
                  <p className="text-gray-200 text-sm">
                    From 40 countries, experiencing authentic Guimaras mango culture since 2018
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light-green">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Everything we do is guided by our commitment to authenticity, sustainability, 
              and meaningful cultural exchange.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-mango-orange to-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">{value.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Meet Our Expert Guides
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Our passionate team combines deep agricultural knowledge with exceptional hospitality 
              to create unforgettable experiences for every guest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-soft-cream rounded-2xl overflow-hidden card-hover"
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <div className="text-sm">{member.experience}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-deep-navy mb-1">{member.name}</h3>
                  <div className="text-mango-orange font-medium mb-3">{member.role}</div>
                  <p className="text-warm-gray text-sm mb-4 leading-relaxed">{member.description}</p>
                  
                  <div>
                    <div className="text-sm font-medium text-deep-navy mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white rounded-full text-xs text-deep-navy"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Our Partners & Community
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              We work closely with local institutions, government agencies, and farming communities 
              to ensure authentic experiences and sustainable tourism development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-tropical-green to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiUsers} size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-deep-navy">{partner.name}</h3>
                      <span className="px-2 py-1 bg-mango-orange/10 text-mango-orange text-xs rounded-full font-medium">
                        {partner.type}
                      </span>
                    </div>
                    <p className="text-warm-gray text-sm leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
                Awards & Recognition
              </h2>
              <p className="text-warm-gray text-lg mb-8">
                Our commitment to excellence and sustainable tourism has been recognized 
                by industry leaders and government agencies throughout the Philippines.
              </p>

              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-soft-cream rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-golden-yellow to-mango-orange rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiAward} size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-navy">{award.title}</div>
                      <div className="text-sm text-warm-gray">{award.organization} • {award.year}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop"
                alt="Award ceremony"
                className="w-full rounded-2xl shadow-soft"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-mango-orange">2023</div>
                <div className="text-sm text-deep-navy font-medium">Latest Recognition</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety & Protocols */}
      <section className="py-20 bg-light-green">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Safety & Quality Protocols
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Your safety and satisfaction are our top priorities. We maintain the highest 
              standards in all aspects of our operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 card-hover"
            >
              <SafeIcon icon={FiShield} size={32} className="text-mango-orange mb-4" />
              <h3 className="text-lg font-semibold text-deep-navy mb-3">Comprehensive Insurance</h3>
              <p className="text-warm-gray text-sm">Full coverage for all guests including medical emergencies, accidents, and trip interruptions.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 card-hover"
            >
              <SafeIcon icon={FiUsers} size={32} className="text-mango-orange mb-4" />
              <h3 className="text-lg font-semibold text-deep-navy mb-3">Certified Guides</h3>
              <p className="text-warm-gray text-sm">All guides are DOT-certified with first aid training and extensive local knowledge.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 card-hover"
            >
              <SafeIcon icon={FiTarget} size={32} className="text-mango-orange mb-4" />
              <h3 className="text-lg font-semibold text-deep-navy mb-3">Quality Assurance</h3>
              <p className="text-warm-gray text-sm">Regular farm inspections, food safety protocols, and guest feedback monitoring.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mango-orange to-golden-yellow">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Our Story Firsthand
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join us for an authentic journey through Guimaras' mango heritage. 
              Meet our passionate guides and discover why we're the Philippines' premier agricultural tour.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-white text-mango-orange hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg btn-hover transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Book Your Adventure</span>
                <SafeIcon icon={FiArrowRight} />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-mango-orange text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;