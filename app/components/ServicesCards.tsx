"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

// traer estos de la db
const services = [
  {
    title: "Medicina general",
    image: "/default.png",
    icon: "/icons/medicine.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. mi porta gravida at eget metus.",
  },
  {
    title: "Odontología",
    image: "/default.png",
    icon: "/icons/odontology.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident reiciendis doloremque ut harum amet pariatur eveniet repudiandae iste laboriosam mollitia dolor molestias dolores iure nihil, possimus in recusandae? Id, autem.",
  },
  {
    title: "Otro mas",
    image: "/default.png",
    icon: "/icons/odontology.svg",
    description:
      "Quis, dignissimos tempore ipsum quibusdam perferendis mollitia aliquam at accusamus distinctio officiis consectetur",
  },
];

export default function ServicesCards() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedService = services[selectedIndex];
  return (
    <div className="stack">
      <div className="grid grid-cols-3 gap-6">
        {services.map(({ title, icon }, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className=" cursor-pointer text-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <p>el icono</p>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              {title}
            </h5>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {selectedService.title}
          </h2>
          <p className="mb-10">{selectedService.description}</p>
          <Button label="Agendar atención" href="/agendamiento" />
        </div>
        <div>
          <Image
            className="rounded-md ml-auto"
            width="500"
            height="500"
            src={selectedService.image}
            alt={selectedService.title}
          />
        </div>
      </div>
    </div>
  );
}
