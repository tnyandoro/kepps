import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "../assets/images/logo.jpeg";
import water from "../assets/images/water.jpg";
import analyse from "../assets/images/analyse.jpg";
import electricity from "../assets/images/electricity.jpg";

const slides = [
  { img: water, text: "Innovative Water Solutions" },
  { img: analyse, text: "Advanced Data Analysis" },
  { img: electricity, text: "Reliable Energy Systems" },
];

const Hero = () => {
  return (
    <section className="relative w-full">
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[500px] w-full bg-cover bg-center"

              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              {/* Transparent Overlay */}
              <div className="absolute inset-0 flex items-center justify-center ">
                <div className="inner text-center px-6 py-8 rounded-md bg-black">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
                    {slide.text}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mt-2">
                    Transforming the future with technology
                  </p>
                  <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
