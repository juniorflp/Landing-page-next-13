import React, { useState } from "react";
import { NavScreen, NavScreenMobile } from "@/components";

const Hero = () => {
  return (
    <>
      <NavScreenMobile />
      <NavScreen />
      <div className="hero h-screen   md:px-32 px-2 transition ease-in-out duration-600">
        <div className="xl:mt-[38%] lg:mt-[36%] mt-[99%]   sm:w-[79%] w-[100%] flex flex-col gap-3">
          <h1 className="lg:text-[55px] xl:text-[70px] text-[24px] font-semibold leading-tight ">
            We are a group of creative people
          </h1>
          <h1 className="lg:text-[55px] xl:text-[70px] text-[24px]  font-semibold leading-tight">
            who believe in great ideas.
          </h1>
          <p className="md:text-[16px] text-[14px] xl:text-[20px]  leading-tight text-font-gray">
            WEBSITE | BRANDING | UI/UX | VISUAL | ECOMMERCE | IA
          </p>
        </div>
        <div className="bg-[#fcfcfc] dark:bg-black xl:w-[1200px] lg:w-[900px] md:w-[600px] w-[300px] xl:h-[1200px] lg:h-[900px] md:h-[600px] h-[300px] rounded-[50%] absolute -z-10 animate-fly transition linear duration-700" />
      </div>
    </>
  );
};

export default Hero;
