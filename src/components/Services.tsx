import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plane, Hotel, Compass, Coffee, Wine, Camera } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Vols Privés',
    description: 'Voyagez en toute intimité avec nos services de jets privés'
  },
  {
    icon: Hotel,
    title: 'Hébergements de Luxe',
    description: 'Les meilleurs hôtels et villas privées du monde'
  },
  {
    icon: Compass,
    title: 'Excursions Exclusives',
    description: 'Découvrez des lieux uniques avec nos guides experts'
  },
  {
    icon: Coffee,
    title: 'Conciergerie 24/7',
    description: 'Un service personnalisé à votre disposition'
  },
  {
    icon: Wine,
    title: 'Expériences Gastronomiques',
    description: 'Dégustations et restaurants étoilés'
  },
  {
    icon: Camera,
    title: 'Moments Mémorables',
    description: 'Service photo/vidéo pour immortaliser votre voyage'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services haut de gamme pour un voyage d'exception
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;