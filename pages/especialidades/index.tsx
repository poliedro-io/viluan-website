import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import SpecialtiesCards from "@/components/SpecialtiesCards";
import { getSpecialties } from "@/services/getSpecialties";
import { Specialty } from "@/types";
import React from "react";

export default function SpecialtiesPage({ items }: { items: Specialty[] }) {
  return (
    <>
      <PageHero bgClass="bg-specialties-hero" />

      <div className="section">
        <Header
          title="Medicina y odontología"
          uppertitle={"nuestras especialidades"}
          align={"center"}
        />
        <div>
          <SpecialtiesCards items={items} />
        </div>
      </div>
    </>
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
