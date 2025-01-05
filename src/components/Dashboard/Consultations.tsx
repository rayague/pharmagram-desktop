"use client";
import React, { useState } from "react";
import {
  faUser,
  faCalendarAlt,
  faClock,
  faCheckCircle,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Simuler les demandes de consultation
const mockRequests = [
  {
    id: 1,
    clientName: "Alice Dupont",
    requestDate: "04/01/2025",
    status: "En attente",
    message: "J'ai besoin d'une consultation pour une toux persistante.",
  },
];

const Consultations: React.FC = () => {
  const [confirmationDate, setConfirmationDate] = useState<string>("");
  const [confirmationTime, setConfirmationTime] = useState<string>("");
  const [confirmationMessage, setConfirmationMessage] = useState<string>("");

  const handleConfirmRequest = (id: number) => {
    // Ici on pourrait envoyer ces informations au backend pour confirmation
    console.log(
      "Confirmation de la demande:",
      id,
      confirmationDate,
      confirmationTime,
      confirmationMessage,
    );
  };

  return (
    <div className="mt-6 grid grid-cols-12 gap-4">
      {mockRequests.map((request) => (
        <div
          key={request.id}
          className="col-span-12 flex flex-col rounded-lg bg-white p-6 shadow-md sm:col-span-6 lg:col-span-4"
        >
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-3 text-xl text-blue-500"
            />
            <h3 className="text-lg font-semibold">{request.clientName}</h3>
          </div>

          <div className="mb-2">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="mr-2 text-gray-500"
            />
            <span className="text-gray-700">
              Date de la demande: {request.requestDate}
            </span>
          </div>

          <div className="mb-2">
            <FontAwesomeIcon icon={faComments} className="mr-2 text-gray-500" />
            <p className="text-gray-700">{request.message}</p>
          </div>

          <div className="mb-2">
            <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500" />
            <span className="text-gray-700">Statut: {request.status}</span>
          </div>

          {/* Formulaire de confirmation de la demande pour l'agent */}
          {request.status === "En attente" && (
            <div className="mt-4">
              <h4 className="font-semibold">Confirmer la demande</h4>
              <div className="mb-2">
                <label htmlFor="date" className="block text-sm">
                  Date de consultation
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full rounded-md border p-2"
                  value={confirmationDate}
                  onChange={(e) => setConfirmationDate(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="time" className="block text-sm">
                  Heure de consultation
                </label>
                <input
                  id="time"
                  type="time"
                  className="w-full rounded-md border p-2"
                  value={confirmationTime}
                  onChange={(e) => setConfirmationTime(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="message" className="block text-sm">
                  Message (facultatif)
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-md border p-2"
                  value={confirmationMessage}
                  onChange={(e) => setConfirmationMessage(e.target.value)}
                />
              </div>

              <button
                className="mt-2 rounded-md bg-green-500 px-4 py-2 text-white"
                onClick={() => handleConfirmRequest(request.id)}
              >
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                Confirmer la demande
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Consultations;
