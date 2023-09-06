import Header from "@/components/Header";
import DoctorSchedule from "@/components/appointment/DoctorSchedule";
import { getDoctor, getDoctors } from "@/services/getDoctors";
import { Doctor } from "@/types";
import Image from "next/image";
import React from "react";

export default function SpecialistPage({ data }: { data: Doctor }) {
  return (
    <div className="section">
      <Header title={data.name} uppertitle={data.specialty} align={"center"} />
      <div className="grid grid-cols-2 gap-6">
        <Image src={data.photoURL} alt={data.name} width="500" height="500" />
        <div>
          <p>{data.summary}</p>
          <p>contacto o redes sociales</p>
        </div>
      </div>
      <div>
        <h2>Agendar hora</h2>
        <DoctorSchedule doctor={data} withInfo={false} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getDoctors().then((items) =>
    items.map(({ id }) => ({ params: { id: String(id) } }))
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = await getDoctor(params.id);
  return { props: { data } };
}
