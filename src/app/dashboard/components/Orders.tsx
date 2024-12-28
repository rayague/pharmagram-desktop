import React, { useState } from "react";

// Définir un type pour les commandes
interface Order {
  id: number;
  orderNumber: number;
  date: string;
  time: string;
  clientName: string;
  agentName: string;
  isValidated: boolean;
  orderType: "Client" | "Agent"; // Type de commande (Client ou Agent)
}

// Exemple de données de commandes
const ordersData: Order[] = [
  {
    id: 1,
    orderNumber: 10,
    date: "2024-12-28",
    time: "10:00",
    clientName: "John Doe",
    agentName: "Agent 1",
    isValidated: true,
    orderType: "Client",
  },
  {
    id: 2,
    orderNumber: 5,
    date: "2024-12-27",
    time: "14:30",
    clientName: "Jane Smith",
    agentName: "Agent 2",
    isValidated: false,
    orderType: "Agent",
  },
  {
    id: 3,
    orderNumber: 20,
    date: "2024-12-26",
    time: "09:15",
    clientName: "Marie Claire",
    agentName: "Agent 3",
    isValidated: true,
    orderType: "Client",
  },
];

function Orders() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOrderSelect = (order: Order) => {
    setSelectedOrder(order);
  };

  const closePopup = () => {
    setSelectedOrder(null);
  };

  // Trier les commandes par date (de la plus récente à la plus ancienne)
  const sortedOrders = [...ordersData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div>
      <h1>Liste des Commandes</h1>

      {/* Tableau des commandes */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Numéro de commande</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Client/Agent</th>
            <th>Validée</th>
            <th>Type de commande</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.map((order) => (
            <tr key={order.id} style={{ borderBottom: "1px solid #ccc" }}>
              <td>{order.orderNumber}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
              <td>
                {order.orderType === "Client"
                  ? order.clientName
                  : order.agentName}
              </td>
              <td>{order.isValidated ? "Oui" : "Non"}</td>
              <td>{order.orderType}</td>
              <td>
                <button
                  onClick={() => handleOrderSelect(order)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Voir détails
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Détails de la commande sélectionnée */}
      {selectedOrder && (
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
              width: "400px",
              textAlign: "center",
            }}
          >
            <h2>Détails de la Commande</h2>
            <p>
              <strong>Numéro de commande:</strong> {selectedOrder.orderNumber}
            </p>
            <p>
              <strong>Date:</strong> {selectedOrder.date}
            </p>
            <p>
              <strong>Heure:</strong> {selectedOrder.time}
            </p>
            <p>
              <strong>Nom du client/agent:</strong>{" "}
              {selectedOrder.orderType === "Client"
                ? selectedOrder.clientName
                : selectedOrder.agentName}
            </p>
            <p>
              <strong>Commandé validée:</strong>{" "}
              {selectedOrder.isValidated ? "Oui" : "Non"}
            </p>
            <p>
              <strong>Type de commande:</strong> {selectedOrder.orderType}
            </p>
            <button
              onClick={closePopup}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
