import Slider from "react-slick";
import React from "react";

function SliderApp() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1.5,
  };
  return (
    <div>
      <Slider {...settings}>
        {[1, 2, 3].map((item) => (
          <div key={item} className="pr-2">
            <div className="bg-white text-black p-5">
              <h2>Blu Kicks</h2>
              <p>
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
