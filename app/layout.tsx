import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InstantRepair — Professional Device Repair Services",
  description:
    "Fast, reliable device repair for laptops, phones, tablets, and more. 30+ years of expertise, 98% satisfaction rate, 90-day warranty. Get a free diagnosis today.",
  keywords: [
    "device repair",
    "laptop repair",
    "phone repair",
    "tablet repair",
    "computer repair",
    "screen replacement",
    "data recovery",
  ],
  openGraph: {
    title: "InstantRepair — Professional Device Repair Services",
    description:
      "Fast, reliable device repair for laptops, phones, tablets, and more. 30+ years of expertise, 90-day warranty.",
    type: "website",
    locale: "en_US",
    siteName: "InstantRepair",
  },
  twitter: {
    card: "summary_large_image",
    title: "InstantRepair — Professional Device Repair Services",
    description:
      "Fast, reliable device repair for laptops, phones, tablets, and more. 30+ years of expertise.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-white text-[#1c1c1c] antialiased">
        {children}
      </body>
    </html>
  );
}
