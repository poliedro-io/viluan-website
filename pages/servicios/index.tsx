import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesCards from "@/components/ServicesCards";
import { getServices } from "@/services/ApiService";
import { Specialty } from "@/types";

export default function ServicesPage({ items }: { items: Specialty[] }) {
  return (
    <>
      <PageHero bgClass="bg-services-hero" />
      <div className="section">
        <Header
          title="Medicina, Odontología y Armonización Facial"
          uppertitle="nuestros servicios"
          align="center"
        />
        <ServicesCards data={items} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const items = await getServices();
  return {
    props: {
      items,
    },
  };
}
