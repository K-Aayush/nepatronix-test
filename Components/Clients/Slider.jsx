"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Sliders = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <button className="hidden"></button>,
    previousArrow: <button className="hidden"></button>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-[1600px] p-[20px] mx-auto">
      <div className="slider-container">
        <Slider {...settings}>
          {Array.isArray(data) &&
            data?.map((item, index) => (
              <div key={index}>
                <Image
                  src={`/api/files${item?.image}`}
                  alt={`Client ${index}`}
                  width={200}
                  height={200}
                  className="w-[150px] h-[150px] p-[25px] object-contain object-center"
                />
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );``
};

export default Sliders;
