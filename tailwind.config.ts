import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/hero.webp')",
        "doctors-hero": "url('/img/doctores.jpg')",
        "services-hero": "url('/img/servicios.jpg')",
        "specialties-hero": "url('/img/especialidades.jpg')",
        "contact-hero": "url('/img/contacto.jpg')",
        "appointment-hero": "url('/img/agendamiento.jpg')",
        // "doctors-hero": "url('/img/doctors-hero.webp')",
        // "services-hero": "url('/img/services-hero.webp')",
        // "specialties-hero": "url('/img/specialties-hero.jpg')",
        // "contact-hero": "url('/img/contact-hero.jpg')",
        // "appointment-hero": "url('/img/appointment-hero.jpg')",
      },
      colors: {
        primary: {
          50: "#efe7f2",
          100: "#d6c4dd",
          200: "#bb9dc7",
          300: "#9f76b1",
          400: "#8b58a0",
          500: "#763b8f",
          600: "#6e3587",
          700: "#632d7c",
          800: "#592672",
          900: "#461960",
        },
        cyan: {
          50: "#eff7f8",
          100: "#d7ebec",
          200: "#bcdde0",
          300: "#a1cfd4",
          400: "#8cc5ca",
          500: "#78bbc1",
          600: "#70b5bb",
          700: "#65acb3",
          800: "#5ba4ab",
          900: "#48969e",
        },
        blue: {
          50: "#e4f3f2",
          100: "#bde1dd",
          200: "#91cec7",
          300: "#64bab1",
          400: "#43aba0",
          500: "#229c8f",
          600: "#1e9487",
          700: "#198a7c",
          800: "#148072",
          900: "#0c6e60",
        },
      },
    },
  },
  plugins: [],
};
export default config;
