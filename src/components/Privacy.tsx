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
            Chez Intello, la protection de votre vie privée est notre priorité absolue. Nous avons fait le choix d'une architecture qui garantit que vos données restent entre vos mains. Cette politique vous explique notre fonctionnement transparent.
          </p><br />

          <h3>1. Stockage Local et Confidentialité Absolue</h3>
          <p>
            L'application Intello est conçue selon le principe du <strong>"Local-First"</strong>. Cela signifie que la quasi-totalité de vos données ne quitte jamais votre téléphone :
          </p><br />
          <ul>
            <li>
              <strong>Données de profil :</strong> Votre nom, prénom, classe et mot de passe sont stockés uniquement dans la base de données interne (SQLite) de votre appareil. L'authentification se fait localement.
            </li>
            <li>
              <strong>Statistiques et Progression :</strong> Vos scores aux examens, votre temps d'étude, et vos badges obtenus sont sauvegardés exclusivement sur votre téléphone. Nous n'avons aucun accès à vos performances.
            </li>
          </ul><br />
          
          <div className="bg-orange-50 p-6 rounded-lg mb-8 border-l-4 border-orange-500">
            <h4 className="text-orange-700 mt-0">💡 Les avantages et limites de notre méthode :</h4>
            <p className="mb-2"><strong>Les Avantages :</strong></p>
            <ul className="mb-4">
              <li><strong>Sécurité maximale :</strong> Vos données ne pouvant pas être piratées sur nos serveurs puisqu'elles n'y sont pas.</li>
              <li><strong>100% Hors-Ligne :</strong> Vous pouvez vous connecter, réviser et voir vos statistiques sans aucune connexion internet.</li>
              <li><strong>Zéro pistage :</strong> Nous ne revendons et n'analysons aucune de vos données personnelles.</li>
            </ul>
            <p className="mb-2"><strong>La Limite :</strong></p>
            <ul>
              <li><strong>Responsabilité de l'appareil :</strong> Puisque vos données de progression (scores, badges) ne sont pas sauvegardées sur le Cloud, <em>elles seront perdues si vous désinstallez l'application, videz le cache, ou changez de téléphone</em>.</li>
            </ul>
          </div>

          <h3>2. Activation du Compte Premium (Intello Academy)</h3>
          <p>
            La seule donnée que nous stockons sur nos serveurs sécurisés (Google Firebase) concerne l'activation de votre compte Premium. Nous enregistrons uniquement :
          </p><br />
          <ul>
            <li>Votre identifiant (Numéro de téléphone ou Email).</li>
            <li>Le statut de votre abonnement (Actif ou Inactif).</li>
          </ul><br />
          <p>
            L'application interroge ponctuellement notre serveur pour vérifier ce statut et débloquer les cours, mais aucune autre information n'est transmise.
          </p><br />

          <h3>3. Assistant Intelligent Prof Intello</h3>
          <p>
            L'utilisation de Prof Intello (notre IA) nécessite une connexion Internet. Seules les questions que vous posez à l'assistant sont envoyées à notre API, de manière totalement anonyme. Les réponses sont affichées localement et aucune trace de vos conversations n'est conservée.
          </p><br />

          <h3>4. Contenu et Droits d'Auteur</h3>
          <p>
            Les cours et sujets disponibles proviennent de sources telles que Fomesoutra.com, Ecoleonline.ci, le site du MENET et des sites de téléchargements de PDF gratuits. Nous ne revendiquons aucun droit sur ces documents. Tout auteur peut nous contacter pour demander le retrait d'un document.
          </p><br />

          <h3>5. Suppression des Données</h3>
          <p>
            Pour supprimer vos données de progression, il vous suffit de désinstaller l'application. Pour supprimer votre identifiant de notre base de données Premium, veuillez nous contacter via WhatsApp ou par e-mail.
          </p><br />

          <h3>6. Nous contacter</h3>
          <ul>
            <li>
              <strong>Email :</strong> <a href="mailto:innovtica.intello211@gmail.com" className="text-orange-500 hover:text-green-500">innovtica.intello211@gmail.com</a>
            </li>
            <li>
              <strong>WhatsApp :</strong> +225 05 56 47 97 23
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