import { Footer, LogoComponent, NavBar } from "@/components";
import "./globals.css";
import { GlobalContextProvider } from "./context/store";

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
    <html lang="en">
      <body className="relative">
        <GlobalContextProvider>
          <NavBar />
          <LogoComponent />
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
