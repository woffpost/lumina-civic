import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina Civic — Non-Profit",
  description: "Demo landing page — Lumina Civic — Non-Profit",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
