import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight:["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Phelzink Production | Creative Design & Print Solutions",
  description: "Transform your brand with high-quality printing and innovative design services.",
  icons: {
    icon: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688534/blog_assets/fkckb41bhbezjlcpjhnl.png",
  },
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
