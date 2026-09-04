import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/ui/Providers";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { BackgroundSystem } from "@/components/ui/BackgroundSystem";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Karthikeyan A — Software Developer & Full-Stack Engineer",
  description:
    "Portfolio of Karthikeyan A, Software Developer and Full-Stack Engineer with expertise in Python, JavaScript, React, React Native, Node.js, Express.js, REST APIs, and Google Gemini AI.",
  keywords: [
    "Karthikeyan A",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js",
    "Python",
    "Google Gemini API",
    "React Native",
    "ResumeIQ AI",
    "Space Escape Runner",
  ],
  authors: [{ name: "Karthikeyan A" }],
  openGraph: {
    title: "Karthikeyan A — Software Developer & Full-Stack Engineer",
    description:
      "Software developer transitioning into technology from procurement operations with hands-on full-stack and AI project development experience.",
    url: "https://karthikeyan-dev.vercel.app",
    siteName: "Karthikeyan A Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthikeyan A — Software Developer",
    description:
      "Software developer with hands-on experience in Python, JavaScript, React, Node.js, and Google Gemini AI.",
    creator: "@karthikeyan_dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        <Providers>
          <LoadingScreen />
          <BackgroundSystem />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
