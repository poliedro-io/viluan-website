import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="section">
      <div className="max-w-lg mx-auto">
        <Header title="Conversemos" uppertitle="contacto" align="left" />
        <p className="mb-8">
          Escribenos a nuestro correo o llamanos a nuestro numero de teléfono
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
