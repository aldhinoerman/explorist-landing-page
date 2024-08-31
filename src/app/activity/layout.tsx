import { Footer, Header } from "@/components";
import React from "react";

const ActivityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="max-w-[1440px] mx-auto px-4 md:px-12">{children}</main>
      <Footer />
    </div>
  );
};

export default ActivityLayout;
