export interface Doctor {
  phone: string;
  bio: string;
  id: string;
  email: string;
  schedule: Schedule;
  specialty: Specialty;
  name: string;
  imageURL: string;
  index: number;
}

export interface Schedule {
  dailySchedule: DailySchedule[];
  appointmentsDurationInMinutes: number;
  minutesBetweenAppointments: number;
  windows: Window[];
  workTime: WorkTime;
  availableFrom: null;
  availableTo: null;
}

export interface DailySchedule {
  isAvailable: boolean;
  appointments: Appointment[];
  day: number;
}

export interface Appointment {
  isAvailable: boolean;
  time: number[];
}

export interface Window {
  startTime: string;
  endTime: string;
}

export interface WorkTime {
  start: string;
  end: string;
}

export interface Specialty {
  imageURL: string;
  name: string;
  description: string;
  id: string;
  index: number;
}

export interface Service {
  imageURL: string;
  name: string;
  description: string;
  id: string;
  index: number;
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

export interface Specialty {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  iconURL?: string;
  // doctors: string[]; // DoctorID[]
}

export interface User {
  name: string;
  rut: string;
  phone: string;
  email?: string;
}
export interface ScheduledAppointment {
  date: Date;
  doctor: ShortItem;
  specialty: ShortItem;
  id: string;
  time: number[];
  customer: Customer;
}

export interface Customer {
  rut: string;
  phone: string;
  name: string;
  email: string;
}

export interface ShortItem {
  id: string;
  name: string;
}
