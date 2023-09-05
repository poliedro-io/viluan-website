import { Doctor } from "./types";

const MOCK_DATA: Doctor[] = [
  {
    id: 1,
    name: "Dr. Juan Perez",
    email: "",
    phone: "",
    photoURL: "/default.png",
    speciality: "Medicina general",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. mi porta gravida at eget metus.",
  },
  {
    id: 2,
    name: "Dra. Maria Salvia",
    email: "",
    phone: "",
    photoURL: "/default.png",
    speciality: "Odontología",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident reiciendis doloremque ut harum amet pariatur eveniet repudiandae iste laboriosam mollitia dolor molestias dolores iure nihil, possimus in recusandae? Id, autem.",
  },
  {
    id: 3,
    name: "Dr. Juan Salvia",
    email: "",
    phone: "",
    photoURL: "/default.png",
    speciality: "Otro mas",
    summary:
      "Quis, dignissimos tempore ipsum quibusdam perferendis mollitia aliquam at accusamus distinctio officiis consectetur",
  },
];

export function getDoctors(): Promise<Doctor[]> {
  return Promise.resolve(MOCK_DATA);
}

export function getDoctor(id: string): Promise<Doctor> {
  const index = MOCK_DATA.findIndex((item) => item.id === Number(id));
  return Promise.resolve(MOCK_DATA[index]);
}
