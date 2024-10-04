import { Footer, StickyHeader } from "@/components";
import React from "react";

interface BookLayoutProps extends React.PropsWithChildren {}

const BookLayout = ({ children }: BookLayoutProps) => {
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
