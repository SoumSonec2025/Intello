import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

import SophieProfil from '../assets/logo.png';
import PierreProfil from '../assets/logo.png';
import MarieProfil from '../assets/logo.png';

const testimonials = [
  {
    id: 1,
    name: 'Jules Kouamé',
    role: 'Étudiant',
    image: SophieProfil,
    content: 'Intello m’a sauvé mes révisions avec ses cours offline !',
    rating: 5
  },
  {
    id: 2,
    name: 'Boris Konan',
    role: 'Professeur',
    image: PierreProfil,
    content: 'Un outil incroyable pour préparer les élèves au BAC.',
    rating: 5
  },
  {
    id: 3,
    name: 'Marie Bamba',
    role: 'Lycéenne',
    image: MarieProfil,
    content: 'Les quiz interactifs sont super pratiques et motivants.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            Témoignages Étudiants
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Découvrez ce que nos utilisateurs disent d’Intello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 border border-orange-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-700">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;