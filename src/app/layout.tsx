import type { Metadata } from "next";
import { Geist, Geist_Mono, Cutive_Mono } from "next/font/google";
import "./globals.css";
import PageWrapper from "./PageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dynamic Text",
  description: "some cool text based frontend stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cutiveMono.variable} antialiased`}
      >
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
