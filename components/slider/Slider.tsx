"use client";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactNode } from "react";
import "./SliderStyle.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const slider = ({ children, settings }: SliderProps) => {
  return (
    <Swiper
      className="swiper_container"
      modules={[Navigation, Pagination, Mousewheel, EffectCoverflow]}
      {...settings}
    >
      {children}
    </Swiper>
  );
};

export default slider;
