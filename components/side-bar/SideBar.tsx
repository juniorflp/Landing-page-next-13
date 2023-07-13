"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ButtonSquare from "../ButtonSquare";
import { useGlobalContext } from "@/app/context/store";
import {
  Github,
  Instagram,
  Linkedin,
  Menu,
  Twitch,
  Twitter,
} from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./animationSideBar.module.css";

const SideBar: React.FC = () => {
  const { toggleBlackScreen } = useGlobalContext();
  const { resolvedTheme } = useTheme();
  const [showSideBar, setShowSideBar] = useState(true);
  const [colorIcon, setColorIcon] = useState({
    a: "#243561",
    b: "#243561",
    c: "#243561",
    d: "#243561",
    e: "#000",
  });

  const [classAnimation, setClassAnimation] = useState(styles.hasBtn);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 3100) {
        setClassAnimation("");
      } else {
        setClassAnimation(styles.hasBtn);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setColorIcon({
        a: "#fff",
        b: "#fff",
        c: "#fff",
        d: "#fff",
        e: "#fff",
      });
    } else {
      setColorIcon({
        a: "#243561",
        b: "#243561",
        c: "#243561",
        d: "#243561",
        e: "#000",
      });
    }
  }, [resolvedTheme]);

  return (
    <aside className="w-48 fixed top-0 right-0 h-screen z-40 hidden md:flex">
      <div className="flex flex-col  items-center bg-transparent h-full lg:py-10 xl:py-16 px-2 ">
        <ButtonSquare
          onMouseEnter={() => {
            if (resolvedTheme === "dark") {
              setColorIcon((prev) => ({ ...prev, e: "#000" }));
            } else {
              setColorIcon((prev) => ({ ...prev, e: "#FFFF" }));
            }
          }}
          onMouseLeave={() => {
            if (resolvedTheme === "dark") {
              setColorIcon((prev) => ({ ...prev, e: "#FFFF" }));
            } else {
              setColorIcon((prev) => ({ ...prev, e: "#000" }));
            }
          }}
          icon={
            <Menu
              size={30}
              color={colorIcon.e}
              style={{ transition: "ease-in 0.3s" }}
            />
          }
          handleClick={toggleBlackScreen}
          stylesButton="lg:mr-16 xl:mr-36 hover:bg-black hover:dark:bg-white"
        />

        <div
          className={`flex flex-col  items-center lg:mt-64 xl:mt-[450px] gap-8 ${styles.hideBtn} ${classAnimation}`}
        >
          <Link
            href="https://www.instagram.com/junioredu_real/"
            target="_blank"
          >
            <ButtonSquare
              onMouseEnter={() => {
                if (resolvedTheme === "dark") {
                  setColorIcon((prev) => ({ ...prev, a: "#000" }));
                } else {
                  setColorIcon((prev) => ({ ...prev, a: "#FFFF" }));
                }
              }}
              onMouseLeave={() => {
                if (resolvedTheme === "dark") {
                  setColorIcon((prev) => ({ ...prev, a: "#FFFF" }));
                } else {
                  setColorIcon((prev) => ({ ...prev, a: "#243561" }));
                }
              }}
              icon={
                <Instagram
                  size={30}
                  color={colorIcon.a}
                  style={{ transition: "ease-in 0.3s" }}
                />
              }
              handleClick={() => {}}
              stylesButton="lg:mr-16 xl:mr-36 hover:bg-black hover:dark:bg-white"
            />
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <ButtonSquare
              onMouseEnter={() => {
                if (resolvedTheme === "dark") {
                  setColorIcon((prev) => ({ ...prev, b: "#000" }));
                } else {
                  setColorIcon((prev) => ({ ...prev, b: "#FFFF" }));
                }
              }}
              onMouseLeave={() => {
                if (resolvedTheme === "dark") {
                  setColorIcon((prev) => ({ ...prev, b: "#FFFF" }));
                } else {
                  setColorIcon((prev) => ({ ...prev, b: "#243561" }));
                }
              }}
              icon={
                <Twitter
                  size={30}
                  color={colorIcon.b}
                  style={{ transition: "ease-in 0.3s" }}
                />
              }
              handleClick={() => {}}
              stylesButton="lg:mr-16 xl:mr-36 hover:bg-black hover:dark:bg-white"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/eduardo-santos-junior-221b43203/"
            target="_blank"
          >
            <ButtonSquare
              onMouseEnter={() => {
                if (resolvedTheme === "dark") {
                  setColorIcon((prev) => ({ ...prev, c: "#000" }));
                } else {
                  setColorIcon((prev) => ({ ...prev, c: "#FFFF" }));
                }
              }}
              onMouseLeave={() => {
                if (resolvedTheme === "dark") {
                  setColorIcon((prev) => ({ ...prev, c: "#FFFF" }));
                } else {
                  setColorIcon((prev) => ({ ...prev, c: "#243561" }));
                }
              }}
              icon={
                <Linkedin
                  size={30}
                  color={colorIcon.c}
                  style={{ transition: "ease-in 0.3s" }}
                />
              }
              handleClick={() => {}}
              stylesButton="lg:mr-16 xl:mr-36 hover:bg-black hover:dark:bg-white"
            />
          </Link>
          <Link href="https://github.com/juniorflp" target="_blank">
            <ButtonSquare
              onMouseEnter={() => {
                if (resolvedTheme === "dark") {
                  setColorIcon((prev) => ({ ...prev, d: "#000" }));
                } else {
                  setColorIcon((prev) => ({ ...prev, d: "#FFFF" }));
                }
              }}
              onMouseLeave={() => {
                if (resolvedTheme === "dark") {
                  setColorIcon((prev) => ({ ...prev, d: "#FFFF" }));
                } else {
                  setColorIcon((prev) => ({ ...prev, d: "#243561" }));
                }
              }}
              icon={
                <Github
                  size={30}
                  color={colorIcon.d}
                  style={{ transition: "ease-in 0.3s" }}
                />
              }
              handleClick={() => {}}
              stylesButton="lg:mr-16 xl:mr-36 hover:bg-black hover:dark:bg-white"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
