import type { Metadata } from "next";
import { Geist, Geist_Mono, Lavishly_Yours, Open_Sans } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lavishly = Lavishly_Yours({
  variable: "--font-lavishly",
  weight: ["400"],
  subsets: ["latin"],
});

const opensans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "abhialuru",
  description: "Frontend designer and developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${opensans.className} ${lavishly.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
