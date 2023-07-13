"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "../../components/nav-screen/navScreen.module.css";
import { useTheme } from "next-themes";

interface ContextProps {
  showBlackScreen: boolean;
  showBlackScreenMobile: boolean;
  openAndClosseScreen: string;
  toggleBlackScreen: () => void;
  toggleBlackScreenMobile: () => void;
}

const GlobalContext = createContext<ContextProps>({
  openAndClosseScreen: styles["circle-animation"],
  showBlackScreen: false,
  showBlackScreenMobile: false,
  toggleBlackScreen: () => {},
  toggleBlackScreenMobile: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [showBlackScreenMobile, setShowBlackScreenMobile] = useState(false);
  const [openAndClosseScreen, setopenAndClosseScreen] = useState(
    styles["circle-animation"]
  );

  const toggleBlackScreenMobile = () => {
    setShowBlackScreenMobile((prev) => !prev);
  };

  const toggleBlackScreen = () => {
    if (!showBlackScreen) {
      setShowBlackScreen(true);
      return;
    }
    setopenAndClosseScreen(styles["reverse-circle-animation"]);
    setTimeout(() => {
      setShowBlackScreen(false);
      setopenAndClosseScreen(styles["circle-animation"]);
    }, 1000);
  };

  const { setTheme } = useTheme();
  useEffect(() => {
    if (window.scrollY > 300 && window.scrollY <= 3150) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    function handleScroll() {
      if (window.scrollY > 300 && window.scrollY <= 3150) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        openAndClosseScreen,
        showBlackScreen,
        toggleBlackScreen,
        toggleBlackScreenMobile,
        showBlackScreenMobile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
