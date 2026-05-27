import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Presentation from "./components/home/Presentation";
import Projects from "./components/Project/Projects";
import Informations from "./components/Informations/Informations";
import Contact from "./components/Contact/Contact";
import CV from "./components/CV/CV";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Portfolio",
  description: "3D Portfolio Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen flex flex-col items-center`}>
        <Navbar />
        <Presentation />
        <Projects />
        <Informations />
        <Contact />
        <CV />
        <main className="flex-1 w-full max-w-[1400px] flex flex-col items-center justify-center pt-24 px-6 text-center no-print">
          {children}
        </main>
      </body>
    </html>
  );
}