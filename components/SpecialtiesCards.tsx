"use client";
import Button from "@/components/Button";
import { Specialty } from "@/types";
import Image from "next/image";
import React from "react";

export default function SpecialtiesCards({
  items = [],
}: {
  items: Specialty[];
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedService = items?.length ? items[selectedIndex] : null;
  return (
    <div className="stack">
      <div className="grid grid-cols-3 gap-6">
        {items.map(({ name, iconURL }, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className=" cursor-pointer text-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <p>el icono</p>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              {name}
            </h5>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="grid grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {selectedService.name}
            </h2>
            <p className="mb-10">{selectedService.description}</p>
            <Button label="Agendar atención" action="/agendar" />
          </div>
          <div>
            <Image
              className="rounded-md ml-auto"
              width="500"
              height="500"
              src={selectedService.photoURL}
              alt={selectedService.name}
            />
          </div>
        </div>
      )}
    </div>
  );
}
