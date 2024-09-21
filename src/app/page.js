import Aboutus from "@/components/Aboutus";
import Blogs from "@/components/Blogs";
import Choose from "@/components/Choose";
import Dishes from "@/components/Dishes";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import HowWork from "@/components/HowWork";
import TeamMember from "@/components/TeamMember";
import WorkWith from "@/components/WorkWith";


export default function Home() {
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
