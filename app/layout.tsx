import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fizlint | the live linter for js and ts",
  description: "fizlint is a live linter for JavaScript and TypeScript that provides real-time feedback and suggestions to help developers write cleaner and more efficient code. With fizlint, you can catch errors and potential issues as you type, making it easier to maintain high code quality and improve your development workflow.",
  keywords: [
    "fizlint",
    "live linter",
    "JavaScript linter",
    "TypeScript linter",
    "real-time feedback",
    "code suggestions",
    "code quality",
    "development workflow",
  ],
};

export default function RootLayout({  children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
