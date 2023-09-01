import Header from "@/components/Header";
import React from "react";
import ServicesCards from "./ServicesCards";

export default function Services() {
  return (
    <div className="bg-blue-100">
      <div className="section">
        <Header
          uppertitle="especialidades"
          title="Nuestros servicios médicos"
          align="center"
        />
        <ServicesCards />
      </div>
    </div>
  );
}
