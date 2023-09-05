interface Doctor {
  id: number;
  name: string;
  // speciality: Specialty;
  speciality: string;
  email: string;
  phone: string;
  photoURL: string;
  summary: string;
}

interface Specialty {
  id: number;
  name: string;
  description: string;
  photoURL: string;
  iconURL: string;
  doctors: Doctor[];
}

export { Doctor, Specialty };
