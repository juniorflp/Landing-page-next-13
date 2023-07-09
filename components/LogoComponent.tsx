"use client";

import Link from "next/link";
import React from "react";
import ButtonSquare from "./ButtonSquare";
import { useGlobalContext } from "@/app/context/store";

const LogoComponent: React.FC = () => {
  const { showBlackScreen } = useGlobalContext();
  return (
    <div className="w-32 fixed top-10 left-28 text-center z-[99] ">
      <p
        className={`text-3xl font-bold tracking-tighter leading-relaxed dark:text-white  ${
          showBlackScreen ? "text-white" : "text-black"
        }`}
      >
        DEV jr
      </p>
    </div>
  );
};

export default LogoComponent;
