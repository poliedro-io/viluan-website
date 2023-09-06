import Button from "@/components/Button";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-blue-200 min-h-screen">
      <div className="section grid md:grid-cols-2 pt-10 md:pt-20">
        <div className="flex flex-col items-start gap-8 my-auto">
          <h3 className="text-blue-800 font-semibold">COMMITED TO SUCCESS</h3>
          <h1 className="text-6xl text-gray-900 font-bold">
            We care about your sushi
          </h1>
          <p className="text-black">
            El parrafo genial que acompaña al titulo de la paginita
          </p>
          <div className="flex gap-2">
            <Button label="Agendar atención" action="/agendar" />
            <Button label="Saber más" action="#us" />
          </div>
        </div>
      </div>
    </div>
  );
}
