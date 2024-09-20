import React from 'react'

export default function WorkWith() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

      const brands = [
        "/image/workwith/workwith1.png",
        "/image/workwith/workwith2.png",
        "/image/workwith/workwith3.png",
        "/image/workwith/workwith4.png",
        "/image/workwith/workwith5.png",
        "/image/workwith/workwith6.png",
      ]
  return (
    <div>
      <div>
        <h5 clasName="text-secondary text-[18px] font-miniver">
        Partners & Clients
        </h5>
        <h1 clasName="#333333 text-[48px] ">
        We work with the best pepole
        </h1>
      </div>

      {/* slider section */}
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    </div>
  )
}
