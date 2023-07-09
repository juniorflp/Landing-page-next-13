"use client";

import React, { useState } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import imageIa1 from "../../public/assets/ia1.png";
import imageIa2 from "../../public/assets/ia2.png";
import CardHome from "./CardHome";
import { Slider } from "..";
import Image from "next/image";
import styles from "./animationPhoto.module.css";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const Section2 = () => {
  const settings: SwiperProps = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <>
      <section className="hero mt-36  px-32 pb-7">
        <div className="flex flex-wrap justify-evenly ">
          <CardHome
            image={imageIa1}
            text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature."
            title="IA GENERATE IMAGE"
          />
          <CardHome
            image={imageIa2}
            text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots."
            title="IA GENERATE IMAGE"
          />
        </div>
        <div className="flex mt-36 px-28 ">
          <Slider settings={settings}>
            {fotos.map((f, i) => (
              <SwiperSlide key={i}>
                <div className={`${styles.photo}`}>
                  <Image
                    src={f.img}
                    layout="intrinsic"
                    objectFit="cover"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ArrowLeftCircle
                  size={40}
                  color="#ffff"
                  name="arrow-back-outline"
                />
              </div>
              <div className="swiper-button-next slider-arrow">
                <ArrowRightCircle
                  size={40}
                  color="#ffff"
                  name="arrow-forward-outline"
                />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Section2;

const fotos = [
  { img: imageIa1 },
  { img: imageIa1 },
  { img: imageIa1 },
  { img: imageIa1 },
];
