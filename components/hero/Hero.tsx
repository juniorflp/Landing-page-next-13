import React, { useState } from "react";
import NavScreen from "../nav-screen/NavScreen";

const Hero = () => {
  return (
    <>
      <NavScreen />
      <div className="hero h-screen px-32">
        <div className="xl:mt-[38%] lg:mt-[36%]  w-[79%] flex flex-col gap-3">
          <h1 className="lg:text-[55px] xl:text-[70px] font-semibold leading-tight ">
            We are a group of creative people
          </h1>
          <h1 className="text-[55px] xl:text-[70px]  font-semibold leading-tight">
            who believe in great ideas.
          </h1>
          <p className="text-[16px] xl:text-[20px]  leading-tight text-font-gray">
            WEBSITE | BRANDING | UI/UX | VISUAL | ECOMMERCE | IA
          </p>
        </div>
        <div className="bg-[#fcfcfc] dark:bg-black xl:w-[1200px] lg:w-[900px] md:w-[600px] xl:h-[1200px] lg:h-[900px] md:h-[600px] rounded-[50%] absolute -z-10 animate-fly" />
      </div>
    </>
  );
};

export default Hero;
