import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Next 14+ creates these
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siyad S. | Creative Developer",
  description: "A high-performance 3D portfolio website building the future of the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased bg-background text-foreground overflow-x-hidden"
        )}
      >
        <SmoothScrolling>
          {children}
          <Toaster position="top-center" theme="dark" richColors closeButton />
        </SmoothScrolling>
      </body>
    </html>
  );
}
