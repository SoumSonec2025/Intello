import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkId = (item: string): string => {
    switch (item) {
      case 'Télécharger':
        return 'accueil';
      case 'À propos':
        return 'a-propos';
      case 'Fonctionnalité':
        return 'fonctionnalite';
      default:
        return item.toLowerCase();
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    } rounded-b-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={logo}
                alt="Intello Logo"
                className="h-10 w-10 mr-2"
              />
              <span className={`ml-2 text-xl font-bold ${
                isScrolled ? 'text-orange-500' : 'text-white'
              }`}>Intello</span>
            </motion.div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Accueil', 'Fonctionnalité', 'Télécharger', 'À propos'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${getLinkId(item)}`}
                  className={`${
                    isScrolled ? 'text-orange-500 hover:text-green-500' : 'text-white hover:text-green-500'
                  } transition-colors duration-200 font-medium text-lg`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to="/confidentialite"
                  className={`${
                    isScrolled ? 'text-orange-500 hover:text-green-500' : 'text-white hover:text-green-500'
                  } transition-colors duration-200 font-medium text-lg`}
                >
                  Confidentialité
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-orange-500' : 'text-white'} hover:text-green-500 transition-colors duration-200`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
              {['Accueil', 'Fonctionnalité', 'Télécharger', 'À propos'].map((item) => (
                <a
                  key={item}
                  href={`#${getLinkId(item)}`}
                  className="block px-3 py-2 text-orange-500 hover:text-green-500 font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Link
                to="/confidentialite"
                className="block px-3 py-2 text-orange-500 hover:text-green-500 font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                Confidentialité
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;