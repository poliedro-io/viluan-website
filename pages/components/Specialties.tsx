import Button from "@/components/Button";
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
          title="Ofrecemos una serie de especialidades"
          align="center"
        />
        <SpecialtiesCards items={data} />
        <div className="mt-20 mx-auto max-w-sm">
          <Button
            block
            color="secondary"
            label="Ver todas las especialidades"
            action="/especialidades"
          />
        </div>
      </div>
    </div>
  );
}
