import { Specialty } from "./types";

const MOCK_DATA: Specialty[] = [
  {
    id: 1,
    name: "Medicina general",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. mi porta gravida at eget metus.",
    photoURL: "/default.png",
    iconURL: "/default.png",
    doctors: [],
  },
  {
    id: 2,
    name: "Odontología",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident reiciendis doloremque ut harum amet pariatur eveniet repudiandae iste laboriosam mollitia dolor molestias dolores iure nihil, possimus in recusandae? Id, autem.",
    photoURL: "/default.png",
    iconURL: "/default.png",
    doctors: [],
  },
];

export function getSpecialties(): Promise<Specialty[]> {
  return Promise.resolve(MOCK_DATA);
}

export function getSpecialty(id: string): Promise<Specialty> {
  const index = MOCK_DATA.findIndex(
    (specialist) => specialist.id === Number(id)
  );
  return Promise.resolve(MOCK_DATA[index]);
}
