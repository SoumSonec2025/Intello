import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Booking: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="relative h-screen bg-gradient-to-br from-orange-500 to-green-500">
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Side: About Us */}
          <motion.div
            className="md:w-1/2 text-white mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de nous
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Nous sommes une équipe passionnée d’étudiants ingénieurs en informatique et travaux pratiques (TP), 
              engagés à transformer l’éducation en Côte d'Ivoire et au-delà. Ayant nous-mêmes traversé les défis 
              académiques, nous avons décidé d’offrir tout notre soutien aux élèves et étudiants, en particulier 
              ceux préparant le BAC. Notre mission est de rendre l’apprentissage accessible, interactif et efficace 
              grâce à des ressources personnalisées, des outils innovants comme les quiz interactifs et un assistant 
              intelligent, "Prof Intello". Forts de nos compétences techniques et de notre expérience, nous développons 
              des solutions éducatives qui répondent aux besoins réels des apprenants, avec un engagement constant 
              pour l’excellence et l’inclusion. Rejoignez-nous dans cette aventure pour réussir ensemble !
            </p>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="src/assets/logo.png" // Updated path, assuming assets is in public folder
              alt="Intello Team"
              className="w-full max-w-md rounded-lg shadow-lg"
              onError={(e) => console.error("Failed to load image:", e.currentTarget.src)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;