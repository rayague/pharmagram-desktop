"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faWindowRestore,
  faGlobe,
  faClipboard,
  faMedkit,
  faUserPlus,
  faClipboardCheck,
  faFileInvoice,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU PRINCIPAL",
    menuItems: [
      {
        icon: <FontAwesomeIcon icon={faWindowRestore} />,
        label: "Tableau de bord",
        route: "#",
        children: [{ label: "Acceuil", route: "/dashboardAgents" }],
      },
      {
        icon: <FontAwesomeIcon icon={faMedkit} />,
        label: "Gestion des Produits",
        route: "#",
        children: [
          { label: "Ajouter un Produit", route: "/products/add" },
          { label: "Modifier un Produit", route: "/products/edit" },
          { label: "Produits Retirés", route: "/products/removed" },
          { label: "Historique des Produits", route: "/products/history" },
        ],
      },
      {
        icon: <FontAwesomeIcon icon={faClipboard} />,
        label: "Commandes",
        route: "#",
        children: [
          { label: "Commandes en Cours", route: "/orders/current" },
          { label: "Historique des Commandes", route: "/orders/history" },
          { label: "Gestion des Retours", route: "/orders/returns" },
        ],
      },
      {
        icon: <FontAwesomeIcon icon={faFile} />,
        label: "Clients",
        route: "/clients",
      },
      {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        label: "Consultations Médicales",
        route: "/consultations",
      },
      {
        icon: <FontAwesomeIcon icon={faFile} />, // Remplacez par une icône appropriée pour les rapports
        label: "Rapports",
        route: "/reports",
      },
      {
        icon: <FontAwesomeIcon icon={faFile} />, // Remplacez par une icône appropriée pour l'assistance
        label: "Assistance",
        route: "/support",
      },
      {
        icon: <FontAwesomeIcon icon={faUserPlus} />,
        label: "Gestion Utilisateurs",
        route: "#",
        children: [
          { label: "Créer un Utilisateur", route: "/users/create" },
          { label: "Gérer les Utilisateurs", route: "/users/manage" },
        ],
      },
      {
        icon: <FontAwesomeIcon icon={faClipboardCheck} />,
        label: "Validation des Produits",
        route: "#",
        children: [
          { label: "Valider les Produits", route: "/products/validate" },
          { label: "Payer et Imprimer Factures", route: "/invoices" },
        ],
      },
      {
        icon: <FontAwesomeIcon icon={faChartBar} />,
        label: "Statistiques",
        route: "/statistics",
      },
      {
        icon: <FontAwesomeIcon icon={faWindowRestore} />, // Remplacez par une icône appropriée pour les paramètres
        label: "Paramètres",
        route: "/settings",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/dashboard">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              priority
              className="dark:hidden"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block text-green lg:hidden" // Changez ici pour le bouton
          >
            <svg
              className="fill-current text-green" // Ajoutez text-green ici aussi
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* SIDEBAR HEADER */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* Sidebar Menu */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-green dark:text-dark-6">
                  {" "}
                  {/* Changez ici */}
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* Sidebar Menu */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
