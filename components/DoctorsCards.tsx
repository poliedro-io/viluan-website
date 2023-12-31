import Button from "@/components/Button";
import { Doctor } from "@/types";
import Image from "next/image";

interface Props {
  items: Doctor[];
}

export default function SpecialistsCards({ items = [] }: Props) {
  return (
    <div className="stack">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ id, name, specialty, imageURL }) => (
          <div key={id} className="card group overflow-hidden">
            <div className="h-[300px] overflow-hidden">
              <Image
                loading="lazy"
                width="500"
                height="500"
                className="rounded-t-md w-full object-cover group-hover:scale-105 transition-all duration-300 group-hover:filter group-hover:brightness-110"
                src={imageURL || "/default.png"}
                alt={name}
              />
            </div>
            <div className="p-5 rounded-b-md">
              <h5 className="text-xl text-gray-700 group-hover:text-primary-500 font-bold tracking-tight">
                {name}
              </h5>
              <p className="mb-3 text-lg text-gray-600">{specialty.name}</p>
              <p className="line-clamp mb-4 text-md text-gray-500">
                {specialty.description}
              </p>
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
