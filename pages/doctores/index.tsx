import React from "react";
import SpecialistsCards from "../../components/DoctorsCards";
import Header from "@/components/Header";
import { Doctor } from "@/services/types";
import { getDoctors } from "@/services/getDoctors";

export default function SpecialistsPage({ items }: { items: Doctor[] }) {
  return (
    <div className="section">
      <Header
        title="Nuestros doctores"
        uppertitle="especialistas"
        align="center"
      />

      <SpecialistsCards items={items} />
    </div>
  );
}

export async function getStaticProps() {
  const items = await getDoctors();
  return { props: { items } };
}
