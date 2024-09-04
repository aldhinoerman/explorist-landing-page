import { Footer, Header, StickyHeader } from "@/components";
import React from "react";

const PackageLayout = ({ children }: { children: React.ReactNode }) => {
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
