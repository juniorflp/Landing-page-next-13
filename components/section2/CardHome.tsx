"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import styles from "./animationCard.module.css";

interface CadProps {
  image: StaticImageData;
  title: string;
  text: string;
}

const CardHome: React.FC<CadProps> = ({ image, title, text }) => {
  const [activeDiv, setactiveDiv] = useState(false);

  return (
    <div className="w-[500px] max-h-[750px] ">
      <div
        className="relative"
        onMouseEnter={() => setactiveDiv(true)}
        onMouseLeave={() => setactiveDiv(false)}
      >
        {activeDiv && (
          <div className={` ${styles.showButton}`}>
            <p className="text-xl">Did you like the theme?</p>
            <button
              className={`${styles["button-bg"]} p-2  text-gray-900 font-bold rounded-lg`}
            >
              See more
            </button>
          </div>
        )}

        <Image src={image} quality={100} alt="Picture of the author " />
      </div>
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
