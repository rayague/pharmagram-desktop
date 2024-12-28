"use client";
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  expirationDate: string;
  addedDate: string;
  addedBy: string;
  pharmaceuticalClass: string;
  status: "actif" | "inactif";
  referenceNumber: string;
  laboratory: string;
  dosage: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = [
        {
          id: 1,
          name: "Paracétamol",
          description: "Un médicament pour la douleur.",
          imageUrl: "/images/paracetamol.jpg",
          expirationDate: "2025-12-31",
          addedDate: "2023-01-15",
          addedBy: "Admin",
          pharmaceuticalClass: "Analgésique",
          status: "actif",
          referenceNumber: "P12345",
          laboratory: "Laboratoire X",
          dosage: "500 mg",
        },
        {
          id: 2,
          name: "Ibuprofène",
          description: "Un anti-inflammatoire courant.",
          imageUrl: "/images/ibuprofen.jpg",
          expirationDate: "2026-05-10",
          addedDate: "2022-09-20",
          addedBy: "Admin",
          pharmaceuticalClass: "Anti-inflammatoire",
          status: "actif",
          referenceNumber: "I12345",
          laboratory: "Laboratoire Y",
          dosage: "200 mg",
        },
        {
          id: 3,
          name: "Vitamine C",
          description:
            "Un complément vitaminé pour renforcer le système immunitaire.",
          imageUrl: "/images/vitamin_c.jpg",
          expirationDate: "2024-10-20",
          addedDate: "2023-08-11",
          addedBy: "User123",
          pharmaceuticalClass: "Complément alimentaire",
          status: "actif",
          referenceNumber: "V12345",
          laboratory: "Laboratoire Z",
          dosage: "1000 mg",
        },
        {
          id: 4,
          name: "Sirop contre la toux",
          description: "Soulage la toux sèche et les irritations de la gorge.",
          imageUrl: "/images/cough_syrup.jpg",
          expirationDate: "2024-11-15",
          addedDate: "2023-06-10",
          addedBy: "Admin",
          pharmaceuticalClass: "Antitussif",
          status: "inactif",
          referenceNumber: "S12345",
          laboratory: "Laboratoire W",
          dosage: "5 ml",
        },
        {
          id: 5,
          name: "Aspirine",
          description: "Un anti-inflammatoire et analgésique efficace.",
          imageUrl: "/images/aspirin.jpg",
          expirationDate: "2027-03-15",
          addedDate: "2023-07-05",
          addedBy: "User456",
          pharmaceuticalClass: "Anti-inflammatoire non stéroïdien",
          status: "actif",
          referenceNumber: "A12345",
          laboratory: "Laboratoire A",
          dosage: "300 mg",
        },
        {
          id: 6,
          name: "Antibiotique Amoxicilline",
          description: "Traitement des infections bactériennes.",
          imageUrl: "/images/amoxicillin.jpg",
          expirationDate: "2026-09-01",
          addedDate: "2023-02-20",
          addedBy: "Admin",
          pharmaceuticalClass: "Antibiotique",
          status: "actif",
          referenceNumber: "AA12345",
          laboratory: "Laboratoire B",
          dosage: "500 mg",
        },
        {
          id: 7,
          name: "Médicament contre l'anxiété",
          description: "Aide à réduire les symptômes de l'anxiété.",
          imageUrl: "/images/anxiety_meds.jpg",
          expirationDate: "2025-08-30",
          addedDate: "2023-04-15",
          addedBy: "Admin",
          pharmaceuticalClass: "Anxiolytique",
          status: "actif",
          referenceNumber: "A45678",
          laboratory: "Laboratoire C",
          dosage: "10 mg",
        },
        {
          id: 8,
          name: "Crème hydratante",
          description: "Crème pour hydrater et nourrir la peau.",
          imageUrl: "/images/moisturizer.jpg",
          expirationDate: "2026-12-20",
          addedDate: "2023-05-10",
          addedBy: "User789",
          pharmaceuticalClass: "Cosmétique",
          status: "actif",
          referenceNumber: "C12345",
          laboratory: "Laboratoire D",
          dosage: "50 ml",
        },
      ];
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  const showDetails = (product: Product) => setSelectedProduct(product);

  const closePopup = () => setSelectedProduct(null);

  return (
    <div className="rounded-md bg-white p-6">
      <h1 className="mb-4  text-2xl font-bold">Liste des Produits</h1>

      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={searchQuery}
        onChange={handleSearch}
        className="mb-6 w-full rounded-md border border-gray-300 bg-gray-100 p-3"
        aria-label="Rechercher un produit"
      />

      <p className="mb-4">
        Nombre total de produits : <strong>{filteredProducts.length}</strong>
      </p>

      {filteredProducts.length === 0 ? (
        <p className="text-red-500">Aucun produit trouvé.</p>
      ) : (
        <ul className="list-none p-0">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="mb-4 flex items-center justify-between rounded-md border border-gray-300 bg-gray-100 p-4"
            >
              <span>{product.name}</span>
              <button
                onClick={() => showDetails(product)}
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Voir détails
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedProduct && (
        <div
          className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
          aria-hidden={!selectedProduct}
        >
          <div className="w-96 rounded-lg bg-white p-6 text-center">
            <h2 className="mb-4 text-xl font-bold">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="mb-4 h-auto w-full"
            />
            <p className="mb-4">{selectedProduct.description}</p>
            <p className="mb-2">
              <strong>Classe pharmaceutique:</strong>{" "}
              {selectedProduct.pharmaceuticalClass}
            </p>
            <p className="mb-2">
              <strong>Date d'expiration:</strong>{" "}
              {selectedProduct.expirationDate}
            </p>
            <p className="mb-2">
              <strong>Ajouté le:</strong> {selectedProduct.addedDate}
            </p>
            <p className="mb-2">
              <strong>Ajouté par:</strong> {selectedProduct.addedBy}
            </p>
            <p className="mb-2">
              <strong>Statut:</strong> {selectedProduct.status}
            </p>
            <p className="mb-2">
              <strong>Numéro de référence:</strong>{" "}
              {selectedProduct.referenceNumber}
            </p>
            <p className="mb-2">
              <strong>Laboratoire:</strong> {selectedProduct.laboratory}
            </p>
            <p className="mb-4">
              <strong>Posologie:</strong> {selectedProduct.dosage}
            </p>
            <button
              onClick={closePopup}
              className="rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
