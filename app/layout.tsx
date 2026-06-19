import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aya Essouiri — Digital Transformation & AI Engineer",
  description:
    "Portfolio of Aya Essouiri — Full-stack developer specializing in AI, IoT and data-driven applications.",
  authors: [{ name: "Aya Essouiri" }],
  openGraph: {
    title: "Aya Essouiri — Digital Transformation & AI Engineer",
    description:
      "Portfolio of Aya Essouiri — Full-stack developer specializing in AI, IoT and data-driven applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
