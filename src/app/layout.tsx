import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/styles/index.scss";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explorist Tour Bali",
  description: "Your best travel mate",
  creator: "https://github.com/aldhinoerman",
  openGraph: {
    title: "Explorist Tour Bali",
    description: "Your best travel mate",
    url: "https://www.exploristtourbali.com",
    siteName: "Explorist Tour Bali",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
