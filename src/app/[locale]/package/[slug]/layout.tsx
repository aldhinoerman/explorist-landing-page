import { Footer, Header, StickyHeader } from "@/components";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import React from "react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const PackageLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div>
      <StickyHeader isParent />
      <Header />
      <main className="max-w-[1440px] min-h-screen mx-auto px-4 md:px-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PackageLayout;
