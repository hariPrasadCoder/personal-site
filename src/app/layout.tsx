import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hari Prasad Renganathan",
  description: "Founder, AI Engineer, Builder. Currently building Flax at Antler London '26.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen bg-[#f5f5f3] text-[#1a1a1a] antialiased font-sans">
        <Nav />
        <main className="max-w-5xl mx-auto px-4 pt-24 md:pt-28 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
