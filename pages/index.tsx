import { getDoctors, getServices, getSpecialties } from "@/services/ApiService";
import { Doctor, Service, Specialty } from "@/types";
import Head from "next/head";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Doctors from "./components/Doctors";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Specialties from "./components/Specialties";

interface HomeProps {
  doctors: Doctor[];
  specialties: Specialty[];
  services: Service[];
}

export default function HomePage({
  doctors,
  specialties,
  services,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Viluan</title>
        <meta property="og:title" content="Viluan" key="title" />
        <meta name="description" content="Centro médico y odontológico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <AboutUs />
      <Services data={services} />
      <Specialties data={specialties} />
      <Banner />
      <Doctors data={doctors} />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const doctors = await getDoctors();
  const specialties = await getSpecialties();
  const services = await getServices();
  return { props: { doctors, specialties, services } };
}
