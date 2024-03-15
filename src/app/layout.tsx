import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authtbh",
  description: "Authtbh portfolio in nextjs",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-icon-57x57.png?v=4"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
