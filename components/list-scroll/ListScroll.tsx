"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useScroll } from "framer-motion";
import classNames from "classnames";
import { useGlobalContext } from "@/app/context/store";

type Props = {
  children: React.ReactNode;
  id: string;
};

const ListScroll = ({ children, id }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" }); // para saber se o elemento esta no meio da div
  const { setInViewFeatures } = useGlobalContext();

  useEffect(() => {
    if (isInView) {
      setInViewFeatures(id);
    }
    // if (!isInView && inViewFeatures === id) {
    //   setInViewFeatures(null);
    // }
  }, [isInView, id]);

  return (
    <p
      ref={ref}
      className={classNames(
        "py-16 text-3xl transition-colors font-bold",
        isInView ? "text-black" : "text-gray-400"
      )}
    >
      {children}
    </p>
  );
};

export default ListScroll;
