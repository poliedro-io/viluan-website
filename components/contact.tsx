import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export const contact: {
  icon: JSX.Element;
  label: string;
  href: string;
}[] = [
  {
    label: "contacto@viluan.cl",
    href: "mailto:contacto@viluan.cl",
    icon: <FaEnvelope />
  },
  {
    label: "whatsapp",
    href: "https://wa.me/56983767116",
    icon: <FaWhatsapp />
  },
  {
    label: "+56983767116",
    href: "tel:+56983767116",
    icon: <FaPhone />
  },
];
