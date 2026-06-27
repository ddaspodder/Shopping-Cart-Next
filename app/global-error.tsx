"use client";

import { ErrorPage } from "@/src/pages/error";
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

type GlobalErrorProps = {
  error: Error & { digest?: string };
  unstable_retry?: () => void;
  reset?: () => void;
};

export default function GlobalError({
  error,
  unstable_retry,
  reset,
}: GlobalErrorProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ErrorPage
          error={error}
          onRetry={unstable_retry ?? reset ?? (() => window.location.reload())}
          scopeLabel="app"
        />
      </body>
    </html>
  );
}
