import React from 'react';
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
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      <Hero id="accueil" />
      <Destinations id="fonctionnalite" />
      <Services id="services" />
      <Gallery id="gallery" />
      <Testimonials id="testimonials" />
      <Booking id="a-propos" />
      <Contact id="contact" />
      <Privacy id="confidentialite" />
      <Footer id="footer" />
    </div>
  );
}

export default App;