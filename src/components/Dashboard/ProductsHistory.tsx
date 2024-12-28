"use client";
import React, { useState } from "react";

const ProductsHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [history, setHistory] = useState([
    {
      id: 1,
      productName: "Produit A",
      action: "Ajouté",
      performedBy: "Utilisateur 1",
      date: "2024-01-15 10:30",
    },
    {
      id: 2,
      productName: "Produit B",
      action: "Supprimé",
      performedBy: "Utilisateur 2",
      date: "2024-01-20 14:45",
    },
    {
      id: 3,
      productName: "Produit C",
      action: "Ajouté",
      performedBy: "Utilisateur 3",
      date: "2024-02-05 09:20",
    },
    {
      id: 4,
      productName: "Produit D",
      action: "Supprimé",
      performedBy: "Utilisateur 4",
      date: "2024-02-10 16:00",
    },
  ]);

  const filteredHistory = history.filter((entry) =>
    entry.productName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex flex-col">
      {/* Barre de recherche */}
      <div className="mb-6 flex justify-between">
        <h3 className="text-xl font-semibold text-dark dark:text-white">
          Historique des Produits
        </h3>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-1/3 rounded-[7px] border-[1.5px] border-stroke px-4 py-2 outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tableau des historiques */}
      <div className="overflow-x-auto rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left dark:bg-dark-3">
              <th className="px-6 py-3 font-medium text-dark dark:text-white">
                Nom du Produit
              </th>
              <th className="px-6 py-3 font-medium text-dark dark:text-white">
                Action
              </th>
              <th className="px-6 py-3 font-medium text-dark dark:text-white">
                Effectué par
              </th>
              <th className="px-6 py-3 font-medium text-dark dark:text-white">
                Date & Heure
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.length > 0 ? (
              filteredHistory.map((entry) => (
                <tr
                  key={entry.id}
                  className="hover:bg-gray-100 dark:hover:bg-dark-2"
                >
                  <td className="px-6 py-4 text-dark dark:text-white">
                    {entry.productName}
                  </td>
                  <td
                    className={`px-6 py-4 text-dark ${
                      entry.action === "Ajouté"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {entry.action}
                  </td>
                  <td className="px-6 py-4 text-dark dark:text-white">
                    {entry.performedBy}
                  </td>
                  <td className="px-6 py-4 text-dark dark:text-white">
                    {entry.date}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-4 text-center text-dark dark:text-white"
                >
                  Aucun historique trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsHistory;
