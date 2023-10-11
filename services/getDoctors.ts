const url = process.env.API_URL + "doctors";

export async function getDoctors(): Promise<any[]> {
  const doctors = await fetch(url).then((res) => res.json());
  return doctors;
}

export async function getDoctor(id: string): Promise<any> {
  const doctor = await getDoctors().then((doctors) =>
    doctors.find((doctor) => doctor.id === id)
  );
  return doctor;
}
