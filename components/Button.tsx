import Link from "next/link";

interface ButtonProps {
  label: string;
  action: (() => void) | string;
  icon?: JSX.Element;
  color?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  block?: boolean;
  mode?: "outline" | "solid";
}

const colors = {
  "primary-solid":
    "text-white bg-primary-700 hover:bg-primary-900 focus:ring-primary-300",
  "primary-outline":
    "text-primary-900 hover:text-white border border-primary-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300",
  "secondary-solid":
    "text-white bg-blue-700 hover:bg-blue-900 focus:ring-blue-300",
  "secondary-outline":
    "text-blue-900 hover:text-white border border-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300",
};
export default function Button({
  label,
  type,
  action,
  color = "primary",
  isDisabled = false,
  block = false,
  mode = "solid",
  icon,
}: ButtonProps) {
  const isLink = typeof action === "string";
  const colorClass = colors[[color, mode].join("-") as keyof typeof colors];
  const className = `flex gap-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-6 py-3.5 text-center inline-flex justify-center items-center ${colorClass} ${
    block ? "w-full" : ""
  } ${
    isDisabled ? "opacity-50 cursor-not-allowed" : ""
  } transition-all duration-100`;

  return isLink ? (
    <Link
      aria-disabled={isDisabled}
      href={action as string}
      type="button"
      className={className}
    >
      {icon && icon} {label}
    </Link>
  ) : (
    <button
      disabled={isDisabled}
      type={type}
      onClick={action}
      className={className}
    >
      {icon && icon} {label}
    </button>
  );
}
