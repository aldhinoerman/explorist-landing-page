import { Footer } from "@/components";
import React, { PropsWithChildren } from "react";

const DetailLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main className="max-w-[1440px] mx-auto px-4 md:px-12">{children}</main>
      <Footer />
    </>
  );
};

export default DetailLayout;
