import Button from "@/components/Button";
import { Doctor } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  items: Doctor[];
}

export default function SpecialistsCards({ items = [] }: Props) {
  return (
    <div className="stack">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ id, name, specialty, photoURL }) => (
          <div key={id} className="card">
            <Image
              width="500"
              height="500"
              className="rounded-t-lg"
              src={photoURL}
              alt={name}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {name}
              </h5>
              <p className="mb-3 font-normal text-gray-700">{specialty}</p>
              <Button label="Agendar atención" action={`/doctores/${id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
