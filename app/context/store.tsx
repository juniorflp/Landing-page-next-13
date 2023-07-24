"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "../../components/nav-screen/navScreen.module.css";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

interface ContextProps {
  showBlackScreen: boolean;
  showBlackScreenMobile: boolean;
  openAndClosseScreen: string;
  toggleBlackScreen: () => void;
  toggleBlackScreenMobile: () => void;
  inViewFeatures: string | null;
  setInViewFeatures: Dispatch<SetStateAction<string | null>>;
  cardId: number | null;
  setCardId: Dispatch<SetStateAction<number | null>>;
}

const GlobalContext = createContext<ContextProps>({
  openAndClosseScreen: styles["circle-animation"],
  showBlackScreen: false,
  showBlackScreenMobile: false,
  toggleBlackScreen: () => {},
  toggleBlackScreenMobile: () => {},
  inViewFeatures: null,
  setInViewFeatures: () => {},
  cardId: null,
  setCardId: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  const [showBlackScreenMobile, setShowBlackScreenMobile] = useState(false);
  const [inViewFeatures, setInViewFeatures] = useState<string | null>(null);
  const [cardId, setCardId] = useState<number | null>(null);
  const [openAndClosseScreen, setopenAndClosseScreen] = useState(
    styles["circle-animation"]
  );
  const pathName = usePathname();

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
    if (pathName !== "/about-us") {
      if (window.scrollY > 300 && window.scrollY <= 3150) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
    function handleScroll() {
      if (pathName !== "/about-us") {
        if (window.scrollY > 300 && window.scrollY <= 3150) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathName]);

  return (
    <GlobalContext.Provider
      value={{
        openAndClosseScreen,
        showBlackScreen,
        toggleBlackScreen,
        toggleBlackScreenMobile,
        showBlackScreenMobile,
        inViewFeatures,
        setInViewFeatures,
        cardId,
        setCardId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
