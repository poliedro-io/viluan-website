import Header from "@/components/Header";
import React from "react";
import SpecialtiesCards from "../../components/SpecialtiesCards";
import { Specialty } from "@/types";
interface SpecialtiesProps {
  data: Specialty[];
}

export default function Specialties({ data }: SpecialtiesProps) {
  return (
    <div id="servicios" className="bg-cyan-50">
      <div className="section">
        <Header
          uppertitle="especialidades"
          title="Conoce nuestros servicios médicos"
          align="center"
        />
        <SpecialtiesCards items={data} />
      </div>
    </div>
  );
}
