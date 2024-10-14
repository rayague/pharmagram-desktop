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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-sans bg-gradient-to-br from-green-400 to-blue-700 h-screen">
      <main className="flex flex-col w-full items-center">
        <div className="flex gap-2 items-center flex-col w-full sm:w-3/4 md:w-1/2">
          <Link
            className="rounded-lg border border-solid border-green-600 text-white transition-colors flex items-center justify-center bg-green-500 text-sm py-3 px-8 w-full"
            href="/authentication/register"
          >
            S&apos;inscrire
          </Link>
          <Link
            className="rounded-lg border border-solid border-green-600 text-white transition-colors flex items-center justify-center bg-green-500 text-sm py-3 px-5 w-full"
            href="/authentication/login"
          >
            Se connecter
          </Link>
        </div>
      </main>
      <footer className="flex gap-3 absolute bottom-2 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white text-sm"
          href="https://rayague.github.io/pharmagram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFile} className="h-4" aria-hidden />
          Politique de confidentialité
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white text-sm"
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white text-sm"
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
