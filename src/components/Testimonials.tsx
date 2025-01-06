import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

import SophieProfil from '../assets/sophie.jpg';
import PierreProfil from '../assets/pierre.jpg';
import MarieProfil from '../assets/marie.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'CEO',
    image: SophieProfil,
    content: 'Un service exceptionnel ! Notre séjour aux Maldives était parfait dans les moindres détails.',
    rating: 5
  },
  {
    id: 2,
    name: 'Pierre Dubois',
    role: 'Architecte',
    image: PierreProfil,
    content: 'La meilleure agence de voyage de luxe. Leur attention aux détails est remarquable.',
    rating: 5
  },
  {
    id: 3,
    name: 'Marie Lambert',
    role: 'Designer',
    image: MarieProfil,
    content: 'Des expériences uniques et mémorables. Je recommande vivement leurs services.',
    rating: 5
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec nous
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;