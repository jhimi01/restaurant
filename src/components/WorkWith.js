"use client";
import Slider from "react-slick";
import Image from "next/image";

export default function WorkWith() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // For tablets and small desktops
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 1000,
        },
      },
    ],
  };

  const brands = [
    {
      img: "/image/workwith/workwith1.png",
    },
    {
      img: "/image/workwith/workwith2.png",
    },

    {
      img: "/image/workwith/workwith4.png",
    },
    {
      img: "/image/workwith/workwith5.png",
    },
    {
      img: "/image/workwith/workwith6.png",
    },
    {
      img: "/image/workwith/workwith3.png",
    },
  ];

  return (
    <div className="wrapper my-20">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h5 className="text-secondary text-[18px] font-miniver">
          Partners & Clients
        </h5>
        <h1 className="text-[#333333] text-[30px] md:text-[48px]">
          We work with the best people
        </h1>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="p-4">
              <div className="h-[120px] md:h-[180px] flex items-center justify-center w-[120px] md:w-[180px] p-4 rounded-full">
                <Image
                  src={brand.img}
                  alt="brands"
                  width="500"
                  height="500"
                  className="h-auto w-auto object-center"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
