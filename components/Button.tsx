import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  action: (() => void) | string;
  icon?: string;
  color?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  block?: boolean;
  mode: "outline" | "solid";
}

const colors = {
  primary: "bg-primary-700 hover:bg-primary-800 focus:ring-primary-300",
  secondary: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300",
  blueDisabled: "bg-blue-400",
};
export default function Button({
  label,
  type,
  action,
  color = "primary",
  isDisabled = false,
  block = false,
  mode = "solid",
}: ButtonProps) {
  const isLink = typeof action === "string";
  const colorClass =
    colors[(color + (isDisabled ? "Disabled" : "")) as keyof typeof colors];
  const className = `text-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-6 py-3.5 text-center inline-flex justify-center items-center ${colorClass} ${
    block ? "w-full" : ""
  }`;
  return isLink ? (
    <Link href={action as string} type="button" className={className}>
      {label}
    </Link>
  ) : (
    <button
      disabled={isDisabled}
      type={type}
      onClick={action}
      className={className}
    >
      {label}
    </button>
  );
}
