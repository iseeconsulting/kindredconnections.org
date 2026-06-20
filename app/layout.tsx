import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";

import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kindredkonnections.com";
const defaultTitle = "Kindred Konnections | Heart-led Group Home Care";
const defaultDescription =
  "Heart-led group home care with compassionate support, cozy routines, and meaningful Konnections in a safe residential setting.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Kindred Konnections",
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Kindred Konnections",
    images: ["/og-default.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-default.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#0f1c2e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} font-sans min-h-screen bg-kc-gray text-kc-charcoal antialiased`}>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
