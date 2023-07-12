"use client";
import React from "react";
import styles from "./footerStyle.module.css";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const pageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="overflow-hidden bg-bg-color-ligth dark:bg-black flex flex-col h-screen px-32 pt-56 transition linear duration-700">
      <div className="w-full">
        <p>KEEP IN TOUCH</p>
      </div>
      <div className="grid lg:grid-cols-4   gap-6 w-full h-full  mb-10">
        <div className="flex flex-col  col-span-2 ">
          <div className="flex flex-1 flex-col ">
            <h1 className={`${styles.email}`}>
              <a href="mailTo:juniorcose@gmail.com" target="_blank">
                juniorcose@gmail.com
              </a>
            </h1>
          </div>
          <div className="border-t-[1px] border-gray-600 w-fit">
            <p className="mt-4">
              © 2023-Eduardo | Application developed for study.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col col-span-1 gap-10 px-10 mt-5 ">
          <div className="flex flex-col gap-1">
            <p className="font-bold ">ADDRESS</p>
            <p className="mt-6">911,Umbrella</p>
            <p className="">Palhoça / SC</p>
            <p className="">Brazil</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold ">PHONE</p>
            <p className="mt-6">+55 48 9-91734623</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold ">follow</p>
            <div className="flex mt-6 gap-4">
              <Link
                href="https://twitter.com/"
                className="border-b border-transparent hover:border-b-black  transition ease-in-out duration-300"
                target="_blank"
              >
                <p className="">Twitter</p>
              </Link>
              <Link
                href="https://www.instagram.com/junioredu_real/"
                target="_blank"
                className="border-b border-transparent hover:border-b-black  transition ease-in-out duration-300"
              >
                <p className="">Instagram</p>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/eduardo-santos-junior-221b43203/"
                target="_blank"
                className="border-b border-transparent hover:border-b-black  transition ease-in-out duration-300"
              >
                <p className="">Linkedin</p>
              </Link>

              <Link
                href="https://www.twitch.tv/"
                target="_blank"
                className="border-b border-transparent hover:border-b-black  transition ease-in-out duration-300"
              >
                <p className="">Twitch</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col col-span-1 mt-5 px-20">
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-bold ">follow</p>
            <Link
              href="#"
              className="border-b border-transparent hover:border-b-black  w-fit  transition ease-in-out duration-300 mt-6"
            >
              <p className="">Services</p>
            </Link>
            <Link
              href="#"
              className="border-b border-transparent hover:border-b-black w-fit  transition ease-in-out duration-300 "
            >
              <p className="">Our Work</p>
            </Link>
            <Link
              href="#"
              className="border-b border-transparent hover:border-b-black w-fit  transition ease-in-out duration-300 "
            >
              <p className="">Contact</p>
            </Link>
            <Link
              href="#"
              className="border-b border-transparent hover:border-b-black w-fit  transition ease-in-out duration-300 "
            >
              <p className="">About</p>
            </Link>
            <Link
              href="#"
              className="border-b border-transparent hover:border-b-black w-fit  transition ease-in-out duration-300 "
            >
              <p className="">Privacy Policy</p>
            </Link>
          </div>
          <button
            onClick={pageUp}
            className="bg-gray-100 p-3 w-12 h-12 rounded-full drop-shadow-button mb-10 hover:-translate-y-3  transition ease-in-out duration-300"
          >
            <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;