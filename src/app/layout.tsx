import type { Metadata } from "next";
import { Titillium_Web, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { FloatingContactButton } from "@/components/ui/FloatingContactButton";
import { OWNER_DETAILS } from "@/data/owner.data";

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
  title: `${OWNER_DETAILS.fullName} - ${OWNER_DETAILS.title} Portfolio`,
  description: `${OWNER_DETAILS.bio} Focus: ${OWNER_DETAILS.specialization}.`,
  keywords: [
    OWNER_DETAILS.title,
    OWNER_DETAILS.specialization,
    ...OWNER_DETAILS.coreSkills,
    OWNER_DETAILS.education,
    OWNER_DETAILS.currentRole,
    "Prosper Enwerem",
    "Portfolio",
    "Software Engineer",
    "Node.js",
  ],
  authors: [{ name: OWNER_DETAILS.fullName }],
  creator: OWNER_DETAILS.fullName,
  publisher: OWNER_DETAILS.fullName,
  category: "technology",
  icons: {
    icon: "/assets/logo.ico",
    shortcut: "/assets/logo.ico",
    apple: "/assets/logo.ico",
  },
  openGraph: {
    title: `${OWNER_DETAILS.fullName} - ${OWNER_DETAILS.title}`,
    description: `${OWNER_DETAILS.bio} Focus: ${OWNER_DETAILS.specialization}.`,
    siteName: OWNER_DETAILS.fullName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/site-preview.png",
        width: 1200,
        height: 630,
        alt: `${OWNER_DETAILS.fullName} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${OWNER_DETAILS.fullName} - ${OWNER_DETAILS.title}`,
    description: `${OWNER_DETAILS.bio} Focus: ${OWNER_DETAILS.specialization}.`,
    images: ["/assets/site-preview.png"],
    creator: "@prosperenwerem",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "og:see_also:github": OWNER_DETAILS.social.github.url,
    "og:see_also:linkedin": OWNER_DETAILS.social.linkedin.url,
    "og:see_also:twitter": OWNER_DETAILS.social.twitter.url,
  },
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
        <FloatingContactButton />
      </body>
    </html>
  );
}
