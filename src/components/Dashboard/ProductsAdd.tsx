"use client";
import React from "react";

const ProductsAdd: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">
              Informations du Produit Pharmaceutique
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
                  placeholder="Entrez la posologie du produit"
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
                  placeholder="Entrez le prix du produit"
                  required
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>

              {/* Classe pharmaceutique */}
              <div className="mb-4.5">
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Classe pharmaceutique
                </label>
                <select className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary">
                  <option value="Analgésiques">Analgésiques</option>
                  <option value="Antibiotiques">Antibiotiques</option>
                  <option value="Antihistaminiques">Antihistaminiques</option>
                  <option value="Antiviraux">Antiviraux</option>
                  <option value="Antifongiques">Antifongiques</option>
                  <option value="Cardiovasculaires">Cardiovasculaires</option>
                  <option value="Endocrinologie">Endocrinologie</option>
                  <option value="Gastroentérologie">Gastroentérologie</option>
                  <option value="Immunologie">Immunologie</option>
                  <option value="Neurologie">Neurologie</option>
                  <option value="Psychiatrie">Psychiatrie</option>
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
                  placeholder="Ajoutez une description du produit"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              {/* Bouton de soumission */}
              <button className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                Ajouter le produit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductsAdd;
