import React from "react";
import SpecialistsCards from "../../components/DoctorsCards";
import Header from "@/components/Header";
import { Doctor } from "@/types";
import { getDoctors } from "@/services/getDoctors";
import PageHero from "@/components/PageHero";

export default function SpecialistsPage({ items }: { items: Doctor[] }) {
  return (
    <>
      <PageHero bgClass="bg-doctors-hero" />
      <div className="section">
        <Header
          title="Conoce a nuestros especialistas"
          uppertitle="nuestro equipo"
          align="center"
        />
        <SpecialistsCards items={items} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const items = await getDoctors();
  return { props: { items } };
}
