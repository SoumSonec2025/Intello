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

function App() {
  return (
    <Router>
      <div className="min-h-screen">
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;