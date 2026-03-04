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
            Chez Intello, nous valorisons votre vie privée. Cette politique explique notre engagement à protéger votre confidentialité ainsi que les conditions d'utilisation de notre application, incluant nos modules hors ligne, l'assistant Prof Intello, et notre nouveau module E-learning "Intello Academy".
          </p><br />

          <h3>1. Présentation des Fonctionnalités de l'Application</h3>
          <p>
            L'application Intello a évolué pour offrir une expérience d'apprentissage complète, combinant des outils hors ligne autonomes et un écosystème en ligne connecté. Voici le détail de nos fonctionnalités :
          </p><br />
          
          <h4>Fonctionnalités Classiques (Utilisables hors ligne) :</h4>
          <ul>
            <li>
              <strong>Résumés de cours et fiches de révision :</strong> Des documents clairs et concis couvrant le programme du Baccalauréat (Séries A, C, D) accessibles sans connexion internet.
            </li>
            <li>
              <strong>Sujets corrigés et Quiz de base :</strong> Des exercices d'entraînement intégrés directement dans l'application lors de son installation pour s'exercer à tout moment.
            </li>
          </ul><br />

          <h4>Assistant Intelligent (Connecté) :</h4>
          <ul>
            <li>
              <strong>Prof Intello (Génération par IA) :</strong> Un tuteur virtuel interactif propulsé par l'Intelligence Artificielle. Il aide l'élève à résoudre des exercices complexes, génère des explications personnalisées et répond aux questions pédagogiques en temps réel.
            </li>
          </ul><br />

          <h4>Nouveau Module "Intello Academy" (E-learning & Premium) :</h4>
          <ul>
            <li>
              <strong>Vidéos Éducatives :</strong> Des explications vidéo détaillées pour chaque leçon afin de faciliter la compréhension visuelle et auditive des notions clés.
            </li>
            <li>
              <strong>Examens et Évaluations Avancés :</strong> Des tests complets pour chaque module avec un système de notation sur 20, permettant d'évaluer le niveau réel de l'étudiant.
            </li>
            <li>
              <strong>Suivi de Progression :</strong> Un tableau de bord statistique qui analyse le temps d'étude hebdomadaire, la moyenne par matière, et l'assiduité de l'élève.
            </li>
            <li>
              <strong>Système de Gamification (Badges) :</strong> Des récompenses virtuelles (ex: Apprenant Matinal, Explorateur, Expert) attribuées pour motiver l'élève à atteindre ses objectifs d'étude.
            </li>
            <li>
              <strong>Synchronisation Cloud :</strong> Sauvegarde sécurisée de la progression sur nos serveurs pour permettre à l'élève de conserver ses données en cas de changement de téléphone.
            </li>
          </ul><br />

          <h3>2. Module "Intello Academy" et Création de Compte (Nouveau)</h3>
          <p>
            Pour accéder à notre module E-learning "Intello Academy" et à ses fonctionnalités Premium, la création d'un compte est requise. Dans ce cadre précis, nous collectons les données suivantes :
          </p><br />
          <ul>
            <li>
              <strong>Informations personnelles :</strong> Votre nom, prénom, numéro de téléphone, adresse e-mail et votre classe. Ces informations servent à identifier votre compte et à personnaliser votre expérience.
            </li>
            <li>
              <strong>Identifiants de l'appareil :</strong> Lors de votre connexion, nous collectons l'identifiant unique de votre appareil (Device ID / ANDROID_ID). Cette donnée est <strong>strictement utilisée à des fins de sécurité et de prévention des fraudes</strong>, afin de lier votre compte Premium à votre appareil personnel et d'empêcher le partage abusif de compte.
            </li>
            <li>
              <strong>Données de progression :</strong> Nous enregistrons vos scores aux examens, le temps passé sur les cours et les badges obtenus sur une base de données Cloud (Firebase) pour vous permettre de conserver votre progression.
            </li>
          </ul><br />

          <h3>3. Utilisation Hors Ligne (Fonctionnalités de base)</h3>
          <p>
            En dehors du module Intello Academy, Intello reste principalement une application hors ligne. Si vous utilisez l'application sans créer de compte (ou pour les contenus gratuits), nous ne collectons aucune donnée personnelle. Aucune donnée n'est transmise à nos serveurs ou à des tiers lorsque vous utilisez les fonctionnalités hors ligne standard.
          </p><br />

          <h3>4. Ressources Pédagogiques Intégrées</h3>
          <p>
            Toutes les ressources pédagogiques de base disponibles dans Intello sont directement intégrées dans l'application lors de son téléchargement. Ces ressources sont stockées localement sur votre appareil.
          </p><br />

          <h3>5. Confidentialité de l'Assistant Prof Intello</h3>
          <p>
            L'utilisation de Prof Intello nécessite une connexion Internet. Seules les questions ou requêtes que vous posez à l'assistant sont envoyées à l'API, de manière totalement anonyme. Les réponses sont reçues et affichées localement. Aucune donnée personnelle n'est stockée par l'API de traitement de langage.
          </p><br />

          <h3>6. Sécurité et Services Tiers</h3>
          <p>
            Pour la gestion des comptes "Intello Academy", nous utilisons <strong>Google Firebase (Firestore)</strong>. Toutes les données transférées vers Firebase sont sécurisées via un chiffrement en transit (HTTPS). Les données locales (réponses aux quiz hors ligne, cache) sont protégées par les mécanismes de sécurité de votre appareil.
          </p><br />

          <h3>7. Suppression des Données et Droits des Utilisateurs</h3>
          <p>
            Conformément aux règles de protection des données, vous avez le droit de demander la suppression de votre compte "Intello Academy" et de toutes les données associées. Pour exercer ce droit, vous pouvez nous contacter via WhatsApp ou par e-mail. Vos données seront alors définitivement effacées de nos serveurs.
          </p><br />

          <h3>8. Contenu et Droits d'Auteur</h3>
          <p>
            Les cours et sujets disponibles proviennent de sources telles que Fomesoutra.com, Ecoleonline.ci, le site du MENET et des sites de téléchargements de PDF gratuits. Nous ne revendiquons aucun droit sur ces documents et pouvons les retirer à tout moment. Tout auteur peut nous contacter pour demander le retrait d'un document.
          </p><br />

          <h3>9. Protection des Mineurs</h3>
          <p>
            Intello est destiné aux élèves, y compris les mineurs préparant le BAC. La collecte de données pour le module Intello Academy se limite au strict nécessaire pour la pédagogie et la sécurité du compte. Les parents ou tuteurs peuvent nous contacter pour toute question concernant l'utilisation de l'application par un enfant.
          </p><br />

          <h3>10. Conditions d'Utilisation</h3>
          <p>
            En utilisant Intello, vous acceptez les conditions suivantes :
          </p><br />
          <ul>
            <li>Utilisez l'application uniquement à des fins éducatives personnelles.</li>
            <li><strong>Comptes Premium :</strong> Un compte Premium "Intello Academy" est strictement personnel et lié à un seul appareil. Tout partage de compte sans autorisation entraînera le blocage de l'accès.</li>
            <li>Ne distribuez pas de contenu illégal, inapproprié ou nuisible via l'application.</li>
            <li>Ne tentez pas d'accéder ou de modifier les systèmes d'Intello de manière non autorisée.</li>
            <li>Utilisez l'assistant "Prof Intello" de manière responsable, uniquement pour obtenir de l'aide éducative.</li>
          </ul><br />
          <p>
            Toute violation de ces conditions peut entraîner la suspension de votre accès à l'application.
          </p><br />

          <h3>11. Modifications de la Politique</h3>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité pour refléter les changements dans nos pratiques. Les modifications seront publiées sur cette page.
          </p><br />

          <h3>12. Contactez-nous</h3>
          <p>
            Pour toute question concernant cette politique, vos données, ou pour demander le retrait d'un document :
          </p><br />
          <ul>
            <li>
              <strong>Email :</strong> <a href="mailto:innovtica.intello211@gmail.com" className="text-orange-500 hover:text-green-500">innovtica.intello211@gmail.com</a>
            </li>
            <li>
              <strong>Téléphone / WhatsApp :</strong> +225 05 56 47 97 23
            </li>
            <li>
              <strong>Adresse :</strong> Abidjan, Côte d'Ivoire
            </li>
          </ul>

          <p className="mt-8 text-center text-gray-500 font-medium">
            Dernière mise à jour : Mars 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;