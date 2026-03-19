import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppLayout } from "@/components/layout/AppLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Simสวน - Farm Simulator",
  description: "Modern farm and land management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${inter.variable}`}>
      <body className="antialiased font-sans">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
