import { sendAppointment } from "@/services/ApiService";
import { Customer, Doctor } from "@/types";
import { minutesToStringTime } from "@/utils";
import { format } from "date-fns";
import { lowerCase, pick, startCase } from "lodash";
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
      <p>
        Por favor confirme que los datos ingresados son correctos antes de
        agendar la cita.
      </p>

      <div className="grid gap-6 mt-6">
        <div>
          <h1 className="mb-2 font-bold text-gray-600">Agendamiento</h1>
          <div className="appointment">
            <table>
              <tbody>
                <tr>
                  <td>Doctor:</td>
                  <td>{startCase(data.doctor.name)}</td>
                </tr>
                <tr>
                  <td>Especialidad:</td>
                  <td>{startCase(data.doctor.specialty.name)}</td>
                </tr>
                <tr>
                  <td>Fecha:</td>
                  <td>{format(data.date, "dd-MM-yyyy")}</td>
                </tr>
                <tr>
                  <td>Horario:</td>
                  <td>
                    {data.time.map((t) => minutesToStringTime(t)).join(" - ")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="mb-2 font-bold text-gray-600">Mis datos</h1>
          <div className="appointment">
            <table>
              <tbody>
                <tr>
                  <td>Nombre:</td>
                  <td>{startCase(data.customer.name)}</td>
                </tr>
                <tr>
                  <td>RUT:</td>
                  <td>{data.customer.rut}</td>
                </tr>
                <tr>
                  <td>Telefono:</td>
                  <td>{data.customer.phone}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{lowerCase(data.customer.email) || "sin datos"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 max-w-md mt-10 ml-auto">
        <Button mode="outline" label={"Atras"} action={prev} />
        <Button isDisabled={isLoading} label={"Confirmar"} action={sendData} />
      </div>
    </div>
  );
}
