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
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { start } from "repl";

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

const AboutUs: React.FC = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const card3 = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (ref1.current) {
      gsap.to(".anime", {
        y: -1200,
        duration: 0.9,
        scrollTrigger: {
          trigger: ref1.current,
          start: "top 0%",
          end: "bottom 0%",
          scrub: 1,
          pin: true,
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
        markers: true, // Para mostrar os marcadores do ScrollTrigger (opcional)
      },
    });
  }, []);

  return (
    <main className="bg-bg-color-ligth">
      <NavScreenMobile />
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
      <div className="h-[200vh] flex  md:px-32 px-2 py-[200px] justify-center ">
        <div className="sticky w-[600px] flex  top-20  justify-center h-[550px] overflow-hidden bg-red-400">
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
        {/* <div className="sticky w-[600px] flex  top-10 pt-[100px] justify-start h-[500px] overflow-hidden">
          <div ref={ref2} className="anime2 flex  gap-1">
            <div className="flex aspect-square w-[300px] bg-blue-100"></div>
            <div className="flex aspect-square w-[300px] bg-blue-200"></div>
            <div className="flex aspect-square w-[300px] bg-blue-300"></div>
            <div className="flex aspect-square w-[300px] bg-blue-400"></div>
            <div className="flex aspect-square w-[300px] bg-blue-500"></div>
            <div className="flex aspect-square w-[300px] bg-blue-600"></div>
            <div className="flex aspect-square w-[300px] bg-blue-700"></div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default AboutUs;
