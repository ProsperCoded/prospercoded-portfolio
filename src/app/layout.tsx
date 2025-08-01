import type { Metadata } from "next";
import { Titillium_Web, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});
const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prosper Enwerem Tochukwu - Backend Software Engineer Portfolio",
  description:
    "Prosper Enwerem Tochukwu's portfolio showcasing fullstack software engineering projects, Node.js expertise, and real-world solutions at University of Ibadan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titilliumWeb.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
