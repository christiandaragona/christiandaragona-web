import type { Metadata } from "next";
import { Playfair_Display, Bebas_Neue, IBM_Plex_Mono, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sicuro Design Services — Web Design, Domains & App Development · Hudson Valley",
  description:
    "Local web design, domain registration, and app development for Hudson Valley businesses. Fast turnaround, fair prices, no monthly fees. Based in Saugerties, NY.",
  keywords: "web design Hudson Valley, web design Saugerties, website developer Kingston NY, restaurant website, local web developer, Sicuro Design",
  openGraph: {
    title: "Sicuro Design Services — Web Design · Hudson Valley",
    description: "Websites, domains, and apps for local businesses. Based in Saugerties, NY.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={
        {
          "--font-playfair": playfair.style.fontFamily,
          "--font-bebas": bebas.style.fontFamily,
          "--font-mono": ibmMono.style.fontFamily,
          "--font-lora": lora.style.fontFamily,
        } as React.CSSProperties
      }
      className={`${playfair.variable} ${bebas.variable} ${ibmMono.variable} ${lora.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
