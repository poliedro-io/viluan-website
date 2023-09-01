import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  href: string;
  icon?: string;
  color?: "blue";
}

const colors = {
  blue: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300",
};
export default function Button({ label, href, color = "blue" }: ButtonProps) {
  const colorClass = colors[color];
  return (
    <Link
      href={href}
      type="button"
      className={`text-white  focus:ring-4 focus:outline-none  font-medium rounded-md text-sm px-6 py-3.5 text-center inline-flex justify-center items-center ${colorClass}`}
    >
      {label}
      {/* <svg
        className="w-3.5 h-3.5 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg> */}
    </Link>
  );
}
