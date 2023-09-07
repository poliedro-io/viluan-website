import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Appointment from "@/components/appointment/Appointment";
import React from "react";

export default function AppointmentPage() {
  return (
    <>
      <PageHero bgClass="bg-appointment-hero" />
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
    </>
  );
}
