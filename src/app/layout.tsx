import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav/nav";

const fraunces = Fraunces({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kofi",
  description: "Your favorite coffees, delivered to your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
