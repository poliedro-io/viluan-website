import Button from "@/components/Button";
import Header from "@/components/Header";
import ScheduleForm from "@/components/appointment/ScheduleForm";
import { getDoctor, getDoctors } from "@/services/ApiService";
import { Doctor } from "@/types";
import Image from "next/image";
import { FaArrowLeft, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

export default function SpecialistPage({ data: doctor }: { data: Doctor }) {
  const { imageURL, name, specialty, bio, email, phone } = doctor;
  return (
    <div className="section">
      <Header title={name} uppertitle={specialty.name} align={"center"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          className="rounded-md"
          src={imageURL || "/default.png"}
          alt={name}
          width="500"
          height="500"
        />
        <div className="flex flex-col">
          <div>
            {bio ? (
              <p>{bio}</p>
            ) : (
              <p className="text-center">
                <i>No hay información disponible de este doctor</i>
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {email && (
                <Button
                  color="secondary"
                  icon={<FaRegEnvelope />}
                  label="Enviar email"
                  action={`mailto:${email}`}
                />
              )}
              {phone && (
                <Button
                  color="secondary"
                  icon={<FaPhoneAlt />}
                  label="Llamar"
                  action={`tel:${phone}`}
                />
              )}
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
      <div className="mt-16">
        <Header title={"Agendar cita"} align={"center"} />

        <ScheduleForm doctor={doctor} />
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
