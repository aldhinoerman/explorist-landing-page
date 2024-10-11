import { Footer, StickyHeader } from "@/components";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";
import React, { PropsWithChildren } from "react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const DetailLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  unstable_setRequestLocale(params.locale);
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
