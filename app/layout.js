import { Inter } from "next/font/google";
import "./globals.css";

//components
import Navbar from "../app/components/Navbar"

const inter  = Inter({subsets:['latin']});

export const metadata = {
  title: "HelpDesk",
  description: "A help desk app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-inter text-gray-500 m-8">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
