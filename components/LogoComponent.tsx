"use client";

import Link from "next/link";
import React from "react";
import ButtonSquare from "./ButtonSquare";

const LogoComponent: React.FC = () => {
  return (
    <div className="w-32 fixed top-10 left-20 text-center z-50 bg-bg-color-ligth">
      <p className="text-3xl font-bold tracking-tighter leading-relaxed  ">
        DEV jr
      </p>
    </div>
  );
};

export default LogoComponent;
