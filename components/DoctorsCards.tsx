import Button from "@/components/Button";
import { Doctor } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  items: Doctor[];
  count?: number;
}

export default function SpecialistsCards({ items = [], count }: Props) {
  const _items = items.slice(0, count || items.length);
  return (
    <div className="stack">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {_items.map(({ id, name, specialty, photoURL }) => (
          <div key={id} className="card group overflow-hidden">
            <div className="h-[260px] overflow-hidden">
              <Image
                width="500"
                height="500"
                className="rounded-t-md w-full object-cover group-hover:scale-105 transition-all duration-300 group-hover:filter group-hover:brightness-110"
                src={photoURL}
                alt={name}
              />
            </div>
            <div className="p-5 rounded-b-md">
              <h5 className="text-xl font-bold tracking-tight">{name}</h5>
              <p className="mb-3 text-md">{specialty}</p>
              <div className="opacity-80 group-hover:opacity-100 transition-all duration-300">
                <Button
                  mode="outline"
                  block={true}
                  color="primary"
                  label="Ver agenda"
                  action={`/doctores/${id}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
