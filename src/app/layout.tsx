import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Yiming Han — IT Professional",
    template: "%s | Yiming Han",
  },
  description:
    "Personal blog and portfolio of Yiming Han — an IT and cybersecurity professional based in Winnipeg, Canada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 py-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
