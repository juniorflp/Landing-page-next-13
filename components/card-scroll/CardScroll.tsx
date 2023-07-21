"use client";

import React, { ReactNode } from "react";
import classNames from "classnames";
import { useGlobalContext } from "@/app/context/store";

type CardProps = {
  gradient: string;
  children: React.ReactNode;
} & Cards;

type Cards = {
  id: string;
};

const CardScroll = ({ gradient, children, id }: CardProps) => {
  const { inViewFeatures } = useGlobalContext();

  return (
    <div
      className={classNames(
        "absolute w-full h-full inset-0  rounded-xl bg-gradient-to-br transition-opacity",
        gradient,
        inViewFeatures === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Banana = ({ id }: Cards) => {
  return (
    <CardScroll id={id} gradient="from-[#f7f0ff] to-[#fee38a]">
      <span />
    </CardScroll>
  );
};

export const Maca = ({ id }: Cards) => {
  return (
    <CardScroll id={id} gradient="from-[#f7f0ff] to-[#fe8a8a]">
      <span />
    </CardScroll>
  );
};
export const Uva = ({ id }: Cards) => {
  return (
    <CardScroll id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </CardScroll>
  );
};
export const Laranja = ({ id }: Cards) => {
  return (
    <CardScroll id={id} gradient="from-[#f7f0ff] to-[#fec28a]">
      <span />
    </CardScroll>
  );
};
export const Abacate = ({ id }: Cards) => {
  return (
    <CardScroll id={id} gradient="from-[#f7f0ff] to-[#8afea7]">
      <span />
    </CardScroll>
  );
};
export const Tangirina = ({ id }: Cards) => {
  return (
    <CardScroll id={id} gradient="from-[#f7f0ff] to-[#feaf8a]">
      <span />
    </CardScroll>
  );
};
