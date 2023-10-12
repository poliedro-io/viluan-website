import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { PropsWithChildren } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Title = ({ children }: PropsWithChildren) => {
  return (
    <div className="font-semibold text-blue-800 uppercase text-center mb-5">
      {children}
    </div>
  );
};

const socials = [
  {
    name: "Whatsapp",
    url: "https://wa.me/56994444444",
    icon: <FaWhatsapp />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/clinicaviluan/",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/clinicaviluan/",
    icon: <FaInstagram />,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero bgClass="bg-contact-hero" />
      <div className="section">
        <Header title="Contáctanos" uppertitle="" align="center" />
        <div className="grid grid-cols-1 gap-[5rem] max-w-xl mx-auto">
          <div>
            <Title>Contacto directo</Title>
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                mode="outline"
                block
                icon={<FaPhoneAlt />}
                label={"+569 9456252"}
                action={`tel:+5699456252`}
              />
              <Button
                mode="outline"
                block
                icon={<FaEnvelope />}
                label={"contacto@viluan.cl"}
                action={"mailto:contacto@viluan.cl"}
              />
            </div>
          </div>
          <div>
            <Title>Nuestras redes sociales</Title>
            <div>
              <ul className="flex justify-center gap-10 mt-10">
                {socials.map(({ name, url, icon }) => (
                  <li key={name}>
                    <a target="_blank" href={url}>
                      <div className="text-5xl text-primary-800">{icon}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <Title>Nuestra ubicación</Title>
            <p className="text-center mb-4">
              Avenida El Sauce #404, Antofagasta
            </p>
            <div className="flex justify-center">
              <Map />
            </div>
          </div>
          <div>
            <Title>escríbenos</Title>
            <div className="mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Map = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17734.81117903822!2d-70.39933410628572!3d-23.60941546024253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a58a1999656469%3A0x9fbe15f44d1e6f96!2sAntofagasta!5e0!3m2!1ses!2scl!4v1694050994087!5m2!1ses!2scl"
    width="600"
    height="450"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0 rounded-md"
  ></iframe>
);
