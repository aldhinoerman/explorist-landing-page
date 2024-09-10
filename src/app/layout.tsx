import type { Metadata } from "next";
import "../assets/styles/index.scss";
import { ContactUs } from "@/components";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className="bg-white">
        {children}
        <ContactUs />
      </body>
      <GoogleAnalytics gaId={String(process.env.NEXT_PUBLIC_GAID)} />
      <GoogleTagManager gtmId={String(process.env.NEXT_PUBLIC_GTMID)} />
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://exploristtourbali.com"),
    title: "Explorist Tour Bali",
    description: "Explore More Discover More",
    authors: [
      {
        name: "Explorist Tour Bali",
        url: "https://exploristtourbali.com",
      },
    ],
    robots: "index, follow",
    keywords: [
      "explore",
      "discover",
      "bali",
      "travel",
      "tour",
      "activity",
      "culture",
      "art",
      "kuta",
      "uluwatu",
    ],
  };
}
