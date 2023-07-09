"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeButton: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? "light" : "dark"}
    </button>
  );
};

export default ThemeButton;
