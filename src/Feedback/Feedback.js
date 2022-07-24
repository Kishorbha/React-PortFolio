import React from "react";
import "./feedback.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const Feedback = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Jon Doe",
      position: "Full stack software developer",
    },

    {
      img: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Muller",
      position: "UI/UX Designer",
    },
    {
      img: "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Charlotte",
      position: "Javascript developer",
    },
    {
      img: "https://images.pexels.com/photos/2776582/pexels-photo-2776582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Alexander",
      position: "Node js developer",
    },
    {
      img: "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Emily",
      position: "Nuxt js developer",
    },

    {
      img: "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Elizabeth",
      position: "Next js developer",
    },
    {
      img: "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Jacob",
      position: "Angular js developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },

    {
      img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Django developer",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container feedback-slider" id="testimonial">
      
     <div className="section-title">
        <Flip left>
          <h5>Testimonial</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <div className="feedbck-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Fade left>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="card content-slider" key={index}>
                  <img
                    src={item.img}
                    alt="slider image"
                    className="center-image"
                  />
                  <p>{item.content}</p>
                  <h4>{item.name}</h4>
                  <p>{item.position}</p>
                </div>
              </div>
            </Fade>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
