import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import React from "react";

export default function ContactPage() {
  return (
    <div className="section">
      <Header title="Conversemos" uppertitle="contacto" align="left" />
      <div>las redes sociales y numero telefonico</div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
