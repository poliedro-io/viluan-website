import Button from "@/components/Button";
import Header from "@/components/Header";
import ServicesCards from "@/components/ServicesCards";
import { Service } from "@/types";
interface ServicesProps {
  data: Service[];
}

export default function Services({ data }: ServicesProps) {
  return (
    <div id="servicios" className="bg-cyan-50">
      <div className="section">
        <Header
          uppertitle="Servicios"
          title="Conoce nuestros servicios que brindarán una atención de calidad y confianza"
          align="center"
        />

        <ServicesCards data={data} />

        <div className="mt-20 mx-auto max-w-sm">
          <Button
            block
            color="secondary"
            label="Ver todos los servicios"
            action="/servicios"
          />
        </div>
      </div>
    </div>
  );
}
