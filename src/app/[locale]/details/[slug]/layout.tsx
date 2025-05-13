import { Footer, StickyHeader } from "@/components";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import React, { PropsWithChildren } from "react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const DetailLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <StickyHeader />
      <main className="max-w-[1440px] min-h-screen mx-auto px-4 md:px-12">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DetailLayout;
