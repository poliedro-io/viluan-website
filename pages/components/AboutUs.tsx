import Button from "@/components/Button";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div id="us" className="section">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Header
            title="Bienvenido a Viluan"
            uppertitle="sobre nosotros"
            align="left"
          />
          <p className="mb-8">
            Somos una clínica médica y odontológica ubicada en Antofagasta.
            Nuestro enfoque es la salud integral de nuestros pacientes. Contamos
            con un equipo de profesionales altamente capacitados y con amplia
            experiencia en medicina general y odontología.
          </p>
          <div className="grid grid-rows-3 gap-4">
            <Button label={"Agendar atención"} action="/agendar" />
            <Button
              color="secondary"
              label={"Ver doctores"}
              action="/doctores"
            />
            <Button
              color="secondary"
              label={"Ver servicios"}
              action="/especialidades"
            />
          </div>
        </div>

        <Image
          className="h-[500px] w-auto mx-auto md:ml-auto rounded-md"
          src="/about-us.webp"
          width={500}
          height={500}
          alt="Nuestra clínica"
        />
      </div>
    </div>
  );
}
