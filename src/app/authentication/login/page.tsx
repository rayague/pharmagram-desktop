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
      "Cette partie n'a pas encore été mise en place, Veuillez prendre patience !",
    );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-700">
      <div className="mx-auto flex w-full flex-col justify-center px-5 ">
        <div className="mx-auto my-auto mb-auto mt-8 flex w-full flex-col rounded-lg bg-white/30 p-5 sm:w-3/4 md:w-1/2 lg:w-1/3">
          <p className=" text-3xl font-bold tracking-tighter text-white">
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
                <div className="flex w-full flex-col">
                  <label className="text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="mb-4 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0"
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
                <Link
                  className="ring-offset-background focus-visible:ring-ring text-primary-foreground mt-4 w-full items-center justify-center whitespace-nowrap rounded-lg bg-green-600 px-4 py-3 text-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  // type=""
                  // onClick={notify}
                  href="/dashboard"
                >
                  Se connecter
                </Link>
              </div>
            </form>
            <p>
              <Link
                href=""
                className="text-sm font-medium text-white underline"
                onClick={notify}
              >
                Mot de passe oublié?
              </Link>
            </p>
            <p>
              <Link
                href="/authentication/register"
                className="text-sm font-medium text-white underline"
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
