import Head from "next/head";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Specialties";
import Doctors from "./components/Doctors";

export default function HomePage() {
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
      <Services />
      <Banner />
      <Doctors />
      <Contact />
    </>
  );
}
