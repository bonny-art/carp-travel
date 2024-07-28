import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description: "Uncover Carpathian’s Secrets",
  metadataBase:
    process.env.NODE_ENV === "development"
      ? new URL("http://localhost:3000")
      : new URL("https://yourwebsite.vercel.app"),
  openGraph: {
    title: "CarpTravel",
    description: "Uncover Carpathian’s Secrets",
    type: "website",
    url: "https://yourwebsite.com", // TODO: Update with your website URL
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CarpTravel Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarpTravel",
    description: "Uncover Carpathian’s Secrets",
    images: ["/og-image.jpg"],
  },
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
