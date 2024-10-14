import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFile,
  faWindowRestore,
  faGlobe,
  faClipboard,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen p-8 font-sans bg-gradient-to-br from-green-400 to-blue-700 h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex flex-row items-center justify-center text-center  ">
          <FontAwesomeIcon
            icon={faMedkit} // Trousse de premiers secours
            className="text-white size-16 mx-2"
          />
          <h1 className="text-8xl tracking-tighter font-black text-green-500 mx-2">
            <span className="text-white">Pharma</span>gram
          </h1>
        </div>
        <h3 className="text-white font-light mb-3 text-2xl text-center tracking-tight">
          Bienvenue sur Pharmagram - Votre partenaire digital pour une gestion
          optimale des produits pharmaceutiques.
        </h3>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-lg border border-solid border-green-600 text-white hover:ring-2 hover:ring-green-600 hover:ring-offset-3 transition-colors flex items-center justify-center bg-green-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/authentication"
          >
            Continuer
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://rayague.github.io/pharmagram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFile} className="h-4" aria-hidden />
          Politique de confidentialité
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
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
