"use client";
import { Customer, Doctor, Specialty } from "@/types";
import { useState } from "react";
import Select from "../Select";
import AppointmentConfirmation from "./AppointmentConfirmation";
import CustomerData from "./CustomerData";
import ScheduleData from "./ScheduleData";

interface DoctorScheduleProps {
  doctor?: Doctor;
  doctors?: Doctor[];
  specialties?: Specialty[];
}

const initialCustomer = {
  name: "",
  rut: "",
  phone: "",
  email: "",
};

export default function ScheduleForm({
  doctors,
  specialties = [],
  doctor: propDoctor,
}: DoctorScheduleProps) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<[number, number] | null>(null);
  const [customer, setCustomer] = useState<Customer>(initialCustomer);
  const [specialty, setSpecialty] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const selectedDoctor = propDoctor
    ? propDoctor
    : (doctors?.find((doc) => doc.id === doctor) as Doctor);
  const filteredDoctors =
    doctors?.filter((doctor) => doctor.specialty.id === specialty) || [];

  const handleSpecialtyChange = (e: React.FormEvent<HTMLSelectElement>) => {
    if (step !== 1) {
      setDate(new Date());
      setTime(null);
      setStep(1);
    }
    setSpecialty(e.currentTarget.value);
  };
  const handleDoctorChange = (e: React.FormEvent<HTMLSelectElement>) => {
    if (step !== 1) {
      setDate(new Date());
      setTime(null);
      setStep(1);
    }
    setDoctor(e.currentTarget.value);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {!propDoctor && (
        <div className="border-b-2 mb-6 pb-4">
          <Select
            onChange={handleSpecialtyChange}
            value={specialty}
            label={"Especialidad"}
            name={"specialty"}
            placeholder={"Seleccionar"}
            required
            options={specialties.map(({ name, id }) => ({
              label: name,
              value: id,
            }))}
          />
          <Select
            onChange={handleDoctorChange}
            value={doctor}
            label={"Doctor"}
            name={"doctor"}
            placeholder={"Seleccionar"}
            required
            options={filteredDoctors.map(({ name, id }) => ({
              label: name,
              value: id,
            }))}
          />
        </div>
      )}

      {selectedDoctor && (
        <div>
          {step === 1 && (
            <ScheduleData
              doctor={selectedDoctor}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              setStep={setStep}
            />
          )}

          {step === 2 && (
            <CustomerData
              customer={customer}
              setcustomer={setCustomer}
              setStep={setStep}
            />
          )}

          {step === 3 && (
            <AppointmentConfirmation
              setStep={setStep}
              data={{
                customer,
                date: date as Date,
                time: time as [number, number],
                doctor: selectedDoctor,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
