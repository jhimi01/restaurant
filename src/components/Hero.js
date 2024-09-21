import { useState } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

export default function Hero() {
  // Define the available images and background colors
  const images = [
    { src: "/image/home/food1.png", bgColor: "bg-primary" },
    { src: "/image/home/food2.png", bgColor: "bg-blue" },
    { src: "/image/home/food3.png", bgColor: "bg-pink" },
    { src: "/image/home/food4.png", bgColor: "bg-green" },
  ];

  // Set the default image and background color
  const [selectedImage, setSelectedImage] = useState(images[0].src);
  const [bgColor, setBgColor] = useState(images[0].bgColor);

  // Handle the click event to change the image and background color
  const handleImageClick = (image) => {
    setSelectedImage(image.src);
    setBgColor(image.bgColor);
  };

  return (
    <div
      className={`overflow-hidden rounded-b-3xl pb-20 pt-20 relative ${bgColor}`}
    >
      <div className="md:h-[1079px] h-[500px] w-[500px] -z-2 md:left-[-156.98px] md:top-[-360px] -top-10 -right-52md:w-[1079px] rounded-full bg-[#ffffff31] absolute"></div>
      <div className="flex wrapper items-center justify-center mt-14">
        <div className="w-1/2 mx-auto">
          <h1 className="font-sanchez text-[96px] text-white">BREAKFAST</h1>
          <p className="text-[20px] text-white">
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet. Eating a healthy
            breakfast can improve concentration and performance, boost physical
            endurance, and lower cholesterol levels.
          </p>
          <div className="flex items-center relative space-x-4">
            {images.map((image, index) => (
              <Image
                key={index}
                alt="items"
                width="300"
                height="300"
                src={image.src}
                className="cursor-pointer"
                onClick={() => handleImageClick(image)} // Change image and bg color on click
              />
            ))}
          </div>
          <div className="relative mt-20">
            <input
              type="text"
              placeholder="Search..."
              className="placeholder:text-black w-full text-[24px] font-semibold py-2 px-12 rounded-full"
            />
            <IoSearch className="absolute top-4 left-5 text-2xl" />
          </div>
        </div>
        <div className="w-1/2 relative z-10 left-0 mx-auto">
          {/* Large image that updates dynamically */}
          <Image
            alt="selected item"
            width="700"
            height="700"
            src={selectedImage}
          />
        </div>
      </div>

      <div className="h-[500px] md:h-[1000px] right-[-200px] md:right-[-350px] bottom-[-100px] md:bottom-[-500px] w-[500px] md:w-[1000px] rounded-full bg-[#ffffff31] -z-3 absolute"></div>
    </div>
  );
}
