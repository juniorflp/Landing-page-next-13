"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const ThemeComponentProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeComponentProvider;
