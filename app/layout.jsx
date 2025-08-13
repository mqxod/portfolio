import "./globals.css";
import { Poppins } from "next/font/google";
import CustomCursor from "../components/CustomCursor";
import { icons } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "700", "900"]
});

export const metadata = {
  title: "Portfolio - Maqsood",
  description:
    "Explore the portfolio of Maqsood Ahmed, a passionate Fullstack Developer based in Islamabad. Showcasing modern web projects, coding expertise, and creative problem-solving across MERN stack, ReactJS, and more.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.className} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
