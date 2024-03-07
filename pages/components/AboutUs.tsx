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
          <p className="mb-2">
          Somos un centro médico y odontológico ubicado en Antofagasta cuyo enfoque es la salud integral de nuestros pacientes.
Ofrecemos servicios de <b>odontología</b>, <b>armonización facial</b>, <b>medicina</b>, <b>ginecología</b>, <b>psicología</b> y <b>nutrición</b>.
          </p>
          <p className="mb-8">Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia.</p>

          <div className="grid grid-rows-3 gap-4">
            <Button
              mode="outline"
              label={"Agendar atención"}
              action="/agendar"
            />
            <Button
              mode="outline"
              color="secondary"
              label={"Ver doctores"}
              action="/doctores"
            />
            <Button
              mode="outline"
              color="secondary"
              label={"Ver servicios"}
              action="/especialidades"
            />
          </div>
        </div>

        <Image
          className="h-[500px] w-auto mx-auto md:ml-auto rounded-md"
          src="/img/nosotros.jpg"
          width={500}
          height={500}
          alt="Nuestra clínica"
        />
      </div>
    </div>
  );
}
