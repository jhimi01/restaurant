import Image from "next/image";
import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LuMailOpen } from "react-icons/lu";
import { SlClock } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="bg-primary text-white ">
      <div className="md:w-10/12 w-11/12 space-y-10 md:flex items-baseline justify-between gap-1 mx-auto py-10">
        {/* 1st section */}
        <div className="space-y-2 md:space-y-5">
          <h2 className="text-[32px] font-bold">RESTAURANT</h2>
          <p className="text-[18px] font-normal leading-[26px]">
            Subscribe our newsletter and get discount 25%off
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="text-[14px] px-5 rounded-s-lg py-2"
            />
            <button className="bg-secondary py-3 rounded-e-lg px-4 mb-0">
              <FaRegPaperPlane />
            </button>
          </div>
          <div className="flex items-center gap-5">
            <Image
              src="/image/socialicon/pinterest.png"
              width="500"
              height="500"
              alt="pinterest"
              className="h-[20px] w-[20px]"
            />
            <Image
              src="/image/socialicon/twitter.png"
              width="500"
              height="500"
              alt="twitter"
              className="h-[20px] w-[20px]"
            />
            <Image
              src="/image/socialicon/fb.png"
              width="500"
              height="500"
              alt="fb"
              className="h-[20px] w-[20px]"
            />
            <Image
              src="/image/socialicon/instagram.png"
              width="500"
              height="500"
              alt="instagram"
              className="h-[20px] w-[20px]"
            />
            <Image
              src="/image/socialicon/youtube.png"
              width="500"
              height="500"
              alt="youtube"
              className="h-[20px] w-[20px]"
            />
          </div>
        </div>

        {/* 2nd section */}
        <div className="space-y-2 md:space-y-5">
          <h2 className="font-bold text-[18px]">Contact us</h2>
          <div className="flex items-center gap-2 text-[18px]">
            <CiLocationOn />
            <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
          </div>
          <div className="flex items-center gap-2 text-[18px]">
            <IoCallOutline />
            <p>(480) 555-0103</p>
          </div>
          <div className="flex items-center gap-2 text-[18px]">
            <LuMailOpen />
            <p>M.Alyaqout@4house.Co</p>
          </div>
          <div className="flex items-center gap-2 text-[18px]">
            <SlClock />
            <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
          </div>
        </div>

        {/* 3rd section */}
        <div className="space-y-2 md:space-y-5">
          <h2 className="font-bold text-[18px]">Links</h2>
          <p>
            <a href="About us">About us</a>
          </p>{" "}
          <p>
            <a href="Contact Us">Contact us</a>
          </p>{" "}
          <p>
            <a href="Our Menu">Our Menu</a>
          </p>{" "}
          <p>
            <a href="team">Team</a>
          </p>
          <p>
            <a href="faq">Faq</a>
          </p>{" "}
        </div>

        {/* 4th section */}
        <div>
          <h2 className="font-bold text-[18px] mb-7">Instagram Gallery</h2>
          <div>
            <div className="grid grid-cols-3 gap-2">
              <Image
                src="/image/footer/footer1.png"
                width="500"
                height="500"
                alt="footer1"
                className="h-[100px] w-[100px]"
              />
              <Image
                src="/image/footer/footer2.png"
                width="500"
                height="500"
                alt="footer1"
                className="h-[100px] w-[100px]"
              />
              <Image
                src="/image/footer/footer3.png"
                width="500"
                height="500"
                alt="footer1"
                className="h-[100px] w-[100px]"
              />
              <Image
                src="/image/footer/footer4.png"
                width="500"
                height="500"
                alt="footer1"
                className="h-[100px] w-[100px]"
              />
              <Image
                src="/image/footer/footer5.png"
                width="500"
                height="500"
                alt="footer1"
                className="h-[100px] w-[100px]"
              />
              <Image
                src="/image/footer/footer6.png"
                width="500"
                height="500"
                alt="footer1"
                className="h-[100px] w-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#A52A2A] text-center py-3 text-[12px]  md:text-[15px] ">
        <div className="md:w-10/12 flex justify-center md:justify-between mx-auto">
          <h5>Copyright © 2024. All rights reserved</h5>
          <div className="md:flex items-center gap-6 hidden ">
            <p>Privacy Policy</p>
            <p>Term of Use</p>
            <p>Partner</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
