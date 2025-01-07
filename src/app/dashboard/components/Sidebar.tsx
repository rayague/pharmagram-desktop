"use client";

import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaClipboardList,
  FaUsers,
  FaChartLine,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

type SidebarProps = {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  activePage: string;
};

const Sidebar: React.FC<SidebarProps> = ({ setActivePage, activePage }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Logique pour se déconnecter (par exemple, effacer le token, rediriger vers une page de connexion)
    alert("Vous êtes maintenant déconnecté.");
    setShowLogoutModal(false);
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="flex">
      <nav className="h-screen w-64 bg-gray-800 text-white">
        <ul className="space-y-2 p-4">
          <h3 className="mb-16 mt-4 text-center text-3xl font-black text-green-500">
            Pharmagram
          </h3>
          <li>
            <button
              className={`flex w-full items-center space-x-3 px-4 py-2 text-left ${activePage === "home" ? "rounded-md bg-sky-500" : "hover:bg-gray-700"}`}
              onClick={() => setActivePage("home")}
            >
              <FaTachometerAlt className="text-lg" />
              <span className="font-bold">Dashboard</span>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full items-center space-x-3 px-4 py-2 text-left ${activePage === "products" ? "rounded-md bg-sky-500" : "hover:bg-gray-700"}`}
              onClick={() => setActivePage("products")}
            >
              <FaBox className="text-lg" />
              <span className="font-bold">Produits</span>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full items-center space-x-3 px-4 py-2 text-left ${activePage === "orders" ? "rounded-md bg-sky-500" : "hover:bg-gray-700"}`}
              onClick={() => setActivePage("orders")}
            >
              <FaClipboardList className="text-lg" />
              <span className="font-bold">Commandes</span>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full items-center space-x-3 px-4 py-2 text-left ${activePage === "users" ? "rounded-md bg-sky-500" : "hover:bg-gray-700"}`}
              onClick={() => setActivePage("users")}
            >
              <FaUsers className="text-lg" />
              <span className="font-bold">Utilisateurs</span>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full items-center space-x-3 px-4 py-2 text-left ${activePage === "reports" ? "rounded-md bg-sky-500" : "hover:bg-gray-700"}`}
              onClick={() => setActivePage("reports")}
            >
              <FaChartLine className="text-lg" />
              <span className="font-bold">Rapports</span>
            </button>
          </li>
          <li>
            <button
              className={`flex w-full items-center space-x-3 px-4 py-2 text-left ${activePage === "notifications" ? "rounded-md bg-sky-500" : "hover:bg-gray-700"}`}
              onClick={() => setActivePage("notifications")}
            >
              <FaBell className="text-lg" />
              <span className="font-bold">Notifications</span>
            </button>
          </li>

          {/* Profil */}
          <li>
            <button
              className={`flex w-full items-center space-x-3 px-4 py-2 text-left ${activePage === "profile" ? "rounded-md bg-sky-500" : "hover:bg-gray-700"}`}
              onClick={() => setActivePage("profile")}
            >
              <FaUserCircle className="text-lg" />
              <span className="font-bold">Profil</span>
            </button>
          </li>

          {/* Déconnexion */}
          <li>
            <button
              className="flex w-full items-center space-x-3 rounded-md px-4 py-2 text-left hover:bg-red-500"
              onClick={() => setShowLogoutModal(true)}
            >
              <FaSignOutAlt className="text-lg" />
              <span className="font-bold">Déconnexion</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Fenêtre modale de déconnexion */}
      {showLogoutModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "5px",
              textAlign: "center",
              width: "300px",
            }}
          >
            <h2 className="mb-4 text-xl font-bold">
              Êtes-vous sûr de vouloir vous déconnecter ?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#dc2626",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Oui
              </button>
              <button
                onClick={handleCloseModal}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
