interface Doctor {
  id: string;
  name: string;
  specialty: string; //SpecialtyID
  email: string;
  phone: string;
  photoURL: string;
  summary: string;
}

interface Specialty {
  id: string;
  name: string;
  description: string;
  photoURL: string;
  iconURL: string;
  // doctors: string[]; // DoctorID[]
}

interface User {
  name: string;
  rut: string;
  phone: string;
  email?: string;
}

interface Schedule {
  specialty: id; // SpecialtyID
  doctor: string; // DoctorID
  date: Date;
  time: string;
}

export { Doctor, Specialty, User, Schedule };
