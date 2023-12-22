// components/SwiperComponent.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { createContext } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReactDOM from "react-dom";

const SwiperCom = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {" "}
        <img
          src={"/assets/courses/гар.jpg"}
          alt="star"
          className="h-full w-full object-cover object-center"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={"/assets/courses/бад.jpg"}
          alt="star"
          className="h-full w-full object-cover object-center"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={"/assets/courses/сагс.jpg"}
          alt="star"
          className="h-full w-full object-cover object-center"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={"/assets/courses/sport1.jpg"}
          alt="star"
          className="h-full w-full object-cover object-center"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCom;
