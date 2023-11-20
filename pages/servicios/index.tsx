import PageHero from "@/components/PageHero";
import { getServices } from "@/services/ApiService";
import { Specialty } from "@/types";
import Services from "../components/Services";

export default function ServicesPage({ items }: { items: Specialty[] }) {
  return (
    <>
      <PageHero bgClass="bg-services-hero" />
      <Services data={items} />
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
