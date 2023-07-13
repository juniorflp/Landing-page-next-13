"use client";

import { useGlobalContext } from "@/app/context/store";
import styles from "./navScreen.module.css";
import React from "react";
import Link from "next/link";

const NavScreen: React.FC = () => {
  const { openAndClosseScreen, showBlackScreen, toggleBlackScreen } =
    useGlobalContext();
  return (
    <div
      className={` ${styles.blackScreen} ${
        showBlackScreen ? "flex" : "hidden"
      }  ${openAndClosseScreen} justify-between `}
      onClick={toggleBlackScreen}
    >
      <div className="absolute   w-[20%] h-[30%] top-[35%] right-[25%]">
        <nav className="flex flex-col ">
          <Link href="/" className="link-hero">
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

      <div className="absolute text-white  w-[590px] h-[90px] bottom-[50%] left-[12%]">
        <div className={`${styles.navContainer}`}>
          <Link
            href="https://www.instagram.com/junioredu_real/"
            target="_blank"
            className={`${styles.link}`}
          >
            <p>Instagram</p>
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className={`${styles.link}`}
          >
            <p>Twitter</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/eduardo-santos-junior-221b43203/"
            target="_blank"
            className={`${styles.link}`}
          >
            <p>Linkedin</p>
          </Link>
          <Link
            href="https://github.com/juniorflp"
            target="_blank"
            className={`${styles.link}`}
          >
            <p>Github</p>
          </Link>
          <div className={`${styles.animation} ${styles.startHome}`}></div>
        </div>
      </div>
    </div>
  );
};

export default NavScreen;
