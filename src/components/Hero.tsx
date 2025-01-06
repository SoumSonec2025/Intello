import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HerroBanner from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Image d'arrière-plan */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HerroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Découvrez le Luxe à l'État Pur
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Voyagez dans les destinations les plus exclusives du monde avec un service sur mesure et des expériences uniques.
            </p>
            
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 text-lg font-semibold transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Réserver maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;