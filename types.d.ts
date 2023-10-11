interface Doctor {
  id: string;
  name: string;
  specialty: Specialty;
  email: string;
  phone: string;
  imageURL: string;
  bio: string;
  socials?: Social[];
}

interface Social {
  name:
    | "facebook"
    | "instagram"
    | "twitter"
    | "linkedin"
    | "youtube"
    | "whatsapp"
    | "web";
  url: string;
}

interface Specialty {
  id: string;
  name: string;
  description: string;
  imageURL: string;
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

export { Doctor, Schedule, Specialty, User };
