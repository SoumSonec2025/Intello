import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Feature1 from '../assets/accueil.jpg';
import Feature2 from '../assets/livre.jpg';
import Feature3 from '../assets/intello.jpg';
import Feature4 from '../assets/prointello.jpg';
import Feature5 from '../assets/notification.jpg';

interface DestinationsProps {
  id?: string;
}

const fonctionnalites = [
  { id: 1, name: 'Cours et Résumés', image: Feature1, description: 'Accédez à des cours complets et des résumés offline', price: 'Gratuit' },
  { id: 2, name: 'Sujets Corrigés', image: Feature2, description: 'Sujets du BAC (2010-2024) avec corrections', price: 'Gratuit' },
  { id: 3, name: 'Quiz Interactifs', image: Feature3, description: 'Testez vos connaissances avec des quiz', price: 'Gratuit' },
  { id: 4, name: 'Assistant Intelligent', image: Feature4, description: 'Obtenez des conseils personnalisés', price: 'Gratuit' },
  { id: 5, name: 'Notifications', image: Feature5, description: 'Restez motivé avec des rappels', price: 'Gratuit' },
];

const Destinations: React.FC<DestinationsProps> = ({ id }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id={id} ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            Fonctionnalités d'Intello
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explorez les outils qui vous préparent au succès au BAC
          </p>
        </motion.div>
        <div className="relative">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            className="mySwiper py-10"
          >
            {fonctionnalites.map((feature) => (
              <SwiperSlide key={feature.id} className="px-4">
                <motion.div
                  className="bg-white rounded-[40px] overflow-hidden shadow-lg border border-orange-500 hover:border-green-500 transition-all duration-300"
                  style={{ height: '500px', width: '250px' }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{feature.description}</p>
                    <p className="text-orange-500 font-semibold mb-4">{feature.price}</p>
                    <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-green-500 hover:shadow-md transition-all duration-200">
                      En savoir plus
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-200">
            <ChevronLeft className="w-6 h-6 text-green-500" />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-200">
            <ChevronRight className="w-6 h-6 text-green-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;