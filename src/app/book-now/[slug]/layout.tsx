import { Footer } from "@/components";
import React from "react";

interface BookLayoutProps extends React.PropsWithChildren {}

const BookLayout = ({ children }: BookLayoutProps) => {
  return (
    <>
      <main className="max-w-[1440px] mx-auto px-4 md:px-12">{children}</main>
      <Footer />
    </>
  );
};

export default BookLayout;
