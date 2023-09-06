import Head from "next/head";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Doctors from "./components/Doctors";
import { getDoctors } from "@/services/getDoctors";
import { getSpecialties } from "@/services/getSpecialties";
import { Doctor, Specialty } from "@/types";
import Specialties from "./components/Specialties";

interface HomeProps {
  doctors: Doctor[];
  specialties: Specialty[];
}

export default function HomePage({ doctors, specialties }: HomeProps) {
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
  return { props: { doctors, specialties } };
}
