import Image from "next/image";
import React from "react";

export default function Choose() {
  return (
    <div className="md:w-9/12 mx-auto md:flex items-center gap-10 md:gap-20 my-20">
      {/* image section */}
      <div className="md:w-[40%] w-11/12 mx-auto text-headerdarktect space-y-5">
        <Image
          src="/image/home/image28.png"
          alt="why people choose"
          width="300"
          height="400"
          className="w-full"
        />
      </div>

      {/* contents */}
      <div className="md:w-[60%] w-11/12 mt-10 md:mt-0=font-nunito mx-auto text-headerdarktect space-y-5">
        <h1 className="md:text-[50px] text-[30px] text-subtext font-bold">
          Why People Choose us?
        </h1>

        <div className="space-y-5">
          <div className="flex shadow-md items-center rounded-xl justify-center gap-5 p-2">
            <div>
              <div className="shadow-md h-[80px] flex items-center justify-center w-[80px] p-4 rounded-full">
                <Image
                  src="/image/icons/icon1.png"
                  alt="why people choose"
                  width="1000"
                  height="1000"
                  // className=" rounded-full h-[100px] w-[100px] shadow-xl"
                />
              </div>
            </div>
            <div className="">
              <h4 className="md:text-[31px] font-semibold">
                Convenient and Reliable
              </h4>
              <p className="md:text-[20px] font-medium leading-[26px]">
                Whether you dine in, take out, or order delivery, our service is
                convenient, fast, and reliable, making mealtime hassle-free.
              </p>
            </div>
          </div>
          <div className="flex shadow-md items-center rounded-xl justify-center gap-5 p-2">
            <div>
              <div className="shadow-md h-[80px] flex items-center justify-center w-[80px] p-4 rounded-full">
                <Image
                  src="/image/icons/icon2.png"
                  alt="why people choose"
                  width="1000"
                  height="1000"
                  // className=" rounded-full h-[100px] w-[100px] shadow-xl"
                />
              </div>
            </div>
            <div className="">
              <h4 className="md:text-[31px] font-semibold">
                Variety of Options
              </h4>
              <p className="md:text-[20px] font-medium leading-[26px]">
                From hearty meals to light snacks, we offer a wide range of
                options to suit every taste and craving.
              </p>
            </div>
          </div>
          <div className="flex shadow-md items-center rounded-xl justify-center gap-5 p-2">
            <div>
              <div className="shadow-md h-[80px] flex items-center justify-center w-[80px] p-4 rounded-full">
                <Image
                  src="/image/icons/icon3.png"
                  alt="why people choose"
                  width="1000"
                  height="1000"
                  // className=" rounded-full h-[100px] w-[100px] shadow-xl"
                />
              </div>
            </div>
            <div className="">
              <h4 className="md:text-[31px] font-semibold">Eat Burger</h4>
              <p className="md:text-[20px] font-medium leading-[26px]">
                Our burgers are grilled to perfection, with juicy patties and
                flavorful toppings that make every bite a delicious experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
