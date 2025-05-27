import React from 'react';

interface PrivacyProps {
  id?: string;
}

const Privacy: React.FC<PrivacyProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">
          Politique de Confidentialité et Conditions d'Utilisation
        </h2>
        <div className="prose prose-lg text-gray-700">
          <h3>1. Collecte des Données</h3>
          <p>
            Intello s'engage à protéger votre vie privée. Nous ne collectons aucune donnée personnelle identifiable
            (DPI) à moins que vous ne la fournissiez volontairement (par exemple, via le formulaire de réservation).
            Les données collectées peuvent inclure votre nom, adresse e-mail et préférences éducatives, utilisées
            uniquement pour améliorer votre expérience sur l'application.
          </p>
          <h3>2. Utilisation des Données</h3>
          <p>
            Les informations que vous fournissez sont utilisées pour personnaliser les ressources éducatives et
            envoyer des notifications pertinentes. Nous ne partageons pas vos données avec des tiers sans votre
            consentement, sauf si requis par la loi.
          </p>
          <h3>3. Sécurité</h3>
          <p>
            Nous utilisons des mesures de sécurité appropriées pour protéger vos données contre tout accès non
            autorisé, perte ou modification. Cependant, aucune transmission sur Internet n'est totalement sécurisée.
          </p>
          <h3>4. Conditions d'Utilisation</h3>
          <p>
            En utilisant Intello, vous acceptez de ne pas utiliser l'application à des fins illégales ou de
            distribuer du contenu inapproprié. Intello est conçu pour un usage éducatif personnel. Toute violation
            peut entraîner la suspension de votre accès.
          </p>
          <h3>5. Modifications</h3>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité à tout moment. Les changements seront
            publiés sur cette page, et nous vous encourageons à la consulter régulièrement.
          </p>
          <p className="mt-8 text-center text-gray-500">
            Dernière mise à jour : 27 mai 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;