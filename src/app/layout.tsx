import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Phelzink Production | Creative Design & Print Solutions",
  description: "Your trusted partner for designing, branding, and printing solutions.",
  icons: {
    icon: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776962525/blog_assets/tzasw1vrukgoz1proi8j.png",
    apple: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776962525/blog_assets/tzasw1vrukgoz1proi8j.png",
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
