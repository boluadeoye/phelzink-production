import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Explicitly loading the 900 (Black) weight for industrial typography
const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight:["300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${sans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
