import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteTitle = "Becky Anjola Lasore | Finance, Operations & Brand";
const siteDescription =
  "Finance and operations professional, FinTech graduate at Covenant University, and CEO of Theokallia — building systems, brands, and teams across banking and entrepreneurship.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Becky Anjola Lasore",
    "FinTech",
    "Finance",
    "Operations",
    "Theokallia",
    "Covenant University",
    "Digital Banking",
  ],
  authors: [{ name: "Becky Anjola Lasore" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/images/becky-about.jpg",
        width: 800,
        height: 1000,
        alt: "Becky Anjola Lasore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/becky-about.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
