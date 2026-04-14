import type { Metadata } from "next";
import { Geist_Mono, Jacquard_12, Jacquarda_Bastarda_9 } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jacquardaBastarda = Jacquarda_Bastarda_9({
  variable: "--font-jacquarda-bastarda",
  weight: "400",
  subsets: ["latin"],
});

const jacquard12 = Jacquard_12({
  variable: "--font-jacquard-12",
  weight: "400",
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
  openGraph: {
    title: "fizlint | the live linter for js and ts",
    description: "fizlint is a live linter for JavaScript and TypeScript that provides real-time feedback and suggestions to help developers write cleaner and more efficient code.",
    images: ["/og-img.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "fizlint | the live linter for js and ts",
    description: "fizlint is a live linter for JavaScript and TypeScript that provides real-time feedback and suggestions to help developers write cleaner and more efficient code.",
    images: ["/og-img.png"],
  },
};

export default function RootLayout({  children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${geistMono.variable} ${jacquardaBastarda.variable} ${jacquard12.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-geist-mono)" }}>
        {children}
      </body>
    </html>
  );
}
