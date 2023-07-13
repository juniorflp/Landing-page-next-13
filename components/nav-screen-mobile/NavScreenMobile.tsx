"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import styles from "./screenStyles.module.css";
import { useGlobalContext } from "@/app/context/store";

const NavScreenMobile: React.FC = () => {
  const { showBlackScreenMobile, toggleBlackScreenMobile } = useGlobalContext();
  return (
    <div
      className={`flex justify-center fixed top-0 left-0 z-[400] md:hidden bg-black w-full h-screen p-8 ${
        styles.hideBtn
      } ${showBlackScreenMobile ? styles.hasBtn : ""}`}
    >
      <div className="flex" onClick={toggleBlackScreenMobile}>
        <X color="#fff" />
      </div>
      <div className="flex justify-end w-full h-screen">
        <nav className="flex flex-col ">
          <Link href="/about-us" className="link-hero-mobile">
            About
          </Link>
          <Link href="/" className="link-hero-mobile">
            Home
          </Link>
          <Link href="/" className="link-hero-mobile">
            Our Work
          </Link>
          <Link href="/" className="link-hero-mobile">
            Services
          </Link>
          <Link href="/" className="link-hero-mobile">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavScreenMobile;
