import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Phelzink Production | Creative Design & Print Solutions",
  description: "Transform your brand with high-quality printing and innovative design services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
