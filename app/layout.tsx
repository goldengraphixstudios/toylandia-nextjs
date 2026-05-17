import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://goldengraphixstudios.github.io/toylandia-nextjs"),
  title: "ToyLandia | Brand-New Toys by the Kilo",
  description:
    "ToyLandia — brand-new toys imported directly from China, sold per kilogram. Affordable for families, gift buyers, resellers, and bulk shoppers. Shop via live selling, walk-in, Shopee, or TikTok.",
  keywords:
    "toylandia, toys per kilo, brand new toys Philippines, toy shop, affordable toys, reseller toys, China imports, family toys",
  openGraph: {
    title: "ToyLandia | Brand-New Toys by the Kilo",
    description:
      "Brand-new toys from China, sold per kilo. Perfect for families, gift buyers, and resellers. Live selling, walk-in, Shopee, and TikTok Shop.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
