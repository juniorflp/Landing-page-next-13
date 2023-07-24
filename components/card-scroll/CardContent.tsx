"use client";

import React, { ReactNode } from "react";
import classNames from "classnames";
import { useGlobalContext } from "@/app/context/store";

type CardProps = {
  // gradient: string;
  children: React.ReactNode;
} & Cards;

type Cards = {
  id: number;
};

const CardContent = ({ children, id }: CardProps) => {
  const { cardId } = useGlobalContext();

  return (
    <div
      className={classNames(
        "absolute w-full h-full inset-0 flex-col flex justify-center items-center rounded-xl bg-transparent  transition-opacity",

        cardId === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const One = ({ id }: Cards) => {
  return (
    <CardContent id={id}>
      <h1 className="text-5xl font-bold">On Grid</h1>
      <p className="text-xl ">saiduashdhasd sud ahd uias das hd asud</p>
    </CardContent>
  );
};

export const Two = ({ id }: Cards) => {
  return (
    <CardContent id={id}>
      <h1 className="text-5xl font-bold">On Pay</h1>
      <p className="text-xl ">saiduashdhasd sud ahd uias das hd asud</p>
    </CardContent>
  );
};
export const Three = ({ id }: Cards) => {
  return (
    <CardContent id={id}>
      <h1 className="text-5xl font-bold">On Click</h1>
      <p className="text-xl ">saiduashdhasd sud ahd uias das hd asud</p>
    </CardContent>
  );
};
export const Four = ({ id }: Cards) => {
  return (
    <CardContent id={id}>
      <h1 className="text-5xl font-bold">On Hover</h1>
      <p className="text-xl ">saiduashdhasd sud ahd uias das hd asud</p>
    </CardContent>
  );
};
export const Five = ({ id }: Cards) => {
  return (
    <CardContent id={id}>
      <h1 className="text-5xl font-bold">On Leave</h1>
      <p className="text-xl ">saiduashdhasd sud ahd uias das hd asud</p>
    </CardContent>
  );
};
export const Six = ({ id }: Cards) => {
  return (
    <CardContent id={id}>
      <h1 className="text-5xl font-bold">On Dick</h1>
      <p className="text-xl ">saiduashdhasd sud ahd uias das hd asud</p>
    </CardContent>
  );
};
