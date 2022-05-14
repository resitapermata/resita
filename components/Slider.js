import Slider from "react-slick";
import React from "react";

class SliderApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
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

    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return;
    <div className="loader"></div>;

    return (
      <div>
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="pr-2">
              <div className="bg-white text-black p-5 h-[140px]">
                <h2 className="px-[20px] py-[20py] text-[32px] font-bold ">
                  {item.by}
                </h2>
                <p className="px-[20px] py-[20py] text-[12px]">
                  {item.testimony}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SliderApp;
