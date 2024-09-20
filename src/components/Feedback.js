"use client";
import Slider from "react-slick";
import Image from "next/image";

export default function Feedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const feedbacks = [
    {
      name: "John Doe",
      feedback:
        "I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.",
      profession: "UI/UX DESIGNER",
    },
    {
      name: "Jane Smith",
      feedback:
        "I absolutely love the way your restaurant is decorated and the warm ambiance. The food was fantastic, and I felt like I was sharing my favorite dishes with my family and friends. The service was also excellent, and the staff was always friendly and attentive.I was sharing my favorite dishes with my family and friends. The service was also excellent, and the staff was always friendly and attentive.",
      profession: "FRONTEND DEVELOPER",
    },
    {
      name: "Alice Johnson",
      feedback:
        "I loved the way your restaurant was set up, I was sharing my favorite dishes with my family and friends. The service was also excellent, and the staff was always friendly and attentive.I was sharing my favorite dishes with my family and friends. The service was also excellent, and the staff was always friendly and attentive.",
      profession: "APP DEVELOPER",
    },
  ];

  return (
    <div className="wrapper my-24">
      <div className="flex justify-between">
        {/* slider section */}
        <div className="w-1/2">
          <h1 className="text-[50px] text-[#000000] font-bold">
            Customer <span className="text-primary">Feedback</span>
          </h1>
          {/* SLIDER WILL BE HERE */}

          <div className="slider-container">
            <Slider {...settings}>
              {feedbacks.map((feedback, index) => (
                <div key={index} className="p-5 relative">
                  <p className="text-[#3d3d3d] text-[20px]">
                    {feedback.feedback}
                  </p>

                  <div className="flex items-center mt-5">
                    <div className="h-[80px] flex items-center justify-center w-[80px] p-4 rounded-full">
                      <Image
                        src="/image/user.png"
                        alt="feedback thumb"
                        width="500"
                        height="500"
                      />
                    </div>
                    <div>
                      <h4 className="text-primary text-[24px] font-bold">
                        {feedback.name}
                      </h4>
                      {/* <p>{feedback.feedback}</p> */}
                      <p className="text-[18px] font-medium text-[#000]">
                        {feedback.profession}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* img section */}
        <div>
          <Image
            src="/image/feedback.png"
            alt="feedback thumb"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}
