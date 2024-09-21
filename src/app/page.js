"use client";

import Aboutus from "@/components/Aboutus";
import Blogs from "@/components/Blogs";
import Choose from "@/components/Choose";
import Dishes from "@/components/Dishes";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import HowWork from "@/components/HowWork";
import TeamMember from "@/components/TeamMember";
import WorkWith from "@/components/WorkWith";




import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import { useEffect } from "react";

export default function Home() {


  
  useEffect(() => {
    AOS.init();
  }, []);
  
  const style = {
    WebkitTextFillColor: "transparent",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "#666",
  };



  return (
   <main className="">
    <Hero />
    <Aboutus />
    <Choose />
    <Dishes />
    <Feedback />
    <TeamMember />
    <HowWork />
    <Blogs />
    <WorkWith />
   </main>
  );
}
