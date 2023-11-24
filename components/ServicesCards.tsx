import { LinkButton } from "@/components/LinkButton";
import { Service } from "@/types";
import { startCase } from "lodash";
import Image from "next/image";

interface ServicesProps {
  data: Service[];
}

export default function ServicesCards({ data }: ServicesProps) {
  return (
    <div className="grid grid-flow-row gap-8">
      {data?.map((service) => (
        <div
          key={service.id}
          className="flex flex-col md:flex-row group md:h-[260px] overflow-hidden w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div className="w-full md:w-2/5 h-[200px] md:h-auto shrink-0 bg-white bg-clip-border text-gray-700">
            <Image
              src={service.imageURL}
              className="object-cover h-full w-full"
              alt={service.name}
              width="300"
              height="200"
            />
          </div>
          <div className="p-6">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-primary-600 md:text-gray-600 group-hover:text-primary-600 ">
              {startCase(service.name.toLowerCase())}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-600 line-clamp">
              {service.description}
            </p>
            <LinkButton link={`/servicios/${service.id}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
