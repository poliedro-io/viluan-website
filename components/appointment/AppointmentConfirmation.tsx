import { sendAppointment } from "@/services/ApiService";
import { Customer, Doctor } from "@/types";
import { pick } from "lodash";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import Spinner from "../Spinner";

interface AppointmentConfirmationProps {
  data: {
    customer: Customer;
    date: Date;
    time: [number, number];
    doctor: Doctor;
  };
  setStep: Dispatch<SetStateAction<number>>;
}

export default function AppointmentConfirmation({
  data,
  setStep,
}: AppointmentConfirmationProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const sendData = async () => {
    const doctor = pick(data.doctor, ["id", "name"]);
    const specialty = pick(data.doctor.specialty, ["id", "name"]);
    const body = {
      ...data,
      doctor,
      specialty,
    };
    setIsLoading(true);
    sendAppointment(body)
      .then(() => {
        router.push("/");
        alert("La cita fue agendada correctamente.");
      })
      .catch(() =>
        alert(
          "Hubo un error inesperado. Espere un momento y pruebe otra vez. Si el problema persiste contactenos via telefono para agendar la cita."
        )
      )
      .finally(() => setIsLoading(false));
  };
  const prev = () => setStep((v) => v - 1);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute w-full h-full flex justify-center items-center bg-white bg-opacity-75">
          <Spinner />
        </div>
      )}
      <h1 className="text-lg mb-4 font-bold">Confirmacion</h1>
      {/* {JSON.stringify(data)} */}
      <div className="grid grid-cols-2 gap-2 max-w-md mt-10 ml-auto">
        <Button label={"Atras"} action={prev} />
        <Button isDisabled={isLoading} label={"Confirmar"} action={sendData} />
      </div>
    </div>
  );
}
