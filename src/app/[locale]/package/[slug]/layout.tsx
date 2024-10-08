import { Footer, Header, StickyHeader } from "@/components";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const PackageLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  unstable_setRequestLocale(params.locale);
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
