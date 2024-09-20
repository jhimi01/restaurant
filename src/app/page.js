import Aboutus from "@/components/Aboutus";
import Choose from "@/components/Choose";
import Dishes from "@/components/Dishes";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import WorkWith from "@/components/WorkWith";


export default function Home() {
  return (
   <main className="">
    <Hero />
    <Aboutus />
    <Choose />
    <Dishes />
    <Feedback />
    <WorkWith />
   </main>
  );
}
