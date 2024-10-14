"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFile,
  faWindowRestore,
  faGlobe,
  faClipboard,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function page() {
  const notify = () =>
    toast.info(
      "Cette partie n'a pas encore été mise en place, Veuillez prendre patience !"
    );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-400 to-blue-700">
      <div className="mx-auto flex w-full flex-col justify-center px-5 ">
        <div className="my-auto mb-auto mt-8 flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto bg-slate-400 p-5 rounded-lg">
          <p className=" font-bold text-white text-3xl tracking-tighter">
            Connexion
          </p>
          <div className="relative my-4">
            <div className="relative flex items-center py-1">
              <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
            </div>
          </div>
          <div>
            <form noValidate className="mb-4 text-white">
              <div className="flex flex-col">
                <div className="flex flex-col w-full">
                  <label className="text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="rounded-lg border mb-4 border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0"
                    id="email"
                    placeholder="email@pharmacie.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    name="email"
                  />
                  <label className="" htmlFor="password">
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    placeholder="Mot de passe"
                    type="password"
                    autoComplete="current-password"
                    className=" rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 "
                    name="password"
                  />
                </div>
                <button
                  className="whitespace-nowrap mt-4 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-primary-foreground hover:bg-primary/90 w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium"
                  type=""
                  onClick={notify}
                >
                  Se connecter
                </button>
              </div>
            </form>
            <p>
              <Link
                href=""
                className="font-medium text-white text-sm underline"
                onClick={notify}
              >
                Mot de passe oublié?
              </Link>
            </p>
            <p>
              <Link
                href="/authentication/register"
                className="font-medium text-white text-sm underline"
              >
                Pas de compte ? S&apos;inscrire
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
