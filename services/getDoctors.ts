import { Doctor } from "../types";
import { MOCK_DATA } from "./mock-doctors";

export function getDoctors(): Promise<Doctor[]> {
  return Promise.resolve(MOCK_DATA);
}

export function getDoctor(id: string): Promise<Doctor> {
  const index = MOCK_DATA.findIndex((item) => item.id === id);
  return Promise.resolve(MOCK_DATA[index]);
}
