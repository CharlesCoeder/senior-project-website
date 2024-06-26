import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senior Project Website",
  description: "Our team's progress on our senior project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-32 mt-12 mr-20">{children}</div>
        </div>
      </body>
    </html>
  );
}
