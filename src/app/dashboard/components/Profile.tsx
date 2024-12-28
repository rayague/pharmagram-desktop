"use client";
import React, { useState } from "react";

// Simuler les données de l'utilisateur avec plus d'informations
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  address: "123 Main St, Anytown, USA",
  birthDate: "1990-01-01",
  bio: "Docteur passionné par la technologie et l'innovation.",
};

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState(userData);

  const handleEditClick = () => {
    setShowModal(true);
  };

  // Modifiez le type de l'événement ici pour gérer à la fois les <input> et <textarea>
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour sauvegarder les modifications (par exemple, appeler une API)
    console.log("Informations mises à jour", userInfo);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Profil de l'utilisateur</h1>

      <div className="rounded-md bg-white p-4 shadow-md">
        <div className="mb-4">
          <strong>Nom :</strong> {userInfo.name}
        </div>
        <div className="mb-4">
          <strong>Email :</strong> {userInfo.email}
        </div>
        <div className="mb-4">
          <strong>Téléphone :</strong> {userInfo.phone}
        </div>
        <div className="mb-4">
          <strong>Adresse :</strong> {userInfo.address}
        </div>
        <div className="mb-4">
          <strong>Date de naissance :</strong> {userInfo.birthDate}
        </div>
        <div className="mb-4">
          <strong>Bio :</strong> {userInfo.bio}
        </div>
        <button
          onClick={handleEditClick}
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Modifier mes informations
        </button>
      </div>

      {/* Fenêtre modale pour modifier les informations */}
      {showModal && (
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
            <h2 className="text-lg font-bold">Modifier vos informations</h2>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-left">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-left">
                  Téléphone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-left">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label htmlFor="birthDate" className="block text-left">
                  Date de naissance
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={userInfo.birthDate}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                />
              </div>
              <div>
                <label htmlFor="bio" className="block text-left">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={userInfo.bio}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                  rows={4}
                />
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <button
                  type="submit"
                  className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                >
                  Sauvegarder
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
