import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Specialists from "./components/Specialists";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Banner />
      <Specialists />
      <Contact />
    </>
  );
}
