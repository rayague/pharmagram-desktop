import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFile,
  faWindowRestore,
  faGlobe,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <div className="font-sans flex h-screen min-h-screen flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-700 p-8">
      <main className="flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-center gap-2 sm:w-3/4 md:w-1/2">
          <Link
            className="text-md flex w-full items-center justify-center rounded-lg border border-solid border-green-600 bg-green-500 px-8 py-3 font-bold text-white transition-colors"
            href="/authentication/register"
          >
            S&apos;enrégistrer
          </Link>
          <Link
            className="text-md flex w-full items-center justify-center rounded-lg border border-solid border-green-600 bg-green-500 px-5 py-3 font-bold text-white transition-colors"
            href="/authentication/loginAgents"
          >
            Connexion agent
          </Link>
        </div>
      </main>
      <footer className="absolute bottom-2 flex flex-wrap items-center justify-center gap-3">
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
