import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title: "Pharmagram | Dashboard de gestion de pharmacie",
  description:
    "Pharmagram - Tableau de bord intuitif pour la gestion de votre pharmacie, facilitant la gestion des stocks, des ventes et des commandes.",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
