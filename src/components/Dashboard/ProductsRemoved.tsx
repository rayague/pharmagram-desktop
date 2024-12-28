"use client";
import React, { useState } from "react";

const ProductsRemoved: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Produit A",
      reason: "Problème de qualité",
      dateRemoved: "2024-01-15",
    },
    {
      id: 2,
      name: "Produit B",
      reason: "Non-conformité réglementaire",
      dateRemoved: "2024-02-20",
    },
    {
      id: 3,
      name: "Produit C",
      reason: "Effets secondaires graves",
      dateRemoved: "2024-03-10",
    },
  ]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="flex flex-col">
        {/* Barre de recherche */}
        <div className="mb-6 flex justify-between">
          <h3 className="text-xl font-semibold text-dark dark:text-white">
            Produits Retirés du Marché
          </h3>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            className="w-1/3 rounded-[7px] border-[1.5px] border-stroke px-4 py-2 outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Liste des produits */}
        <div className="overflow-x-auto rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left dark:bg-dark-3">
                <th className="px-6 py-3 font-medium text-dark dark:text-white">
                  Nom du Produit
                </th>
                <th className="px-6 py-3 font-medium text-dark dark:text-white">
                  Raison
                </th>
                <th className="px-6 py-3 font-medium text-dark dark:text-white">
                  Date de Retrait
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-100 dark:hover:bg-dark-2"
                  >
                    <td className="px-6 py-4 text-dark dark:text-white">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-dark dark:text-white">
                      {product.reason}
                    </td>
                    <td className="px-6 py-4 text-dark dark:text-white">
                      {product.dateRemoved}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-4 text-center text-dark dark:text-white"
                  >
                    Aucun produit trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsRemoved;
