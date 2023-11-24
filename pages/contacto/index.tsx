import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { PropsWithChildren } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

const Title = ({ children }: PropsWithChildren) => {
  return (
    <div className="font-semibold text-blue-800 uppercase text-center mb-5">
      {children}
    </div>
  );
};

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/centroviluan",
    icon: <FaInstagram />,
  },
  // {
  //   name: "Whatsapp",
  //   url: "https://wa.me/56994444444",
  //   icon: <FaWhatsapp />,
  // },
  // {
  //   name: "Facebook",
  //   url: "https://www.facebook.com/clinicaviluan/",
  //   icon: <FaFacebook />,
  // },
];

export default function ContactPage() {
  return (
    <>
      <PageHero bgClass="bg-contact-hero" />
      <div className="section">
        <Header title="Contáctanos" uppertitle="" align="center" />
        <div className="grid grid-cols-1 gap-[5rem] mx-auto">
          <div>
            <Title>Contacto directo</Title>
            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              {/* <Button
                mode="outline"
                block
                icon={<FaPhoneAlt />}
                label={"+569 9456252"}
                action={`tel:+5699456252`}
              /> */}
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
                  <li title={name} key={name}>
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
            <p className="text-xl font-medium text-center mb-8">
              Baquedano 50 (Edificio singular) of. 514, Antofagasta
            </p>
            <div className="flex justify-center">
              <Map />
            </div>
          </div>
          <div>
            <Title>escríbenos</Title>
            <div className="mx-auto max-w-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Map = () => {
  return (
    <>
      <iframe
        className="block md:hidden border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8490105121095!2d-70.40359052369557!3d-23.645577764693513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd53dfb229183%3A0xfdf0d76ae0898bf1!2sEdumedica!5e0!3m2!1ses!2scl!4v1700790479651!5m2!1ses!2scl"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen={true}
      ></iframe>

      <iframe
        className="hidden md:block border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8490105121095!2d-70.40359052369557!3d-23.645577764693513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd53dfb229183%3A0xfdf0d76ae0898bf1!2sEdumedica!5e0!3m2!1ses!2scl!4v1700790760452!5m2!1ses!2scl"
        width="800"
        height="600"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};
