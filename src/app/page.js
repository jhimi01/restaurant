import Aboutus from "@/components/Aboutus";
import Choose from "@/components/Choose";
import Dishes from "@/components/Dishes";
import Hero from "@/components/Hero";


export default function Home() {
  return (
   <main className="">
    <Hero />
    <Aboutus />
    <Choose />
    <Dishes />
   </main>
  );
}
