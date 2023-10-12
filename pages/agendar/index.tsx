import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { getDoctors, getSpecialties } from "@/services/ApiService";
import { Doctor, Specialty } from "@/types";

interface AppointmentPageProps {
  doctors: Doctor[];
  specialties: Specialty[];
}

export default function AppointmentPage({
  doctors,
  specialties,
}: AppointmentPageProps) {
  return (
    <>
      <PageHero bgClass="bg-appointment-hero" />
      <div className="section">
        <Header
          title={"Agenda tu hora"}
          uppertitle={"agendamiento"}
          align={"center"}
        />

        <div>
          {/* <DoctorSchedule doctors={doctors} specialties={specialties} /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const doctors = await getDoctors();
  const specialties = await getSpecialties();
  return { props: { doctors, specialties } };
}
