import Button from "@/components/Button";
import Header from "@/components/Header";
import { Doctor } from "@/types";
import DoctorsCards from "../../components/DoctorsCards";

interface DoctorsProps {
  data: Doctor[];
}
export default function Doctors({ data }: DoctorsProps) {
  return (
    <div className="bg-cyan-50">
      <div className="section">
        <Header
          uppertitle="nuestros especialistas"
          title="Un equipo de profesionales altamente calificados"
          align="center"
        />
        <DoctorsCards items={data} />
        <div className="mt-20 mx-auto max-w-sm">
          <Button
            block
            color="secondary"
            label="Ver todos los especialistas"
            action="/doctores"
          />
        </div>
      </div>
    </div>
  );
}
