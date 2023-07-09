"use client";

import { LucideIcon, LucideProps, Menu } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

export interface IButtonSquare extends ButtonHTMLAttributes<HTMLButtonElement> {
  stylesButton?: string;
  handleClick: () => void;
  icon: JSX.Element;
}

const ButtonSquare: React.FC<IButtonSquare> = ({
  stylesButton,
  handleClick,
  icon,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type="button"
      className={`w-10 h-10 ease-in duration-300 px-2 py-2 rounded-md dark:drop-shadow-buttonDark drop-shadow-button dark:bg-black bg-button-bg cursor-pointer flex justify-center items-center dark:border-[1px] dark:border-white ${stylesButton}`}
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export default ButtonSquare;
