import { SectionWrapper } from "@/modules";
import React from "react";
import textMarkdown from "./message.md";
import ReactMarkdown from "react-markdown";

const WelcomeMessage = () => {
  return (
    <>
      <SectionWrapper id="about">
        <div className="mx-auto max-w-[860px]">
          <h2 className="md:text-center">
            The Best Way to Explore Bali With Affordable and Fair Price.
          </h2>

          <div className="flex flex-col gap-4 md:text-center my-12">
            <ReactMarkdown>{textMarkdown}</ReactMarkdown>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default WelcomeMessage;
