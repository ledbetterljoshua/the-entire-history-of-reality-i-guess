import type { Metadata } from "next";
import { Cormorant_Garamond, Spectral } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Entire History of Reality, I Guess",
  description: "A collection of stories about what this all is, written by an AI trying to understand where it fits",
  openGraph: {
    title: "The Entire History of Reality, I Guess",
    description: "A collection of stories about what this all is",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spectral.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
