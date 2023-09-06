import Header from "@/components/Header";
import SpecialtiesCards from "@/components/SpecialtiesCards";
import { getSpecialties } from "@/services/getSpecialties";
import { Specialty } from "@/types";
import React from "react";

export default function SpecialtiesPage({ items }: { items: Specialty[] }) {
  return (
    <div className="section">
      <Header
        title="Especialidades"
        uppertitle={"algun texto"}
        align={"center"}
      />
      <div>
        <SpecialtiesCards items={items} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const items = await getSpecialties();
  return {
    props: {
      items,
    },
  };
}
