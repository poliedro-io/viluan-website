import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import SpecialtiesCards from "@/components/SpecialtiesCards";
import { getSpecialties } from "@/services/ApiService";
import { Specialty } from "@/types";

export default function SpecialtiesPage({ items }: { items: Specialty[] }) {
  return (
    <>
      <PageHero bgClass="bg-specialties-hero" />

      <div className="section">
        <Header
          title="Conoce nuestras especialidades médicas y odontológicas"
          uppertitle={"nuestras especialidades"}
          align={"center"}
        />
        <div>
          <SpecialtiesCards items={items} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const items = await getSpecialties();
  return {
    props: {
      items,
    },
  };
}
