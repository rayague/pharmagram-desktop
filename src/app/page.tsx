// import ECommerce from "@/components/Dashboard/E-commerce";
// import { Metadata } from "next";
// import DefaultLayout from "@/components/Layouts/DefaultLaout";
// import React from "react";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
//   description: "This is Next.js Home page for NextAdmin Dashboard Kit",
// };

// export default function Home() {
//   return (
//     <>
//       <DefaultLayout>
//         <ECommerce />
//       </DefaultLayout>
//     </>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faWindowRestore,
  faGlobe,
  faClipboard,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="font-sans flex min-h-screen w-full flex-col items-center  justify-center justify-items-center bg-gradient-to-br from-green-400 to-blue-700 p-8">
      <main className=" flex w-full flex-col items-center">
        <div className="flex flex-row items-center justify-center text-center  ">
          <FontAwesomeIcon
            icon={faMedkit} // Trousse de premiers secours
            className="mx-2 size-5 text-white sm:size-8 md:size-12 lg:size-16"
          />
          <h1 className="mx-2 text-3xl font-black tracking-tighter text-green-500 sm:text-3xl md:text-5xl lg:text-6xl">
            <span className="text-white">Pharma</span>gram
          </h1>
        </div>
        <h3 className="mb-3 text-center text-sm font-light tracking-tight text-white sm:text-sm md:text-xl">
          Bienvenue sur Pharmagram - Votre partenaire digital pour une gestion
          optimale des produits pharmaceutiques.
        </h3>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            className="hover:ring-offset-3 flex h-10 items-center justify-center rounded-lg border border-solid border-green-600 bg-green-500 px-4 text-sm text-white transition-colors hover:ring-2 hover:ring-green-600 sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            href="/authentication"
          >
            Continuer
          </Link>
        </div>
      </main>
      <footer className="absolute bottom-2 mx-auto flex flex-wrap items-center justify-center justify-items-center gap-3">
        <Link
          className="flex items-center gap-2 text-sm text-white hover:underline hover:underline-offset-4"
          href="https://rayague.github.io/pharmagram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFile} className="h-4" aria-hidden />
          Politique de confidentialité
        </Link>
        <Link
          className="flex items-center gap-2 text-sm text-white hover:underline hover:underline-offset-4"
          href="https://rayague.github.io/pharmagram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faWindowRestore}
            size="lg"
            className="h-4"
            aria-hidden
          />
          Conditions
        </Link>
        <Link
          className="flex items-center gap-2 text-sm text-white hover:underline hover:underline-offset-4"
          href="https://rayague.github.io/pharmagram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @pharmagam 2024
        </Link>
      </footer>
    </div>
  );
}
