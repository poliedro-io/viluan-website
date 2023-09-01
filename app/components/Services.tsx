import Button from "@/components/Button";
import Header from "@/components/Header";
import React from "react";

const services = [
  {
    title: "Medicina general",
    icon: "/icons/medicine.svg",
  },
  {
    title: "Odontología",
    icon: "/icons/odontology.svg",
  },
  {
    title: "Otro mas",
    icon: "/icons/odontology.svg",
  },
];

export default function Services() {
  return (
    <div className="bg-blue-100">
      <div className="section">
        <Header
          uppertitle="especialidades"
          title="Nuestros servicios médicos"
          align="center"
        />
        <div className="grid grid-cols-3 gap-6">
          {services.map(({ title, icon }) => (
            <div className=" cursor-pointer text-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <p>el icono</p>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                {title}
              </h5>
            </div>
          ))}
        </div>
        <div>el contenido seleccionado</div>
      </div>
    </div>
  );
}
