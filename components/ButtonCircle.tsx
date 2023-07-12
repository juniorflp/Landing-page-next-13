"use client";

import { LucideIcon, LucideProps, Menu } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

export interface IButtonCircle extends ButtonHTMLAttributes<HTMLButtonElement> {
  stylesButton?: string;
  handleClick: () => void;
  icon: JSX.Element;
}

const ButtonCircle: React.FC<IButtonCircle> = ({
  stylesButton,
  handleClick,
  icon,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type="button"
      className={`${stylesButton}  p-3 w-12 h-12 rounded-full drop-shadow-button mb-10 hover:-translate-y-3  transition ease-in-out duration-300`}
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export default ButtonCircle;
