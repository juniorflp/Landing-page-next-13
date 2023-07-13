"use client";

import React from "react";
import ButtonSquare from "../ButtonSquare";
import { Menu } from "lucide-react";
import { useGlobalContext } from "@/app/context/store";

const HeaderMobile: React.FC = () => {
  const { toggleBlackScreenMobile } = useGlobalContext();
  return (
    <div className="flex justify-between md:hidden w-full h-20 p-4 bg-bg-color-ligth dark:bg-black transition linear duration-700">
      <div className="w-32  text-center z-[99] flex">
        <p className={`text-2xl font-bold tracking-tighter leading-relaxed  `}>
          DEV jr
        </p>
      </div>
      <ButtonSquare
        icon={<Menu size={30} style={{ transition: "ease-in 0.3s" }} />}
        stylesButton="lg:mr-16 xl:mr-36 "
        handleClick={toggleBlackScreenMobile}
      />
    </div>
  );
};

export default HeaderMobile;
