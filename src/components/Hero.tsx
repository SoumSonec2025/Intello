import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroImage from '../assets/intello.jpg';

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const handleDownload = () => {
    const apkUrl = '/intello.apk';
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'intello.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id={id} className="relative h-screen bg-gradient-to-br from-orange-500 to-green-500">
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
          <motion.div
            className="md:w-1/2 text-white mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Boostez vos révisions avec Intello !
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              L’app 100% offline conçue pour les élèves et candidats au BAC.
            </p>
            <motion.button
              className="bg-white text-orange-500 px-8 py-4 rounded-full flex items-center space-x-2 text-lg font-semibold transition-colors duration-200 hover:bg-green-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
            >
              <span>Télécharger maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={HeroImage}
              alt="Intello App Preview"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;