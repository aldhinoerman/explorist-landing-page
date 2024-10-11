import { Footer, Header, StickyHeader } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";
import React, { PropsWithChildren } from "react";

const ActivityLayout = ({
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
      <main className="max-w-[1440px] mx-auto px-4 md:px-12">{children}</main>
      <Footer />
    </div>
  );
};

export default ActivityLayout;
