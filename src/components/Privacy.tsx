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
          <p className="italic mb-8">
            Chez Intello, nous valorisons votre vie privée. Cette politique explique notre engagement à protéger votre confidentialité ainsi que les conditions d'utilisation de notre application.
          </p><br />

          <h3>1. Aucune Collecte de Données (Hors Ligne)</h3>
          <p>
            Intello est principalement une application hors ligne conçue pour aider les élèves et étudiants à réviser pour le BAC. En dehors de l'utilisation de l'assistant intelligent "Prof Intello" (voir section 3), nous ne collectons aucune donnée personnelle ou d'utilisation, y compris votre nom, adresse e-mail, numéro de téléphone, localisation ou toute autre information. Aucune donnée n'est transmise à nos serveurs ou à des tiers lorsque vous utilisez les fonctionnalités hors ligne, telles que les quiz interactifs ou les ressources pédagogiques.
          </p><br />
          <p>
            Toutes les fonctionnalités hors ligne, telles que les quiz, les préférences ou les réponses, sont stockées localement sur votre appareil et ne sont pas accessibles par nous.
          </p><br />

          <h3>2. Ressources Pédagogiques Intégrées</h3>
          <p>
            Toutes les ressources pédagogiques disponibles dans Intello, telles que les cours, sujets corrigés et quiz, sont directement intégrées dans l'application lors de son téléchargement. Ces ressources sont stockées localement sur votre appareil, permettant un accès hors ligne sans aucune interaction avec des serveurs externes.
          </p><br />

          <h3>3. Assistant Intelligent Prof Intello</h3>
          <p>
            Intello intègre un assistant intelligent nommé "Prof Intello", qui utilise une API basée sur un modèle de langage large (LLM) pour aider les élèves à résoudre des exercices. Contrairement aux autres fonctionnalités, l'utilisation de Prof Intello nécessite une connexion Internet pour interagir avec l'API externe. Lors de cette interaction :
          </p><br />
          <ul>
            <li>
              Seules les questions ou requêtes que vous posez à Prof Intello sont envoyées à l'API, sans aucune information personnelle identifiable (comme votre nom ou adresse e-mail).
            </li>
            <li>
              Les réponses générées par l'API sont reçues et affichées localement, et aucune donnée n'est stockée par nous ou par l'API après l'interaction.
            </li>
          </ul><br />
          <p>
            Prof Intello s'appuie sur les ressources pédagogiques intégrées dans l'application pour fournir des explications et des solutions, et nous prenons des mesures pour minimiser les données transmises, en ne partageant que les informations strictement nécessaires à la résolution des exercices.
          </p><br />

          <h3>4. Contenu et Droits d'Auteur</h3>
          <p>
            Les cours et sujets disponibles dans l'application proviennent de sources extérieures telles que Fomesoutra.com, Ecoleonline.ci, le site du MENET et des sites de téléchargements gratuits de PDF. Nous ne revendiquons aucun droit sur ces documents et pouvons les retirer à tout moment en cas de demande par les auteurs. Tout auteur peut nous contacter pour demander le retrait d'un document.
          </p><br />

          <h3>5. Sécurité</h3>
          <p>
            Pour les fonctionnalités hors ligne, Intello ne collecte ni ne transmet de données, éliminant tout risque de fuite de données personnelles via ces usages. Pour l'assistant "Prof Intello", les données transmises à l'API externe (uniquement les requêtes) sont sécurisées via un chiffrement (HTTPS), et nous ne conservons aucune trace de ces interactions. Les données locales (par exemple, vos réponses aux quiz hors ligne ou préférences) sont protégées par les mécanismes de sécurité de votre appareil et de son système d'exploitation.
          </p><br />

          <h3>6. Protection des Mineurs</h3>
          <p>
            Intello est destiné aux élèves, y compris les mineurs préparant le BAC. Étant donné que nous ne collectons aucune donnée pour les fonctionnalités hors ligne, et que les interactions avec Prof Intello ne transmettent que des requêtes anonymes, il n'y a aucun risque significatif pour la vie privée des mineurs. Les parents ou tuteurs peuvent nous contacter pour toute question concernant l'utilisation de l'application par un enfant.
          </p><br />

          <h3>7. Conditions d'Utilisation</h3>
          <p>
            En utilisant Intello, vous acceptez les conditions suivantes :
          </p><br />
          <ul>
            <li>
              Utilisez l'application uniquement à des fins éducatives personnelles.
            </li>
            <li>
              Ne distribuez pas de contenu illégal, inapproprié ou nuisible via l'application.
            </li>
            <li>
              Ne tentez pas d'accéder ou de modifier les systèmes d'Intello de manière non autorisée.
            </li>
            <li>
              Utilisez l'assistant "Prof Intello" de manière responsable, uniquement pour obtenir de l'aide éducative, et non pour tricher lors d'examens ou d'évaluations officielles.
            </li>
          </ul><br />
          <p>
            Toute violation de ces conditions peut entraîner la suspension de votre accès à l'application.
          </p><br />

          <h3>8. Modifications de la Politique</h3>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité à tout moment pour refléter les changements dans nos pratiques ou les exigences légales. Les modifications seront publiées sur cette page, et la date de "Dernière mise à jour" sera ajustée. Nous vous encourageons à consulter cette page régulièrement.
          </p><br />

          <h3>9. Contactez-nous</h3>
          <p>
            Pour toute question concernant cette politique de confidentialité, les données transmises via Prof Intello, ou pour demander le retrait d'un document :
          </p><br />
          <ul>
            <li>
              <strong>Email :</strong> <a href="mailto:innovtica.intello211@gmail.com" className="text-orange-500 hover:text-green-500">support-intello@gmail.com</a>
            </li>
            <li>
              <strong>Téléphone :</strong> +225 05 56 47 97 23
            </li>
            <li>
              <strong>Adresse :</strong> Abidjan, Côte d'Ivoire
            </li>
          </ul>

          <p className="mt-8 text-center text-gray-500">
            Dernière mise à jour : 27 mai 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;