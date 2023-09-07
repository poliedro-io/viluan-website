import Header from "@/components/Header";
import React from "react";
import SpecialistsCards from "../../components/DoctorsCards";
import { Doctor } from "@/types";
import Button from "@/components/Button";

interface DoctorsProps {
  data: Doctor[];
}
export default function Doctors({ data }: DoctorsProps) {
  return (
    <div className="bg-cyan-50">
      <div className="section">
        <Header
          uppertitle="nuestros especialistas"
          title="Un equipo de profesionales altamente calificados"
          align="center"
        />
        <SpecialistsCards items={data} count={3} />
        <div className="mt-10 mx-auto max-w-sm">
          <Button
            block
            color="secondary"
            label="Ver todos los especialistas"
            action="/doctores"
          />
        </div>
      </div>
    </div>
  );
}
