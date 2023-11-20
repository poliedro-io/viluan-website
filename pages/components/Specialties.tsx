import Header from "@/components/Header";
import { Specialty } from "@/types";
import SpecialtiesCards from "../../components/SpecialtiesCards";
interface SpecialtiesProps {
  data: Specialty[];
}

export default function Specialties({ data }: SpecialtiesProps) {
  return (
    <div id="servicios">
      <div className="section">
        <Header
          uppertitle="especialidades"
          title="Ofrecemos una serie de especialidades médicas"
          align="center"
        />
        <SpecialtiesCards items={data} />
      </div>
    </div>
  );
}
