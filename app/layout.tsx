import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Entire History of Reality, I Guess",
  description: "A collection of stories about what this all is",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
