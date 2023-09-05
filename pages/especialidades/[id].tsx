import { getSpecialties, getSpecialty } from "@/services/getSpecialties";
import { Specialty } from "@/services/types";
import React from "react";

export default function SpecialtyPage({ data }: { data: Specialty }) {
  return <p>Especialidad: {data.id}</p>;
}

export async function getStaticPaths() {
  const paths = await getSpecialties().then((items) =>
    items.map(({ id }) => ({ params: { id: String(id) } }))
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = await getSpecialty(params.id);
  return { props: { data } };
}
