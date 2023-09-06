import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-primary-600">
      <div className="">
        <Image
          className="h-full w-full object-cover "
          src={"/banner.jpg"}
          width="500"
          height="500"
          alt={"banner"}
        />
      </div>
      <div className=" flex items-center justify-center px-4 md:pl-10 py-20">
        <p className="text-3xl text-white">
          Te invitamos a descubrir un lugar donde la salud y la sonrisa se unen
          en un solo espacio.
        </p>
      </div>
    </div>
  );
}
