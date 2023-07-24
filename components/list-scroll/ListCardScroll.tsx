"use client";

import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useGlobalContext } from "@/app/context/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView, InView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  id: number;
  // text: string;
};

const ListCardScroll = ({ children, id }: Props) => {
  const { setCardId } = useGlobalContext();

  // useEffect(() => {}, []);

  return (
    <InView
      as="div"
      onChange={(inView) => {
        if (inView) {
          setCardId(id);
        }
      }}
      className={`bg-gray-300 aspect-square rounded-xl w-full flex flex-col justify-center items-center`}
    >
      {children}
    </InView>
  );
};

export default ListCardScroll;
