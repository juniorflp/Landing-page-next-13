import { Footer, LogoComponent, NavBar } from "@/components";
import "./globals.css";

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
        <NavBar />
        <LogoComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
