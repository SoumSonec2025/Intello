import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react';
import Dashboard from './components/Dashboard';

function App() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=ci.intello.spbac_uemoa';

  return (
    <Router>
      <div className="min-h-screen relative">
        <Toaster position="top-right" />
        <Navbar />
        <Routes>
          {/* Main Page Route */}
          <Route
            path="/"
            element={
              <>
                <Hero id="accueil" />
                <Destinations id="fonctionnalite" />
                <Services id="services" />
                <Gallery id="gallery" />
                <Testimonials id="testimonials" />
                <Booking id="a-propos" />
                <Contact id="contact" />
                <Footer id="footer" />
              </>
            }
          />
          {/* Privacy Policy Route */}
          <Route path="/confidentialite" element={<Privacy />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <motion.a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-green-500 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDownToLine size={40} />
        </motion.a>
      </div>
    </Router>
  );
}

export default App;