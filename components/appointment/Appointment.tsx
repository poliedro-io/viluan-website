"use client";

import React, { useEffect, useState } from "react";
import UserData from "./UserData";
import { Doctor, Schedule, Specialty, User } from "@/types";
import Select from "../Select";
import { getSpecialties } from "@/services/getSpecialties";
import { getDoctors } from "@/services/getDoctors";
import DoctorSchedule from "./DoctorSchedule";

const user = {
  name: "",
  rut: "",
  phone: "",
  email: "",
};

const schedule = {
  specialty: "",
  doctor: "",
  date: new Date(),
  time: "",
};

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<User>(user);
  const [scheduleData, setScheduleData] = useState<Schedule>(schedule);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [specialty, setSpecialty] = useState<string>("");

  useEffect(() => {
    getSpecialties().then((data) => {
      setSpecialties(data);
      setSpecialty(data[0].id);
    });
    getDoctors().then(setDoctors);
  }, []);
  const filteredDoctors = doctors.filter(
    (doctor) => doctor.specialty === specialty
  );
  return (
    <div>
      <div>
        <Select
          onChange={(ev) => setSpecialty(ev.currentTarget.value)}
          value={schedule.specialty}
          label={"Especialidad"}
          name={"specialty"}
          placeholder={"Seleccionar"}
          required
          options={specialties.map(({ name, id }) => ({
            label: name,
            value: id,
          }))}
        />
        {filteredDoctors.map((doctor) => (
          <DoctorSchedule key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
