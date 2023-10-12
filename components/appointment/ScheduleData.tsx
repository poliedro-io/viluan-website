"use client";
import { getAppointments } from "@/services/ApiService";
import { DailySchedule, Doctor, Schedule, ScheduledAppointment } from "@/types";
import {
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  isAfter,
  isBefore,
  isDate,
  isPast,
  isToday,
  startOfMonth,
} from "date-fns";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Calendar, { TileDisabledFunc } from "react-calendar";
import Button from "../Button";
import Spinner from "../Spinner";
import AvailableHours from "./AvailableHours";

interface ScheduleProps {
  setStep: Dispatch<SetStateAction<number>>;
  date: Date | null;
  setDate: (date: Date | null) => void;
  time: [number, number] | null;
  setTime: (time: [number, number] | null) => void;
  doctor: Doctor;
}
type CalendarDatePiece = Date | null;
type CalendarDate = CalendarDatePiece | [CalendarDatePiece, CalendarDatePiece];

export default function ScheduleData({
  setStep,
  date,
  setDate,
  time,
  setTime,
  doctor,
}: ScheduleProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [appointments, setAppointments] = useState<ScheduledAppointment[]>([]);
  useEffect(() => {
    setIsLoading(true);
    getAppointments(doctor.id, date as Date)
      .then((appointments) => setAppointments(appointments))
      .finally(() => setIsLoading(false));
  }, [date, doctor.id]);

  const today = new Date();
  const availableDates = getAvailableDates(doctor.schedule, date as Date);
  const availableHours = getAvailableHours(
    date,
    appointments,
    doctor.schedule?.dailySchedule
  );

  const handleDateChange = (date: CalendarDate) => {
    setDate(date as Date);
    setTime(null);
  };

  const isDateDisabled: TileDisabledFunc = ({ date, view }) =>
    view === "month" && !availableDates.includes(date.toDateString());

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-lg mb-4 font-bold">Fecha</h1>
          <Calendar
            className="react-calendar"
            tileDisabled={isDateDisabled}
            locale="es"
            minDate={today}
            onChange={handleDateChange}
            value={date}
          />
        </div>

        <div className="flex-grow relative">
          {isLoading && (
            <div className="absolute w-full h-full flex justify-center items-center bg-white bg-opacity-75">
              <Spinner />
            </div>
          )}
          <h1 className="text-lg mb-4 font-bold">Horarios disponibles</h1>
          <AvailableHours
            hours={availableHours}
            selectHour={setTime}
            selectedHour={time}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 max-w-md ml-auto mt-10">
        <div></div>
        <Button
          mode="outline"
          isDisabled={!date || !time}
          action={() => setStep(2)}
          label="Siguiente"
        />
      </div>
    </>
  );
}

function getAvailableDates(schedule: Schedule, month: Date) {
  const dates = eachDayOfInterval({
    start: startOfMonth(month),
    end: endOfMonth(month),
  }).filter((date) => isAvailableDate(date, schedule));
  return dates.map((d) => d.toDateString());
}

function isAvailableDate(date: Date, schedule?: Schedule) {
  if (!schedule) return false;
  const { dailySchedule, availableFrom, availableTo } = schedule;
  if (isPast(endOfDay(date))) return false;
  const availableWeekDays = dailySchedule
    .filter((day) => day.isAvailable)
    .map(({ day }) => day);
  if (!availableWeekDays.includes(date.getDay())) return false;
  if (availableFrom && isBefore(date, availableFrom)) return false;
  if (availableTo && isAfter(date, availableTo)) return false;
  return true;
}

function getAvailableHours(
  _date: CalendarDate,
  appointments: ScheduledAppointment[],
  dailySchedule?: DailySchedule[]
) {
  if (!dailySchedule || !_date || !isDate(_date)) return [];
  const date = _date as Date;

  const weekDay = date.getDay();
  const appointmentsTimes = appointments.map(({ time }) => time.toString());
  let availableAppointments = dailySchedule[weekDay].appointments;
  if (isToday(date)) {
    availableAppointments = availableAppointments.filter(({ time }) => {
      const now = new Date();
      const minutes = now.getHours() * 60 + now.getMinutes();
      return time[0] > minutes;
    });
  }
  const availableHours = availableAppointments
    .filter((a) => a.isAvailable)
    .map(({ time }) => time)
    .filter((time) => !appointmentsTimes.includes(time.toString()));
  return availableHours as [number, number][];
}
