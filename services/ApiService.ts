import { Doctor, Service, Specialty } from "@/types";
import { orderBy } from "lodash";

const SERVER_API_URL = process.env.API_URL;
const APPOINTMENTS_URL =
  "https://us-central1-viluan-5d339.cloudfunctions.net/api/appointments";

export async function getDoctors(): Promise<Doctor[]> {
  const doctors = await fetch(SERVER_API_URL + "/doctors").then((res) =>
    res.json()
  );
  return orderBy(doctors, "index");
}

export async function getDoctor(id: string): Promise<Doctor | null> {
  const doctor =
    (await getDoctors().then((doctors) =>
      doctors.find((doctor) => doctor.id === id)
    )) || null;
  return doctor;
}

export async function getSpecialties(): Promise<Specialty[]> {
  const specialties = await fetch(SERVER_API_URL + "/specialties").then((res) =>
    res.json()
  );
  return orderBy(specialties, "index");
}

export async function getSpecialty(id: string): Promise<Specialty | null> {
  const specialty = await getSpecialties().then((specialties) =>
    specialties.find((specialty) => specialty.id === id)
  );
  return specialty || null;
}

export async function getServices(): Promise<Service[]> {
  const services = await fetch(SERVER_API_URL + "/services").then((res) =>
    res.json()
  );
  return services;
}

export async function getService(id: string): Promise<Service | null> {
  const specialties = await getServices();
  const specialty = specialties.find((service) => service.id === id);
  return specialty || null;
}

export async function getAppointments(doctorId: string, date: Date) {
  const queryParams = new URLSearchParams({
    date: date.toISOString(),
    doctorId,
  });
  const appointments = await fetch(APPOINTMENTS_URL + "?" + queryParams).then(
    (res) => res.json()
  );
  return appointments;
}

export async function sendAppointment(data: any) {
  const body = JSON.stringify(data);
  const response = await fetch(APPOINTMENTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }).then((res) => res.json());
  return response;
}
