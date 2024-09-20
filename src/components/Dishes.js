import React from "react";
import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export default function Dishes() {
  const dishes = [
    {
      name: "Breakfast Food",
      price: "$12.99",
      rating: 4.5,
      image: "/image/bestseller/reviewfood1.png",
    },
    {
      name: "Health Breakfast",
      price: "$10.99",
      rating: 4.7,
      image: "/image/bestseller/reviewfood2.png",
    },
    {
      name: "Breakfast Food",
      price: "$13.99",
      rating: 4.6,
      image: "/image/bestseller/reviewfood3.png",
    },
    {
      name: "Breakfast Food",
      price: "$9.99",
      rating: 4.3,
      image: "/image/bestseller/reviewfood4.png",
    },
    {
      name: "Breakfast Food",
      price: "$18.99",
      rating: 4.8,
      image: "/image/bestseller/reviewfood5.png",
    },
    {
      name: "Breakfast Food",
      price: "$11.49",
      rating: 4.4,
      image: "/image/bestseller/reviewfood6.png",
    },
  ];

  const stars = {
    itemShapes: Star,
    activeFillColor: "#FF9E0C",
    inactiveFillColor: "#FF9E0C",
  };

  return (
    <div className="wrapper">
      {/* header */}
      <div className="font-nunito text-center md:w-[60%] mx-auto">
        <h2 className="text-[30px] md:text-[55px] font-bold ">Our best Seller Dishes</h2>
        <p className="text-[16px] md:text-[25px] font-normal leading-[19px] md:leading-[30px] text-[#5C5C5C]">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomatoe all tossed in your choice of
          dressing.
        </p>
      </div>

      {/* dishesh items */}
      <div className="grid grid-cols-2 md:mt-20 mt-5  md:grid-cols-3 gap-2 md:gap-6">
        {dishes.map((dish, index) => (
          <div key={index} className="">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full object-cover"
            />
            <div className="p-2 rounded-xl shadow -md">
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] md:text-[31px] font-nunito mt-4 font-medium">
                  {dish.name}
                </h3>
                <button className="bg-[#F03328] text-white text-[10px] px-4 py-2 rounded-full">
                  Buy Now
                </button>
              </div>

              {/* <p className="text-yellow-500">Rating: {dish.rating}⭐</p> */}
              <div className="flex justify-between">
                <Rating
                  style={{ maxWidth: 150 }}
                  itemStyles={stars}
                  value={dish.rating}
                />
                <p className="text-[#000] text-[13px] md:text-[34px] font-semibold mt-2 ">
                  {dish.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
