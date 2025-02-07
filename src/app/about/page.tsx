"use client"

import react from "react";

import Abouted from "../Components/Abouted";
import TeamMember from "../Components/TeamMember";
import ClientSay from "../Components/ClientSay";
import OurFoodMenu from "../Components/OurFoodMenu";

export default function Aboutus() {
  return (
    <div>
      <div>
        <Abouted/>
      </div>
      <div className="my-10">
        <TeamMember/>
      </div>
      <div >
        <ClientSay/>
      </div>
        <div className="my-20">
      <OurFoodMenu/>
      </div>
    </div>

  );
}