const url = process.env.API_URL + "specialties";

export async function getSpecialties(): Promise<any[]> {
  const specialties = await fetch(url).then((res) => res.json());
  return specialties;
}

export async function getSpecialty(id: string): Promise<any> {
  const specialty = await getSpecialties().then((specialties) =>
    specialties.find((specialty) => specialty.id === id)
  );
  return specialty;
}
