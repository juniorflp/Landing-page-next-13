import { Footer, LogoComponent, NavBar } from "@/components";
import "./globals.css";
import { GlobalContextProvider } from "./context/store";
import { Montserrat } from "next/font/google";
import ThemeComponentProvider from "./ThemeComponentProvider";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Landing Page",
  description: "Welcome to the top!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="ligth" style={{ colorScheme: "light" }}>
      <body className={`${montserrat.className} relative`}>
        <ThemeComponentProvider>
          <GlobalContextProvider>
            <NavBar />
            <LogoComponent />
            {children}
            <Footer />
          </GlobalContextProvider>
        </ThemeComponentProvider>
      </body>
    </html>
  );
}
