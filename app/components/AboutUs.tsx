import Button from "@/components/Button";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="section">
      <div className="grid grid-cols-2">
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
          <div className="grid grid-rows-3 gap-6">
            <Button label={"Agendar atención"} href="agendamiento" />
            <Button label={"Ver doctores"} href="especialistas" />
            <Button label={"Ver servicios"} href="servicios" />
          </div>
        </div>

        <Image
          className="h-[500px] w-auto ml-auto"
          src="/about-us.webp"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
