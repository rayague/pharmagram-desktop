import React, { useState } from "react";

const Header: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header className="flex items-center justify-between bg-sky-500 p-4 text-white shadow">
      {/* Logo et nom de la pharmacie */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/header/profil.jpg"
          alt="Logo de la pharmacie"
          className="h-10 w-10 rounded-full"
        />
        <h1 className="text-xl font-bold">Nom de la Pharmacie</h1>
      </div>
    </header>
  );
};

export default Header;
