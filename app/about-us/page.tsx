"use client";

import { NavScreen, NavScreenMobile } from "@/components";
import {
  Abacate,
  Banana,
  Laranja,
  Maca,
  Tangirina,
  Uva,
} from "@/components/card-scroll/CardScroll";
import ListScroll from "@/components/list-scroll/ListScroll";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { useInView, InView } from "react-intersection-observer";
import ListCardScroll from "@/components/list-scroll/ListCardScroll";
import {
  Five,
  Four,
  One,
  Six,
  Three,
  Two,
} from "@/components/card-scroll/CardContent";

const features = [
  {
    id: "banana",
    text: "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    card: Banana,
  },
  {
    id: "maca",
    text: "aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ",
    card: Maca,
  },
  {
    id: "uva",
    text: "umquam eius modi tempora incidunt ut labore et",
    card: Uva,
  },
  {
    id: "laranja",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising p",
    card: Laranja,
  },
  {
    id: "abacate",
    text: "m ad minima veniam, quis nostrum exercitationem ullam",
    card: Abacate,
  },
  {
    id: "tangirina",
    text: "tias excepturi sint occaecati cupiditate non provident, similique sunt ",
    card: Tangirina,
  },
];

type Cards = {
  id: number;
  color: string;
  text: string;
  ref?: (node?: Element | null | undefined) => void;
};

const cards = [
  {
    id: 1,
    color: "bg-blue-100",
    text: "ola",
    card: One,
  },
  {
    id: 2,
    color: "bg-blue-200",
    text: "mundo",
    card: Two,
  },
  {
    id: 3,
    color: "bg-blue-300",
    text: "skdjksjdk",
    card: Three,
  },
  {
    id: 4,
    color: "bg-blue-400",
    text: "ioioioioio",
    card: Four,
  },
  {
    id: 5,
    color: "bg-blue-500",
    text: "qwqwqwqwq",
    card: Five,
  },
  {
    id: 6,
    color: "bg-blue-600",
    text: "zxzxzzxzx",
    card: Six,
  },
];

const AboutUs: React.FC = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const card3 = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (ref1.current) {
      gsap.to(".anime", {
        y: -1200,
        totalTime: 0,
        duration: 0.5,
        ease: "power3",
        paused: true,
        scrollTrigger: {
          trigger: ref1.current,
          start: "top 0%",
          end: "bottom 0%",
          scrub: 1,
        },
      });
    }
    if (ref2.current) {
      gsap.to(".anime2", {
        x: -1800,
        duration: 5,
        scrollTrigger: {
          trigger: ref2.current,
          start: "top center",
          end: "bottom 0%",
          scrub: 1,
        },
      });
    }

    const container = ref1.current;
    const element = card3.current;

    gsap.to(element, {
      scrollTrigger: {
        trigger: container,
        start: "top 0%", // O elemento deve começar no meio da div
        end: "center 0%", // O elemento deve terminar no meio da div
        onEnter: () => console.log("entrou"),
        onLeave: () => console.log("saiu"),
        // markers: true, // Para mostrar os marcadores do ScrollTrigger (opcional)
      },
    });
  }, []);

  const { ref: itemRef, inView: visibleItem } = useInView({
    threshold: 0.9,
  });

  console.log("page", visibleItem);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <main className="bg-bg-color-ligth">
      {/* <NavScreenMobile />
      <NavScreen />
      <div className=" flex pt-96 md:px-32 px-2 gap-20 items-start">
        <div className="w-full flex py-[50vh] ">
          <ul>
            {features.map((i) => (
              <li key={i.id}>
                <ListScroll id={i.id}>{i.text}</ListScroll>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-0 flex h-screen items-center">
          <div className="relative w-full aspect-square rounded-xl bg-gray-200">
            {features.map((item) => (
              <item.card id={item.id} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="  h-[200vh] flex  md:px-32 px-2 py-[200px] justify-center ">
        <div className="sticky w-[600px] flex  top-20  justify-center h-[550px] overflow-hidden bg-red-400 --tw-scroll-snap-strictness: snap-mandatory">
          <div ref={ref1} className="anime gap-10 ">
            <div className="  aspect-square w-[300px] bg-blue-100"></div>
            <div className="mt-10 aspect-square w-[300px] bg-blue-200"></div>
            <div className="mt-10 aspect-square w-[300px] bg-blue-300"></div>
            <div
              ref={card3}
              className="mt-10 aspect-square w-[300px] bg-blue-400"
            ></div>
            <div className="mt-10 aspect-square w-[300px] bg-blue-500"></div>
            <div className="mt-10 aspect-square w-[300px] bg-blue-600"></div>
            <div className="my-10 aspect-square w-[300px] bg-blue-700"></div>
          </div>
        </div>

      </div> */}
      <div className="flex h-screen w-full"></div>
      <div ref={itemRef} className="scrollDiv  flex     px-[100px]">
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          mousewheel={{
            eventsTarget: ".scrollDiv",
            releaseOnEdges: true,
            thresholdDelta: 1,
          }}
          modules={[Mousewheel, Navigation]}
          className="mySwiper"
        >
          <div className="flex  w-full  justify-center items-center ">
            {cards.map((i) => (
              <SwiperSlide
                key={i.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListCardScroll id={i.id}>
                  <h1 className="text-5xl font-bold text-gray-500">{i.text}</h1>
                </ListCardScroll>
              </SwiperSlide>
            ))}
          </div>
          <div
            ref={navigationNextRef}
            className=" text-3xl text-gray-500 w-10 h-10  absolute top-[50%] right-[5%] z-10"
          >
            &gt;
          </div>
          <div
            ref={navigationPrevRef}
            className=" text-3xl text-gray-500 w-10 h-10  absolute top-[50%] left-[5%] z-10"
          >
            &lt;
          </div>
        </Swiper>
        <div className="flex  w-full justify-center items-center rounded-xl">
          <div className="relative  w-full aspect-square rounded-xl ">
            {cards.map((i) => (
              <i.card key={i.id} id={i.id}></i.card>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-full h-40 px-[300px] bg-gray-200">
        <label
          form="default-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Default range
        </label>
        <input
          className="custom-range"
          type="range"
          min="1"
          max="100"
          step="1"
          // value="15"
        />
      </div>
    </main>
  );
};

export default AboutUs;
