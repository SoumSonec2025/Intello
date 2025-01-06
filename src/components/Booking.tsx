import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Plane, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';
import FormError from './FormError';
import { isDateValid, isDateRangeValid, errorMessages } from '../utils/validationUtils';

interface FormErrors {
  destination?: string;
  departDate?: string;
  returnDate?: string;
  travelers?: string;
  roomType?: string;
  specialRequests?: string;
}

const Booking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [bookingData, setBookingData] = useState({
    destination: '',
    departDate: '',
    returnDate: '',
    travelers: '2',
    roomType: 'standard',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    const newErrors: FormErrors = { ...errors };

    switch (name) {
      case 'destination':
        if (!value) {
          newErrors.destination = errorMessages.destination;
        } else {
          delete newErrors.destination;
        }
        break;

      case 'departDate':
        if (!value) {
          newErrors.departDate = errorMessages.required;
        } else if (!isDateValid(value)) {
          newErrors.departDate = errorMessages.invalidDate;
        } else {
          delete newErrors.departDate;
          // Revalidate return date when depart date changes
          if (bookingData.returnDate) {
            if (!isDateRangeValid(value, bookingData.returnDate)) {
              newErrors.returnDate = errorMessages.invalidDateRange;
            } else {
              delete newErrors.returnDate;
            }
          }
        }
        break;

      case 'returnDate':
        if (!value) {
          newErrors.returnDate = errorMessages.required;
        } else if (!isDateValid(value)) {
          newErrors.returnDate = errorMessages.invalidDate;
        } else if (!isDateRangeValid(bookingData.departDate, value)) {
          newErrors.returnDate = errorMessages.invalidDateRange;
        } else {
          delete newErrors.returnDate;
        }
        break;

      case 'travelers':
        if (!value || parseInt(value) < 1 || parseInt(value) > 6) {
          newErrors.travelers = errorMessages.invalidTravelers;
        } else {
          delete newErrors.travelers;
        }
        break;

      case 'roomType':
        if (!value) {
          newErrors.roomType = errorMessages.roomType;
        } else {
          delete newErrors.roomType;
        }
        break;

      case 'specialRequests':
        if (value.length > 500) {
          newErrors.specialRequests = errorMessages.specialRequests;
        } else {
          delete newErrors.specialRequests;
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, bookingData[name as keyof typeof bookingData]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    Object.keys(bookingData).forEach(key => {
      const fieldIsValid = validateField(
        key,
        bookingData[key as keyof typeof bookingData]
      );
      isValid = isValid && fieldIsValid;
    });

    if (!isValid) {
      toast.error('Veuillez corriger les erreurs dans le formulaire');
      return;
    }

    toast.success('Votre demande de réservation a été envoyée avec succès !');
    setBookingData({
      destination: '',
      departDate: '',
      returnDate: '',
      travelers: '2',
      roomType: 'standard',
      specialRequests: ''
    });
    setTouched({});
    setErrors({});
  };

  return (
    <section ref={ref} className="py-20 bg-white" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Réservez Votre Voyage
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planifiez votre prochain voyage de luxe en quelques clics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Plane className="w-5 h-5 text-blue-600" />
                    <span>Destination</span>
                  </div>
                </label>
                <select
                  name="destination"
                  value={bookingData.destination}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    errors.destination && touched.destination ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Sélectionnez une destination</option>
                  <option value="maldives">Maldives</option>
                  <option value="santorini">Santorini</option>
                  <option value="bali">Bali</option>
                  <option value="dubai">Dubai</option>
                  <option value="seychelles">Seychelles</option>
                </select>
                {errors.destination && touched.destination && (
                  <FormError message={errors.destination} />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Nombre de voyageurs</span>
                  </div>
                </label>
                <select
                  name="travelers"
                  value={bookingData.travelers}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    errors.travelers && touched.travelers ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'voyageur' : 'voyageurs'}</option>
                  ))}
                </select>
                {errors.travelers && touched.travelers && (
                  <FormError message={errors.travelers} />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>Date de départ</span>
                  </div>
                </label>
                <input
                  type="date"
                  name="departDate"
                  value={bookingData.departDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    errors.departDate && touched.departDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.departDate && touched.departDate && (
                  <FormError message={errors.departDate} />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>Date de retour</span>
                  </div>
                </label>
                <input
                  type="date"
                  name="returnDate"
                  value={bookingData.returnDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                    errors.returnDate && touched.returnDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.returnDate && touched.returnDate && (
                  <FormError message={errors.returnDate} />
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Type de chambre</span>
                </div>
              </label>
              <select
                name="roomType"
                value={bookingData.roomType}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                  errors.roomType && touched.roomType ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="standard">Chambre Standard</option>
                <option value="deluxe">Suite Deluxe</option>
                <option value="presidential">Suite Présidentielle</option>
                <option value="villa">Villa Privée</option>
              </select>
              {errors.roomType && touched.roomType && (
                <FormError message={errors.roomType} />
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Demandes spéciales
              </label>
              <textarea
                name="specialRequests"
                value={bookingData.specialRequests}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                  errors.specialRequests && touched.specialRequests ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Régime alimentaire particulier, arrangements spéciaux, etc."
              ></textarea>
              {errors.specialRequests && touched.specialRequests && (
                <FormError message={errors.specialRequests} />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Réserver maintenant</span>
              <Plane className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;