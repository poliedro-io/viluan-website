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
    </Link>
  );
}
