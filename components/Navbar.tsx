"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const routes = [
  {
    path: "/",
    label: "Inicio",
  },
  {
    path: "/doctores",
    label: "Doctores",
  },
  {
    path: "/especialidades",
    label: "Especialidades",
  },
  {
    path: "/agendar",
    label: "Agendar atención",
  },
  {
    path: "/contacto",
    label: "Contacto",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
            width="200"
            height="80"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Viluan
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            {routes.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`text-sm block py-2 pl-3 pr-4 hover:text-blue-800 ${
                    (path === "/" && path === pathname) ||
                    (path !== "/" && pathname.includes(path))
                      ? "text-blue-800"
                      : "text-gray-800"
                  }`}
                  aria-current="page"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
