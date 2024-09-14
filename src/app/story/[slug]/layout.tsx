import { Footer, StickyHeader } from "@/components";
import React from "react";

const StoryLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div>
        <StickyHeader />
        <main className="max-w-[1440px] min-h-screen mx-auto px-4 md:px-12">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StoryLayout;
