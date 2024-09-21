import Image from "next/image";
import React from "react";
import { CiPlay1 } from "react-icons/ci";

export default function Aboutus() {
  return (
    <div className="md:w-10/12 mx-auto flex md:flex-row flex-col-reverse gap-10 my-20">
      <div data-aos="fade-right" data-aos-duration="500" data-aos-easing="linear" className="md:w-1/2 w-11/12 mx-auto text-headerdarktect space-y-5">
        <h5 className="text-[18px] capitalize text-primary font-semibold">
          PIZZA DELIVERY
        </h5>
        <h1 className="text-[30px] font-poppins md:text-[55px] font-semibold">
          Get Started Today!
        </h1>
        <div className="h-1 w-60 bg-primary"></div>

        <h3 className="md:text-[26px] font-poppins text-[16px] font-semibold">
          Everything you need to build an amazing food restaurant responsive
          website.
        </h3>
        <p className="text-[14px] md:text-[17px]">
          Hendrerit in vulputate velit esse molestie consequat, vel illum dolore
          eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
          dignissim qui blandit praesent luptatum zzril delenit augue duis.
        </p>

        <div className="flex gap-5 pt-5 md:pt-10">
          <div className="shadow-xl md:shadow-none p-2">
            <Image
              src="/image/home/Simplification.png"
              width="60"
              height="60"
              alt="icon"
            />
            <h4 className="font-semibold text-[10px] md:text-[20px]">
              Food Order
            </h4>
            <p className=" text-[8px] md:text-[15px]">
              Food is the necessity of life. It provides nutrition, sustenance
              growth to human body.
            </p>
          </div>
          <div className="shadow-xl md:shadow-none p-2">
            <Image
              src="/image/home/Simplification.png"
              width="60"
              height="60"
              alt="icon"
            />
            <h4 className="font-semibold text-[10px] md:text-[20px]">
              Food Order
            </h4>
            <p className=" text-[8px] md:text-[15px]">
              Food is the necessity of life. It provides nutrition, sustenance
              growth to human body.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="linear" className="md:w-1/2 w-11/12 mx-auto md:space-y-5">
        <div className="flex items-center">
          <h5 className="text-primary font-miniver text-[18px]">About us</h5>
          <span className="h-[1px] ml-2 mt-1 w-5 bg-primary"></span>
        </div>
        <h1 className="text-[#333333] font-roboto text-[30px] md:text-[48px] font-bold leading-[45px] md:leading-[56px]">
          Food is an important part Of a balanced Diet
        </h1>
        <p className="text-[#4F4F4F] text-[14px] md:text-[16px] font-Roboto pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="text-white flex md:justify-start justify-between items-center gap-10 pt-8">
          <button className="bg-primary px-4 py-2 md:py-3 md:px-6 md:text-[18px] text-[8px] rounded-lg">
            Show more
          </button>
          <div className="flex items-center  gap-2">
            <div className="bg-primary hover:bg-[#195A00] rounded-full md:p-4 p-2  md:text-2xl font-bold inline-block cursor-pointer  ">
              <CiPlay1 />
            </div>
            <p className="text-[#333333] font-semibold text-[14px] md:text-[16px]">
              Watch video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
