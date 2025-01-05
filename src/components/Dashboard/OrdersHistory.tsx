"use client";
import React from "react";
import {
  faShoppingCart,
  faCheckCircle,
  faTimesCircle,
  faClock,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mockOrdersHistory = [
  {
    id: 1,
    customerName: "Alice Dupont",
    items: ["Paracétamol", "Vitamine C", "Bandages"],
    date: "03/01/2025",
    time: "15:30",
    price: "45.00€",
    quantity: 3,
    paid: true,
  },
  {
    id: 2,
    customerName: "Marc Lemaitre",
    items: ["Ibuprofène", "Antibiotique"],
    date: "02/01/2025",
    time: "12:45",
    price: "25.00€",
    quantity: 2,
    paid: false,
  },
  {
    id: 3,
    customerName: "Sophie Martin",
    items: ["Sirop contre la toux", "Thermomètre"],
    date: "01/01/2025",
    time: "09:15",
    price: "60.00€",
    quantity: 2,
    paid: true,
  },
];

const OrdersHistory: React.FC = () => {
  return (
    <div className="mt-6 grid grid-cols-12 gap-4">
      {mockOrdersHistory.map((order) => (
        <div
          key={order.id}
          className="col-span-12 flex flex-col rounded-lg bg-white p-6 shadow-md sm:col-span-6 lg:col-span-4"
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
            <span>
              {order.date} à {order.time}
            </span>
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

export default OrdersHistory;
