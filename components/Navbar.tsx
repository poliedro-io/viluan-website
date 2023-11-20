"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { routes } from "./routes";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-lg">
      <div className="w-full md:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src="/logo-chico.png"
            className="h-12 w-auto"
            width="120"
            height="60"
            alt="Logo Viluan"
          />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="#222"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {routes.map(({ path, label }) => (
              <li key={path}>
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  href={path}
                  className={`text-center text-sm block py-2 pl-3 pr-4 hover:text-blue-800 ${
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
