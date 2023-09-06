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
            title="About Us"
            uppertitle="Sobre nuestra clinica"
            align="left"
          />
          <p className="mb-8">
            There arge many variations ohf pacgssages of sorem gpsum ilable, but
            the majority have suffered alteration in some form, by ected humour,
            or randomised words whi.
          </p>
          <div className="grid grid-rows-3 gap-4">
            <Button label={"Agendar atención"} action="/agendar" />
            <Button label={"Ver doctores"} action="/doctores" />
            <Button label={"Ver servicios"} action="/especialidades" />
          </div>
        </div>

        <Image
          className="h-[500px] w-auto mx-auto md:ml-auto"
          src="/about-us.webp"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
