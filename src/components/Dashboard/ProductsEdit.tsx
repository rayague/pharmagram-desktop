"use client";
import React, { useState } from "react";

const ProductsEdit: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Produit A",
      reference: "REF123",
      laboratory: "Lab A",
      expiryDate: "2025-01-01",
      dosage: "1x par jour",
      price: 100,
      category: "Antibiotiques",
      description: "Description A",
      image: "https://via.placeholder.com/100", // Exemple d'image
    },
    {
      id: 2,
      name: "Produit B",
      reference: "REF456",
      laboratory: "Lab B",
      expiryDate: "2026-01-01",
      dosage: "2x par jour",
      price: 200,
      category: "Analgésiques",
      description: "Description B",
      image: "https://via.placeholder.com/100", // Exemple d'image
    },
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleEdit = (product: any) => {
    setSelectedProduct({ ...product });
  };

  const handleDelete = (productId: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Produit mis à jour !");
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="mt-4 rounded-md bg-white p-4">
        <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
          Liste des produits
        </h3>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4 w-full rounded-[7px] border-[1.5px] bg-slate-100 px-5 py-3"
        />
        <table className="w-full table-auto border-collapse border border-stroke">
          <thead>
            <tr>
              <th className="border border-stroke px-4 py-2">Nom</th>
              <th className="border border-stroke px-4 py-2">Référence</th>
              <th className="border border-stroke px-4 py-2">Prix</th>{" "}
              {/* Ajout de la colonne Prix */}
              <th className="border border-stroke px-4 py-2">Image</th>{" "}
              {/* Ajout de la colonne Image */}
              <th className="border border-stroke px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="border border-stroke px-4 py-2">
                  {product.name}
                </td>
                <td className="border border-stroke px-4 py-2">
                  {product.reference}
                </td>
                <td className="border border-stroke px-4 py-2">
                  {product.price} €
                </td>
                <td className="border border-stroke px-4 py-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={50}
                    height={50}
                  />
                </td>
                <td className="flex flex-row items-center justify-center border border-stroke px-4 py-2">
                  <button
                    className="mr-2 rounded bg-blue-500 px-4 py-2 text-white"
                    onClick={() => handleEdit(product)}
                  >
                    Modifier
                  </button>
                  <button
                    className="rounded bg-red-500 px-4 py-2 text-white"
                    onClick={() => handleDelete(product.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProduct && (
        <div className="mt-4 grid w-full grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Éditer le Produit Pharmaceutique
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                {/* Nom du produit */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Nom du produit
                  </label>
                  <input
                    type="text"
                    defaultValue="Nom existant du produit"
                    placeholder="Entrez le nom du produit"
                    required
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Numéro de référence */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Numéro de référence
                  </label>
                  <input
                    type="text"
                    defaultValue="Numéro de référence existant"
                    placeholder="Entrez le numéro de référence"
                    required
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Laboratoire */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Laboratoire
                  </label>
                  <input
                    type="text"
                    defaultValue="Nom du laboratoire existant"
                    placeholder="Entrez le nom du laboratoire"
                    required
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Date d'expiration */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Date d'expiration
                  </label>
                  <input
                    type="date"
                    defaultValue="2024-12-31"
                    required
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Posologie */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Posologie
                  </label>
                  <input
                    type="text"
                    defaultValue="Posologie existante"
                    placeholder="Entrez la posologie"
                    required
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Prix */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Prix
                  </label>
                  <input
                    type="number"
                    defaultValue="100"
                    placeholder="Entrez le prix"
                    required
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Classe pharmaceutique */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Classe pharmaceutique
                  </label>
                  <select
                    defaultValue="Antibiotiques"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  >
                    <option value="Analgésiques">Analgésiques</option>
                    <option value="Antibiotiques">Antibiotiques</option>
                    <option value="Antihistaminiques">Antihistaminiques</option>
                    <option value="Antiviraux">Antiviraux</option>
                    <option value="Antifongiques">Antifongiques</option>
                    <option value="Cardiovasculaires">Cardiovasculaires</option>
                  </select>
                </div>

                {/* Image du produit */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Image du produit
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    defaultValue="Description existante du produit"
                    placeholder="Ajoutez une description"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                {/* Bouton de soumission */}
                <button className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                  Mettre à jour le produit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsEdit;
