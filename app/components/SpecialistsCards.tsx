import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

// traer estos de la db
const specialists = [
  {
    name: "Dr. Juan Perez",
    image: "/default.png",
    speciality: "Medicina general",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. mi porta gravida at eget metus.",
  },
  {
    name: "Dra. Maria Salvia",
    image: "/default.png",
    speciality: "Odontología",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident reiciendis doloremque ut harum amet pariatur eveniet repudiandae iste laboriosam mollitia dolor molestias dolores iure nihil, possimus in recusandae? Id, autem.",
  },
  {
    name: "Dr. Juan Salvia",
    image: "/default.png",
    speciality: "Otro mas",
    summary:
      "Quis, dignissimos tempore ipsum quibusdam perferendis mollitia aliquam at accusamus distinctio officiis consectetur",
  },
];

export default function ServicesCards() {
  return (
    <div className="stack">
      <div className="grid grid-cols-3 gap-6">
        {specialists.map(({ name, speciality, image }, i) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-50 hover:shadow-xl">
            <a href="#">
              <Image
                width="500"
                height="500"
                className="rounded-t-lg"
                src={image}
                alt={name}
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {name}
              </h5>
              <p className="mb-3 font-normal text-gray-700">{speciality}</p>
              <Button label="Agendar atención" href="/agendamiento" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
