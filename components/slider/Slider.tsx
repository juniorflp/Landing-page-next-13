"use client";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  EffectCards,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import { ReactNode } from "react";
import "./Slider.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const slider = ({ children, settings }: SliderProps) => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Mousewheel,
        EffectCards,
        EffectCoverflow,
      ]}
      effect={"cards"}
      {...settings}
    >
      {children}
    </Swiper>
  );
};

export default slider;
