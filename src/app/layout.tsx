import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Oswald, Merriweather } from "next/font/google";


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${oswald.className} ${merriweather.className}`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

