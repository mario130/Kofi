import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import { MotionDiv } from "./_components/MotionDiv";
import { Analytics } from "@vercel/analytics/react"

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
        <MotionDiv
          layout
          transition={{ ease: "easeInOut", duration: 0.4 }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Nav />
        </MotionDiv>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
