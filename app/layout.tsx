import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aariz Naseer — AI Product (Website & SEO) @ Zoca",
  description:
    "Portfolio of Aariz Naseer — driving intelligent AI-powered website design, pioneering SEO strategies, and optimizing web performance at Zoca, Bengaluru.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
