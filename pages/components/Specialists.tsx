import Header from "@/components/Header";
import React from "react";
import SpecialistsCards from "../../components/DoctorsCards";

export default function Specialists() {
  return (
    <div className="bg-blue-100">
      <div className="section">
        <Header
          uppertitle="nuestros especialistas"
          title="Doctores geniales medicina y odontólogos"
          align="center"
        />
        <SpecialistsCards items={[]} />
      </div>
    </div>
  );
}
