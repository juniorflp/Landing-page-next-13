import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardsProps {
  image: StaticImageData;
  name: string;
  text: string;
}

const CardCustomer = ({ image, name, text }: CardsProps) => {
  return (
    <div className="flex gap-8  items-center">
      <div className="relative w-24 h-24 rounded-full  ">
        <Image
          src={image}
          layout="fill"
          alt="user photo"
          className="rounded-full "
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-lg mt-4">{text}</p>
      </div>
    </div>
  );
};

export default CardCustomer;
