import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="section">
      <div className="max-w-lg mx-auto">
        <Header
          title="Escríbenos un mensaje"
          uppertitle="contáctanos"
          align="center"
        />
        <p className="mb-8 text-center">
          Estaremos encantados de responder a todas tus dudas y consultas.
        </p>

        <ContactForm />

        <div className="mt-20">
          <p className="text-center">
            O contáctanos por teléfono o a través de nuestras redes sociales:
          </p>
          <div className="mt-4">
            <Button
              color="secondary"
              block
              label="Ver contacto"
              action="/contacto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
