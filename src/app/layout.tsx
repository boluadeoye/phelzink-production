import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phelzink Production | Creative Design & Print Solutions",
  description: "Your trusted partner for designing, branding, and printing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* HARDCODED FAVICON FOR STATIC EXPORT */}
        <link rel="icon" href="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776962525/blog_assets/tzasw1vrukgoz1proi8j.png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776962525/blog_assets/tzasw1vrukgoz1proi8j.png" />
        
        {/* FONT INJECTION */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
