import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Gallery1 from '../assets/livre.jpg'; // Placeholder
import Gallery2 from '../assets/sujet.jpg'; // Placeholder
import Gallery3 from '../assets/quiz.jpg'; // Placeholder
import Gallery4 from '../assets/prointello.jpg'; // Placeholder
import Gallery5 from '../assets/orientation.jpg'; // Placeholder
import Gallery6 from '../assets/notification.jpg'; // Placeholder

const images = [
  { url: Gallery1, title: 'Cours Offline' },
  { url: Gallery2, title: 'Sujets Corrigés' },
  { url: Gallery3, title: 'Quiz Interactifs' },
  { url: Gallery4, title: 'Assistant Intelligent' },
  { url: Gallery5, title: 'Progrès Suivi' },
  { url: Gallery6, title: 'Notifications' },
];

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            Notre Galerie
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Découvrez Intello en images
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-[40px] shadow-lg border border-orange-500 hover:border-green-500 transition-all duration-300"
              style={{ height: '550px', width: '250px', margin: '0 auto' }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/80 to-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;