import type {Metadata, Viewport} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import {Toaster} from "@/components/ui/sonner";
import {ThemeProvider} from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'NextJS Template',
    description: 'A comprehensive NextJS template with all the modern technologies',
    keywords: ['nextjs', 'react', 'template', 'typescript', 'tailwind'],
    authors: [{ name: 'Rui Pedro Gomes - rpgomes' }],
};

export const viewport: Viewport = {
    initialScale: 1,
    width: "device-width",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <ThemeProvider>
        {children}
        <Toaster />
    </ThemeProvider>
    </body>
    </html>
  );
}
