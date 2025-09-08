import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TourExperiencePage from './pages/TourExperiencePage';
import BookingPage from './pages/BookingPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import WeatherUpdatesPage from './pages/WeatherUpdatesPage';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-inter">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tour-experience" element={<TourExperiencePage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/booking/:id" element={<BookingConfirmationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/updates" element={<WeatherUpdatesPage />} />
          </Routes>
        </motion.main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;