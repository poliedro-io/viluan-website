import { Specialty } from "../types";
import { MOCK_DATA } from "./mock-specialties";

export function getSpecialties(): Promise<Specialty[]> {
  return Promise.resolve(MOCK_DATA);
}

export function getSpecialty(id: string): Promise<Specialty> {
  const index = MOCK_DATA.findIndex((specialist) => specialist.id === id);
  return Promise.resolve(MOCK_DATA[index]);
}
