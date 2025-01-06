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

function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
    </div>
  );
}

export default App;