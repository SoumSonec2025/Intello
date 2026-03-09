import React, { useState, useEffect, useMemo } from 'react';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Assure-toi que le chemin est bon

interface DashboardProps {
  id?: string;
}

interface UserData {
  id: string; // Numéro de téléphone
  isPremium: boolean;
  date_creation: string;
}

const Dashboard: React.FC<DashboardProps> = ({ id }) => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPremium, setFilterPremium] = useState('all');
  const [loading, setLoading] = useState(true);

  // 1. Écouter la base de données Firebase en temps réel
  useEffect(() => {
    // onSnapshot permet d'avoir les données mises à jour en direct !
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const usersData: UserData[] = [];
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        
        // Convertir le timestamp (millisecondes) en date lisible
        let formattedDate = 'Inconnue';
        if (data.date_creation) {
          const date = new Date(data.date_creation);
          formattedDate = date.toLocaleDateString('fr-FR');
        }

        usersData.push({
          id: doc.id,
          isPremium: data.isPremium || false,
          date_creation: formattedDate,
        });
      });

      setUsers(usersData);
      setLoading(false);
    });

    // Nettoyage de l'écouteur quand on quitte la page
    return () => unsubscribe();
  }, []);

  // 2. Logique de filtrage
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = user.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = 
        filterPremium === 'all' ? true :
        filterPremium === 'premium' ? user.isPremium === true :
        filterPremium === 'free' ? user.isPremium === false : true;

      return matchesSearch && matchesFilter;
    });
  }, [users, searchTerm, filterPremium]);

  // 3. Modifier le statut Premium sur Firebase
  const togglePremiumStatus = async (userId: string, currentStatus: boolean) => {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        isPremium: !currentStatus // Inverse le statut (true devient false, etc.)
      });
      // Pas besoin de mettre à jour le state React manuellement :
      // onSnapshot va détecter le changement et rafraîchir le tableau tout seul !
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      alert("Impossible de modifier le statut. Vérifie tes règles de sécurité Firebase.");
    }
  };

  return (
    <section id={id} className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Tableau de Bord Administrateur</h2>
          <p className="text-gray-600 mt-2">Gérez les accès Premium de vos élèves en temps réel.</p>
        </div>

        {/* Barre de Filtres */}
        <div className="bg-white p-4 rounded-t-xl shadow-sm border-b border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Rechercher un identifiant (ex: 0556...)"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full sm:w-48">
            <select
              className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none bg-white"
              value={filterPremium}
              onChange={(e) => setFilterPremium(e.target.value)}
            >
              <option value="all">Tous les comptes</option>
              <option value="premium">Comptes Premium</option>
              <option value="free">Comptes Gratuits</option>
            </select>
          </div>
        </div>

        {/* Tableau */}
        <div className="bg-white shadow-sm rounded-b-xl overflow-hidden overflow-x-auto border-x border-b border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Identifiant</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date de création</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Statut Actuel</th>
                <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">Chargement des données...</td></tr>
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.date_creation}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.isPremium ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>
                        {user.isPremium ? '🌟 Premium' : '🔒 Standard'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => togglePremiumStatus(user.id, user.isPremium)}
                        className={`px-4 py-2 rounded-md font-medium text-white transition-colors ${user.isPremium ? 'bg-red-500 hover:bg-red-600' : 'bg-orange-500 hover:bg-orange-600'}`}
                      >
                        {user.isPremium ? 'Révoquer l\'accès' : 'Activer Premium'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">Aucun utilisateur trouvé.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-sm text-gray-500 text-right">
          Total affiché : {filteredUsers.length} utilisateur(s)
        </div>
      </div>
    </section>
  );
};

export default Dashboard;