const SERVER_API_URL = process.env.API_URL;
const APPOINTMENTS_URL =
  "https://us-central1-viluan-5d339.cloudfunctions.net/api/appointments";

export async function getDoctors(): Promise<any[]> {
  const doctors = await fetch(SERVER_API_URL + "/doctors").then((res) =>
    res.json()
  );
  return doctors;
}

export async function getDoctor(id: string): Promise<any> {
  const doctor = await getDoctors().then((doctors) =>
    doctors.find((doctor) => doctor.id === id)
  );
  return doctor;
}

export async function getSpecialties(): Promise<any[]> {
  const specialties = await fetch(SERVER_API_URL + "/specialties").then((res) =>
    res.json()
  );
  return specialties;
}

export async function getSpecialty(id: string): Promise<any> {
  const specialty = await getSpecialties().then((specialties) =>
    specialties.find((specialty) => specialty.id === id)
  );
  return specialty;
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
