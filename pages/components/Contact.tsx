import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="section">
      <div className="grid md:grid-cols-2">
        <Image
          className="hidden md:block h-[500px] w-auto mx-auto"
          src="/about-us.webp"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div>
          <Header title="Conversemos" uppertitle="contacto" align="left" />
          <p className="mb-8">
            Escribenos a nuestro correo o llamanos a nuestro numero de telefono
          </p>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
