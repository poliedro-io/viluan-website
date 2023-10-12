import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { getDoctors } from "@/services/ApiService";
import { Doctor } from "@/types";
import SpecialistsCards from "../../components/DoctorsCards";

export default function SpecialistsPage({ items }: { items: Doctor[] }) {
  return (
    <>
      <PageHero bgClass="bg-doctors-hero" />
      <div className="section">
        <Header
          title="Conoce a nuestros especialistas"
          uppertitle="nuestro equipo"
          align="center"
        />
        <SpecialistsCards items={items} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const items = await getDoctors();
  return { props: { items } };
}
