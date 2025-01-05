"use client";
import React from "react";
import {
  faClock,
  faCheckCircle,
  faTruck,
  faDollarSign,
  faShoppingCart,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mockOrders = [
  {
    id: 1,
    customerName: "Alice Dupont",
    items: ["Paracétamol", "Vitamine C", "Bandages"],
    status: "En préparation",
    time: "Il y a 15 minutes",
    price: "45.00€",
    quantity: 3,
    paid: false,
  },
  {
    id: 2,
    customerName: "Marc Lemaitre",
    items: ["Ibuprofène", "Antibiotique"],
    status: "Prêt à être récupéré",
    time: "Il y a 30 minutes",
    price: "25.00€",
    quantity: 2,
    paid: true,
  },
  {
    id: 3,
    customerName: "Sophie Martin",
    items: ["Sirop contre la toux", "Thermomètre"],
    status: "En cours de livraison",
    time: "Il y a 45 minutes",
    price: "60.00€",
    quantity: 2,
    paid: true,
  },
];

const OrdersCurrent: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-12 gap-4">
      {mockOrders.map((order) => (
        <div
          key={order.id}
          className="col-span-12 flex flex-col items-start rounded-lg bg-white p-6 shadow-md sm:col-span-6 lg:col-span-4"
        >
          <h3 className="mb-4 text-xl font-semibold">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="mr-2 text-blue-500"
            />
            Commande #{order.id}
          </h3>
          <div className="mb-2 text-gray-700">
            <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-500" />
            <span>{order.time}</span>
          </div>
          <div className="mb-2 text-gray-700">
            <span className="font-semibold">Client : </span>
            {order.customerName}
          </div>
          <div className="mb-2 text-gray-700">
            <span className="font-semibold">Articles : </span>
            {order.items.join(", ")}
          </div>
          <div className="mb-2 text-gray-700">
            <span className="font-semibold">Prix : </span>
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-green-500"
            />{" "}
            {order.price}
          </div>
          <div className="mb-2 text-gray-700">
            <span className="font-semibold">Quantité : </span>
            {order.quantity}
          </div>
          <div className="mb-2 text-gray-700">
            <span className="font-semibold">Statut : </span>
            <span
              className={`font-semibold ${
                order.status === "En cours de livraison"
                  ? "text-green-500"
                  : order.status === "Prêt à être récupéré"
                    ? "text-blue-500"
                    : "text-yellow-500"
              }`}
            >
              {order.status}
            </span>
          </div>
          <div className="mb-2 text-gray-700">
            <span className="font-semibold">Paiement : </span>
            {order.paid ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500"
              />
            ) : (
              <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersCurrent;
