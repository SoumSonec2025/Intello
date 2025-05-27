import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-green-500 to-orange-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold text-gray-100 mb-4 hover:text-orange-500">Liens utiles</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">Accueil</a></li>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">À propos</a></li>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold text-gray-100 mb-4 hover:text-orange-500">Réseaux sociaux</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">Instagram</a></li>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">LinkedIn</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-4">
            <h4 className="text-lg font-bold text-gray-100 mb-4 hover:text-orange-500">Informations légales</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">Mentions légales</a></li>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">Confidentialité</a></li>
              <li className="mb-2"><a href="#" className="text-gray-100 hover:text-green-500">Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-100 text-sm">© 2025 Intello. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;