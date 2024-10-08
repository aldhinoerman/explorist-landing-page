import { Footer, StickyHeader } from "@/components";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface BookLayoutProps extends React.PropsWithChildren {
  params: {
    locale: string;
  };
}

const BookLayout = ({ children, params }: BookLayoutProps) => {
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

export default BookLayout;
