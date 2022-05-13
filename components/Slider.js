import Slider from "react-slick";
import React from "react";

function SliderApp() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1.5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {[1, 2, 3].map((item) => (
          <div key={item} className="pr-2">
            <div className="bg-white text-black p-5">
              <h2 className="px-[20px] py-[20py] text-[32px] font-bold ">
                Blu Kicks
              </h2>
              <p className="px-[20px] py-[20py] text-[12px]">
                Places where you can leverage tools and software to free up time
                to focus on growing the business.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderApp;
