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
    <div>
      <div className="flex justify-center gap-6">
        {items.map(({ name, iconURL }, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`max-w-[200px] w-full flex flex-col justify-center gap-4 items-center cursor-pointer text-center p-6 bg-white rounded-lg shadow ${
              i === selectedIndex
                ? "bg-gradient-to-r from-blue-800 to-blue-500 text-white"
                : "hover:bg-blue-50 text-blue-800"
            }`}
          >
            <Image
              className={i === selectedIndex ? "invert" : "colorize-blue"}
              src={iconURL || "/img/medical.png"}
              alt={name}
              width="80"
              height="80"
            />
            <span className="hidden md:block mb-2 text-sm tracking-tight">
              {name}
            </span>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="mt-6 md:mt-20 overflow-hidden grid md:grid-cols-2 gap-6">
          <div className="h-[200px] md:h-[400px] overflow-hidden">
            <Image
              className="ml-auto rounded-md h-full object-cover"
              width="500"
              height="500"
              loading="lazy"
              src={selectedService.imageURL || "/default.png"}
              alt={selectedService.name}
            />
            <div className="md:hidden mt-4">
              <Button label="Agendar atención" action="/agendar" />
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {selectedService.name}
            </h2>
            <p className="mb-10">{selectedService.description}</p>
            <Button
              block
              mode="outline"
              label="Agendar atención"
              action="/agendar"
            />
          </div>
        </div>
      )}
    </div>
  );
}
