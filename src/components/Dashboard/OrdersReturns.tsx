"use client";
import React from "react";
import {
  faStar,
  faStarHalfAlt,
  faUser,
  faComment,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mockReviews = [
  {
    id: 1,
    customerName: "Alice Dupont",
    rating: 4.5,
    comment:
      "Très satisfait du service ! Livraison rapide et produits en bon état.",
    date: "04/01/2025",
  },
  {
    id: 2,
    customerName: "Marc Lemaitre",
    rating: 3,
    comment:
      "La commande a pris un peu de temps à arriver, mais le produit était conforme.",
    date: "03/01/2025",
  },
  {
    id: 3,
    customerName: "Sophie Martin",
    rating: 5,
    comment: "Excellent service ! Le personnel est très accueillant.",
    date: "02/01/2025",
  },
];

const CustomerReviews: React.FC = () => {
  // Fonction pour afficher les étoiles
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="text-yellow-500"
        />,
      );
    }
    if (halfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalfAlt}
          className="text-yellow-500"
        />,
      );
    }
    return stars;
  };

  return (
    <div className="mt-6 grid grid-cols-12 gap-4">
      {mockReviews.map((review) => (
        <div
          key={review.id}
          className="col-span-12 flex flex-col rounded-lg bg-white p-6 shadow-md sm:col-span-6 lg:col-span-4"
        >
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-3 text-xl text-blue-500"
            />
            <h3 className="text-lg font-semibold">{review.customerName}</h3>
          </div>
          <div className="mb-2 flex items-center">
            <span className="mr-2 text-yellow-500">
              {renderStars(review.rating)}
            </span>
            <span className="text-sm text-gray-600">({review.rating}/5)</span>
          </div>
          <div className="mb-4">
            <FontAwesomeIcon
              icon={faComment}
              className="mr-2 text-lg text-green-500"
            />
            <p className="text-gray-700">{review.comment}</p>
          </div>
          <div className="text-sm text-gray-500">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="mr-2 text-gray-400"
            />
            <span>{review.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;
