"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

export default function Page() {
  const register = () =>
    toast.info(
      "Cette partie n'a pas encore été mise en place, Veuillez choisir le volet connexion en bas !",
    );
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-700">
      <div className="mx-auto flex w-full flex-col justify-center px-5 ">
        <div className="mx-auto my-10 flex w-full flex-col rounded-lg bg-white/30 p-5 sm:w-3/4 md:w-1/2 lg:w-1/3">
          <p className=" text-3xl font-bold tracking-tighter text-white">
            Inscription
          </p>
          <div className="relative my-4">
            <div className="relative flex items-center py-1">
              <div className="grow border-t border-white"></div>
            </div>
          </div>
          <div>
            <form className="mb-4 text-white ">
              <div className="flex flex-col">
                <div className="flex w-full flex-col">
                  {/* Nom */}
                  <label className="text-white" htmlFor="nom">
                    Nom
                  </label>
                  <input
                    className="mb-3 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0"
                    id="nom"
                    placeholder="Nom de la pharmacie"
                    type="text"
                    name="nom"
                  />

                  {/* Adresse */}
                  <label className="text-white" htmlFor="adresse">
                    Adresse
                  </label>
                  <input
                    className="mb-3 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0"
                    id="adresse"
                    placeholder="Adresse de la pharmacie"
                    type="text"
                    name="adresse"
                  />

                  {/* Email */}
                  <label className="text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="mb-3 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0"
                    id="email"
                    placeholder="email@pharmacie.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    name="email"
                  />

                  {/* Preuve de certification */}
                  <label
                    className="text-white"
                    htmlFor="preuve_de_certification"
                  >
                    Preuve de certification
                  </label>
                  <input
                    className="mb-3 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0"
                    id="preuve_de_certification"
                    placeholder="Téléchargez le document"
                    type="file"
                    name="preuve_de_certification"
                  />

                  {/* Téléphone */}
                  <label className="text-white" htmlFor="telephone">
                    Téléphone
                  </label>
                  <input
                    className="mb-3 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0"
                    id="telephone"
                    placeholder="Numéro de téléphone"
                    type="tel"
                    name="telephone"
                  />

                  {/* Mot de passe */}
                  <label className="text-white" htmlFor="password">
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    placeholder="Mot de passe"
                    type="password"
                    autoComplete="current-password"
                    className="mb-3 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0"
                    name="password"
                  />
                </div>

                {/* Bouton d'inscription */}
                <button
                  className="ring-offset-background focus-visible:ring-ring text-primary-foreground mt-4 w-full items-center justify-center whitespace-nowrap rounded-lg bg-green-600 px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="button"
                  onClick={register}
                >
                  Inscription
                </button>
              </div>
            </form>

            <p>
              <Link
                href="/authentication/login"
                className="text-sm font-medium text-white underline"
              >
                J&apos;ai déjà un compte ? Me connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
