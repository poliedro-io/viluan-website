import Link from "next/link";

interface LinkButtonProps {
  text?: string;
  link: string;
}

export const LinkButton = ({ text = "Saber más", link }: LinkButtonProps) => {
  return (
    <Link href={link}>
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-primary-600 transition-all hover:bg-primary-600/10 active:bg-primary-600/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </Link>
  );
};
