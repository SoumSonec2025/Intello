import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, CheckSquare, Brain, Bell, Award, User } from 'lucide-react';

const services = [
  {
    icon: Book,
    title: 'Cours et Résumés',
    description: 'Accédez à des cours complets et résumés offline',
  },
  {
    icon: CheckSquare,
    title: 'Sujets Corrigés',
    description: 'Sujets du BAC (2010-2024) avec corrections détaillées',
  },
  {
    icon: Brain,
    title: 'Quiz Interactifs',
    description: 'Testez vos connaissances avec des quiz personnalisés',
  },
  {
    icon: Bell,
    title: 'Notifications Motivantes',
    description: 'Restez motivé avec des rappels et encouragements',
  },
  {
    icon: Award,
    title: 'Espace Orientation',
    description: 'Guides pour les universités et concours prestigieux',
  },
  {
    icon: User,
    title: 'Assistant Intelligent',
    description: 'Obtenez des conseils personnalisés avec "Prof Intello"',
  },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            Fonctionnalités Intello
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Découvrez les outils qui boostent votre préparation au BAC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 border border-orange-500 hover:border-green-500"
            >
              <service.icon className="w-12 h-12 text-green-500 mb-6 mx-auto group-hover:text-orange-500 transition-colors duration-200" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;