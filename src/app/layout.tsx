import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Lavishly_Yours, Open_Sans } from "next/font/google";
import "./globals.css";

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
