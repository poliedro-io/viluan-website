import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ScheduleForm from "@/components/appointment/ScheduleForm";
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
      <PageHero bgClass="bg-appointment-hero" >
      <Header
          title={"Agenda tu hora"}
          uppertitle={"agendamiento"}
          align={"center"}
          noMargin
          white
        />
        </PageHero>
      <div className="section-page">

        <ScheduleForm doctors={doctors} specialties={specialties} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const doctors = await getDoctors();
  const specialties = await getSpecialties();
  return { props: { doctors, specialties } };
}
