import { Footer, Header, StickyHeader } from "@/components";
import { setRequestLocale } from "next-intl/server";
import React from "react";

// Define correct props type
interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const ActivityLayout = async ({ children, params }: LayoutProps) => {
  // Await the params Promise
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div>
      <StickyHeader isParent />
      <Header />
      <main className="max-w-[1440px] mx-auto px-4 md:px-12">{children}</main>
      <Footer />
    </div>
  );
};

export default ActivityLayout;
