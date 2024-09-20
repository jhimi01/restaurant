import Image from "next/image";
import { IoSearch } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="bg-primary overflow-hidden rounded-b-3xl pb-20 relative">
      <div className="h-[1079px] -z-2 left-[-156.98px] top-[-360px] w-[1079px] rounded-full bg-[#ffffff31] absolute"></div>
      <div className="flex wrapper items-center justify-center mt-14">
        <div className="w-1/2 mx-auto">
          <h1 className="text-[96px] text-white">BREAKFAST</h1>
          <p className="text-[20px] text-white">
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet. Eating a healthy
            breakfast can improve concentration and performance, boost physical
            endurance, and lower cholesterol levels.
          </p>
          <div className="flex items-center relative">
            <Image
              alt="items"
              width="300"
              height="300"
              src="/image/home/food1.png"
            />
            <Image
              alt="items"
              width="300"
              height="300"
              src="/image/home/food2.png"
            />
            <Image
              alt="items"
              width="300"
              height="300"
              src="/image/home/food3.png"
            />
            <Image
              alt="items"
              width="300"
              height="300"
              src="/image/home/food4.png"
            />
          </div>
          <div className="relative mt-20">
          <input type="text" placeholder="Search..." className="placeholder:text-black w-full text-[24px] font-semibold py-2 px-12 rounded-full" />
          <IoSearch className="absolute top-4 left-5 text-2xl" />
          </div>
        </div>
        <div className="w-1/2 relative z-10 mx-auto">
        <Image
              alt="items"
              width="700"
              height="700"
              src="/image/home/bigimg.png"
            />
        </div>
      </div>

      <div className="h-[1000px] right-[-350px] bottom-[-500px] w-[1000px] rounded-full bg-[#ffffff31] -z-2 absolute"></div>
    </div>
  );
}
