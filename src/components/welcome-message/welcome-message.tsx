import { SectionWrapper } from "@/modules";
import React from "react";
import textMarkdown from "./message.md";
import ReactMarkdown from "react-markdown";

const WelcomeMessage = () => {
  return (
    <>
      <SectionWrapper id="about">
        <div className="mx-auto max-w-[860px]">
          <h3 className="md:text-center">
            Welcome, Explorers! Warm greetings from Bali!
          </h3>

          <div className="flex flex-col gap-4 text-xl font-light md:text-center mt-6 md:mt-12 welcome">
            <ReactMarkdown>{textMarkdown}</ReactMarkdown>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default WelcomeMessage;
