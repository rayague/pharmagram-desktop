"use client";

import React, { useState } from "react";

const Hours: React.FC = () => {
  const [openingHour, setOpeningHour] = useState<string>("08");
  const [openingMinute, setOpeningMinute] = useState<string>("00");
  const [closingHour, setClosingHour] = useState<string>("18");
  const [closingMinute, setClosingMinute] = useState<string>("00");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const generateOptions = (range: number) => {
    return Array.from({ length: range }, (_, i) => (
      <option key={i} value={i.toString().padStart(2, "0")}>
        {i.toString().padStart(2, "0")}
      </option>
    ));
  };

  const handleSave = () => {
    alert(
      `Heures sauvegardées : Ouverture à ${openingHour}:${openingMinute}, Fermeture à ${closingHour}:${closingMinute}`,
    );
    setIsEditing(false); // Désactiver l'édition après la sauvegarde
  };

  const handleEdit = () => {
    setIsEditing(true); // Activer l'édition
  };

  return (
    <div className="mt-6 rounded-md bg-white p-4 shadow">
      <h1 className="mb-4 text-xl font-semibold">
        Gérer les Heures d&apos;Ouverture
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Heure d'ouverture */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Heure d&apos;ouverture
          </label>
          <div className="mt-1 flex items-center gap-2">
            <select
              value={openingHour}
              onChange={(e) => setOpeningHour(e.target.value)}
              disabled={!isEditing}
              className={`w-16 rounded-md border border-gray-300 px-3 py-2 focus:outline-none ${
                isEditing
                  ? "focus:border-blue-500 focus:ring-blue-500"
                  : "bg-gray-100"
              }`}
            >
              {generateOptions(24)}
            </select>
            :
            <select
              value={openingMinute}
              onChange={(e) => setOpeningMinute(e.target.value)}
              disabled={!isEditing}
              className={`w-16 rounded-md border border-gray-300 px-3 py-2 focus:outline-none ${
                isEditing
                  ? "focus:border-blue-500 focus:ring-blue-500"
                  : "bg-gray-100"
              }`}
            >
              {generateOptions(60)}
            </select>
          </div>
        </div>
        {/* Heure de fermeture */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Heure de fermeture
          </label>
          <div className="mt-1 flex items-center gap-2">
            <select
              value={closingHour}
              onChange={(e) => setClosingHour(e.target.value)}
              disabled={!isEditing}
              className={`w-16 rounded-md border border-gray-300 px-3 py-2 focus:outline-none ${
                isEditing
                  ? "focus:border-blue-500 focus:ring-blue-500"
                  : "bg-gray-100"
              }`}
            >
              {generateOptions(24)}
            </select>
            :
            <select
              value={closingMinute}
              onChange={(e) => setClosingMinute(e.target.value)}
              disabled={!isEditing}
              className={`w-16 rounded-md border border-gray-300 px-3 py-2 focus:outline-none ${
                isEditing
                  ? "focus:border-blue-500 focus:ring-blue-500"
                  : "bg-gray-100"
              }`}
            >
              {generateOptions(60)}
            </select>
          </div>
        </div>
      </div>
      {/* Boutons */}
      <div className="mt-6 flex justify-end gap-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Enregistrer
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Modifier
          </button>
        )}
      </div>
    </div>
  );
};

export default Hours;
