import Button from "@/components/Button";
import Header from "@/components/Header";
import DoctorSchedule from "@/components/appointment/DoctorSchedule";
import { getDoctor, getDoctors } from "@/services/getDoctors";
import { Doctor } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

export default function SpecialistPage({ data }: { data: Doctor }) {
  return (
    <div className="section">
      <Header title={data.name} uppertitle={data.specialty} align={"center"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          className="rounded-md"
          src={data.photoURL}
          alt={data.name}
          width="500"
          height="500"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p>{data.summary}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Button
                color="secondary"
                icon={<FaRegEnvelope />}
                label="Enviar email"
                action={`mailto:${data.email}`}
              />
              <Button
                color="secondary"
                icon={<FaPhoneAlt />}
                label="Llamar"
                action={`tel:${data.phone}`}
              />
            </div>
          </div>

          <div className="mt-4">
            <Button
              block
              color="secondary"
              mode="outline"
              icon={<FaArrowLeft />}
              label="Ver todos los doctores"
              action={`/doctores`}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
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
