"use client";

import { Menu } from "lucide-react";

export interface IButtonSquare {
  stylesButton?: string;
  handleClick: () => void;
}

const ButtonSquare = ({ stylesButton, handleClick }: IButtonSquare) => {
  return (
    <button
      type="button"
      className={`w-12 h-12 px-2 py-2 rounded-md shadow-lg bg-white cursor-pointer  ${stylesButton}`}
      onClick={handleClick}
    >
      <Menu color="black" size={30} />
    </button>
  );
};

export default ButtonSquare;
