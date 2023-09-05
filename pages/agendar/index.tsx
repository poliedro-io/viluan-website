import Appointment from "@/components/Appointment";
import Header from "@/components/Header";
import React from "react";

export default function AppointmentPage() {
  return (
    <div className="section">
      <Header
        title={"Agenda tu hora"}
        uppertitle={"agendamiento"}
        align={"center"}
      />

      <div>
        <Appointment />
      </div>
    </div>
  );
}
