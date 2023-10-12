"use client";
import { Customer, Doctor } from "@/types";
import { useState } from "react";
import AppointmentConfirmation from "./AppointmentConfirmation";
import CustomerData from "./CustomerData";
import ScheduleData from "./ScheduleData";

interface DoctorScheduleProps {
  doctor: Doctor;
}

const initialCustomer = {
  name: "",
  rut: "",
  phone: "",
  email: "",
};

export default function DoctorSchedule({ doctor }: DoctorScheduleProps) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<[number, number] | null>(null);
  const [customer, setCustomer] = useState<Customer>(initialCustomer);
  return (
    <div className="min-h-screen">
      {step === 1 && (
        <ScheduleData
          doctor={doctor}
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
            doctor,
          }}
        />
      )}
    </div>
  );
}
