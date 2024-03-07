import Button from "@/components/Button";

export default function Hero() {
  return (
    <div className="bg-blue-200 bg-hero bg-cover">
      <div className="section grid md:grid-cols-2 py-10 md:py-20">
        <div className="flex flex-col items-start my-auto">
          <h3 className="text-primary-800 font-semibold uppercase mb-2">
            centro médico y odontológico
          </h3>
          <h1 className="text-6xl text-gray-800 font-bold mb-8">
            Tu salud en buenas manos
          </h1>
          <p className="text-gray-800 text-xl">
            Agenda tu atención con nuestros especialistas. Estaremos encantados de
            atenderte
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full mt-8">
            <Button block={true} label="Agendar atención" action="/agendar" />
            <Button
              mode="outline"
              color="primary"
              block={true}
              label="Saber más"
              action="#us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
