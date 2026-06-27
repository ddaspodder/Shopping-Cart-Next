import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";
import { QueryProvider, SessionProvider } from "@/src/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopping Cart",
  description:
    "A clean shopping cart storefront with products, orders, and cart access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <QueryProvider>
          <SessionProvider>
            <Header />
            {children}
            <Footer />
          </SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
