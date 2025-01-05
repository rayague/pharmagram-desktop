"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faStore,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";

// Simuler les données de l'utilisateur et de la pharmacie
const userData = {
  name: "Jean Dupont",
  role: "Caissier", // Le rôle peut être "Caissier" ou "Agent"
};

const pharmacyData = {
  name: "Pharmacie du Soleil",
  openingHours: "08:00 - 20:00", // Heure d'ouverture et de fermeture
};

const Acceuil: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* Affichage des informations pharmacie avec icône */}
        <div className="col-span-12 rounded-lg bg-gradient-to-r from-indigo-100 to-indigo-300 p-6 shadow-lg sm:col-span-6 lg:col-span-3">
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faStore}
              className="mr-3 h-8 w-8 text-indigo-600"
            />
            <h3 className="text-xl font-semibold text-indigo-800">Pharmacie</h3>
          </div>
          <p className="text-lg text-indigo-800">{pharmacyData.name}</p>
        </div>

        {/* Affichage des heures d'ouverture avec icône */}
        <div className="col-span-12 rounded-lg bg-gradient-to-r from-green-100 to-green-300 p-6 shadow-lg sm:col-span-6 lg:col-span-3">
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="mr-3 h-8 w-8 text-green-600"
            />
            <h3 className="text-xl font-semibold text-green-800">
              Heures d&apos;ouverture
            </h3>
          </div>
          <p className="text-lg text-green-800">{pharmacyData.openingHours}</p>
        </div>

        {/* Affichage du nom de l'utilisateur connecté avec icône */}
        <div className="col-span-12 rounded-lg bg-gradient-to-r from-yellow-100 to-yellow-300 p-6 shadow-lg sm:col-span-6 lg:col-span-3">
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-3 h-8 w-8 text-yellow-600"
            />
            <h3 className="text-xl font-semibold text-yellow-800">
              Utilisateur connecté
            </h3>
          </div>
          <p className="text-lg text-yellow-800">{userData.name}</p>
        </div>

        {/* Affichage du rôle de l'utilisateur avec icône */}
        <div className="col-span-12 rounded-lg bg-gradient-to-r from-purple-100 to-purple-300 p-6 shadow-lg sm:col-span-6 lg:col-span-3">
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faUserTag}
              className="mr-3 h-8 w-8 text-purple-600"
            />
            <h3 className="text-xl font-semibold text-purple-800">
              Rôle de l&apos;utilisateur
            </h3>
          </div>
          <p className="text-lg text-purple-800">{userData.role}</p>
        </div>
      </div>
    </>
  );
};

export default Acceuil;
