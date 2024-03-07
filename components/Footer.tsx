import Image from "next/image";
import React from "react";
import { routes } from "./routes";
import Link from "next/link";
import { contact } from "./contact";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-2 py-6 md:pt-20">
        <div className="grid md:grid-cols-2 gap-10">
          <Link href="/" className="flex justify-center py-10 md:py-0">
            <Image
              src="/logo.png"
              alt="Logo Viluan Logo"
              width="500"
              height="267"
            />
          </Link>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-6 px-4">
            <div>
              <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Mapa del sitio
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {routes.map((route) => (
                  <li key={route.label} className="mb-4 hover:text-white">
                    <Link href={route.path}>{route.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Contacto
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {contact.map((item) => (
                  <li key={item.label} className="mb-4 flex gap-2 items-center hover:text-white">
                    {item.icon}
                    <Link target="_blank" href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-end">
          <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
            Desarrollado por{" "}
            <Link href="https://www.poliedro.io" className="hover:underline">
              Poliedro
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
