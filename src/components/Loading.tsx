import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex justify-center items-center">
          <BookOpen size={96} strokeWidth={1.5} className="text-white" />
          {/* Animated pages */}
          <div className="absolute w-16 h-24 flex justify-end">
            <div className="page-flip w-8 h-24 bg-white/30 rounded-r-md transform origin-left" />
            <div className="page-flip w-8 h-24 bg-white/20 rounded-r-md transform origin-left delay-200" />
            <div className="page-flip w-8 h-24 bg-white/10 rounded-r-md transform origin-left delay-400" />
          </div>
        </div>
        <p className="text-white text-lg mt-4 font-medium">Chargement d'Intello...</p>
      </motion.div>

      <style>{`
        .page-flip {
          animation: flip 1.5s infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes flip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(-90deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;