"use client";

import Link from "next/link";
import React from "react";
import ButtonSquare from "./ButtonSquare";

const NavBar: React.FC = () => {
  return (
    <div className="w-32 fixed top-0 right-0 h-screen z-40">
      <div className="flex flex-col  items-center bg-transparent h-full py-10 px-2">
        <ButtonSquare handleClick={() => console.log("botao")} />
      </div>
    </div>
  );
};

export default NavBar;
