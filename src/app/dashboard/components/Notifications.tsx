import React from "react";

// Exemple de notifications simulées
const notifications = [
  {
    id: 1,
    icon: "fa-box",
    title: "Stock Faible",
    message: "Le stock de Paracétamol 500mg est inférieur à 10 unités.",
    type: "warning",
  },
  {
    id: 2,
    icon: "fa-exclamation-circle",
    title: "Produit Expiré",
    message:
      "3 produits ont expiré aujourd'hui. Vérifiez les lots 12345 et 67890.",
    type: "danger",
  },
  {
    id: 3,
    icon: "fa-chart-line",
    title: "Chiffre d'Affaires",
    message:
      "Le chiffre d’affaires de la journée est de 10 000€. Une hausse de 5% par rapport à hier.",
    type: "success",
  },
  {
    id: 4,
    icon: "fa-user-check",
    title: "Présence Employés",
    message:
      "L’employé Sarah Dupont a traité 50 commandes aujourd’hui, un record !",
    type: "info",
  },
];

function Notifications() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Notifications</h1>
      <div className="grid gap-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-center rounded-md p-4 shadow-md ${
              notification.type === "danger"
                ? "border-l-4 border-red-500 bg-red-100"
                : notification.type === "warning"
                  ? "border-l-4 border-yellow-500 bg-yellow-100"
                  : notification.type === "success"
                    ? "border-l-4 border-green-500 bg-green-100"
                    : "border-l-4 border-blue-500 bg-blue-100"
            }`}
          >
            <i
              className={`fas ${notification.icon} text-xl ${
                notification.type === "danger"
                  ? "text-red-500"
                  : notification.type === "warning"
                    ? "text-yellow-500"
                    : notification.type === "success"
                      ? "text-green-500"
                      : "text-blue-500"
              }`}
            ></i>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{notification.title}</h2>
              <p>{notification.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
