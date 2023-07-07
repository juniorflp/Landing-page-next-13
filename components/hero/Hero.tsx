"use client";

import React, { useState } from "react";
import styles from "./hero.module.css";
import Link from "next/link";

const Hero = () => {
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(
    styles["circle-animation"]
  );

  const openBlackScreen = () => {
    if (!showBlackScreen) {
      setShowBlackScreen(true);
    }
  };

  const closeBlackScreen = () => {
    setIsAnimationActive(styles["reverse-circle-animation"]);
    setTimeout(() => {
      setShowBlackScreen(false);
      setIsAnimationActive(styles["circle-animation"]);
    }, 1000);
  };

  return (
    <>
      <div
        className={` ${styles.blackScreen} ${
          showBlackScreen ? "flex" : "hidden"
        }  ${isAnimationActive}`}
        onClick={closeBlackScreen}
      >
        <div className="absolute   w-[20%] h-[30%] top-[35%] right-[25%]">
          <nav className="flex flex-col ">
            <Link href="/about-us" className="link-hero">
              About
            </Link>
            <Link href="/" className="link-hero">
              Home
            </Link>
            <Link href="/" className="link-hero">
              Our Work
            </Link>
            <Link href="/" className="link-hero">
              Services
            </Link>
            <Link href="/" className="link-hero">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="hero h-screen ">
        <div className="mt-[30%] pl-40 w-[68%]">
          <button onClick={openBlackScreen}>open</button>
          <h1 className="text-5xl font-bold tracking-wide leading-relaxed">
            We are a group of creative people who believe in great ideas
          </h1>
        </div>
        <div className="bg-[#fcfcfc]  xl:w-[1200px] lg:w-[900px] md:w-[600px] xl:h-[1200px] lg:h-[900px] md:h-[600px] rounded-[50%] absolute -z-10 animate-fly"></div>
      </div>
    </>
  );
};

export default Hero;
