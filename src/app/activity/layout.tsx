import { Footer, Header, StickyHeader } from "@/components";
import React, { PropsWithChildren } from "react";

const ActivityLayout: React.FC<PropsWithChildren> = ({ children }) => {
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
