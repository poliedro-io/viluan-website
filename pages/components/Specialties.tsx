import Header from "@/components/Header";
import React from "react";
import SpecialtiesCards from "../../components/SpecialtiesCards";

export default function Specialties() {
  return (
    <div id="servicios" className="bg-blue-100">
      <div className="section">
        <Header
          uppertitle="especialidades"
          title="Conoce nuestros servicios médicos"
          align="center"
        />
        <SpecialtiesCards items={[]} />
      </div>
    </div>
  );
}
