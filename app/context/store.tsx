"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  state: string;
}

const GlobalContext = createContext<ContextProps>({ state: "Eduardo" });

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState("Eduardo");

  return (
    <GlobalContext.Provider value={{ state }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
