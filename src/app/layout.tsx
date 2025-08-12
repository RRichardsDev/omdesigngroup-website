import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Raleway } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "O.M. Design Group — Interior Design",
  description:
    "High-end residential and commercial interior design studio. Portfolio, services, and contact.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "O.M. Design Group",
    description:
      "High-end interior design studio crafting refined, livable spaces.",
    url: "https://om-design-group.local",
    siteName: "O.M. Design Group",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 200,
        alt: "O.M. Design Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
