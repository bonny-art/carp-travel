import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description: "Uncover Carpathian’s Secrets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>

        <main
          className="relative overflow-hidden 
        -mt-[108px] pt-[108px]
        md:-mt-[120px] md:pt-[120px]
        lg:-mt-[106px] lg:pt-[106px]
        "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
