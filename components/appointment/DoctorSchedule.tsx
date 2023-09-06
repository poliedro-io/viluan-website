import { Doctor } from "@/types";
import React from "react";

interface DoctorScheduleProps {
  doctor: Doctor;
  withInfo?: boolean;
}

export default function DoctorSchedule({
  doctor,
  withInfo,
}: DoctorScheduleProps) {
  // fetchDoctorSchedule

  return (
    <div className="card min-h-[150px] p-4 grid grid-cols-3 mb-4 w-full">
      {withInfo && (
        <div className="col-span-1">
          <h2>{doctor.name}</h2>
        </div>
      )}
      <div className="col-span-2">HORAS DISPONIBLES</div>
    </div>
  );
}
