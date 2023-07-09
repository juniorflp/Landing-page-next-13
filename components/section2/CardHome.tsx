import Image, { StaticImageData } from "next/image";
import React from "react";

interface CadProps {
  image: StaticImageData;
  title: string;
  text: string;
}

const CardHome: React.FC<CadProps> = ({ image, title, text }) => {
  return (
    <div className="w-[500px] max-h-[750px] ">
      <Image src={image} alt="Picture of the author" />
      <div className="flex flex-col ">
        <p className="text-[14px] font-bold text-font-card uppercase mt-8">
          {title}
        </p>
        <p className="text-[24px]  text-font-card mt-4">{text}</p>
      </div>
    </div>
  );
};

export default CardHome;
