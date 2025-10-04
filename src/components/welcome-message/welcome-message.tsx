"use client";
import { SectionWrapper } from "@/modules";
import React from "react";
import ReactMarkdown from "react-markdown";
import { IWelcomeMessage, useRequest } from "@/utils";
import { useParams } from "next/navigation";

const WelcomeMessage = () => {
  const params = useParams();
  let { locale } = params;

  if (Array.isArray(locale)) {
    locale = locale[0];
  }
  const { data: message } = useRequest<IWelcomeMessage>(
    "global",
    undefined,
    locale
  );

  return (
    <>
      {message && (
        <SectionWrapper id="about">
          <div className="mx-auto max-w-[860px]">
            <h3 className="md:text-center">{message?.siteName}</h3>

            <div className="flex flex-col gap-4 text-xl font-light md:text-center mt-6 md:mt-12 welcome">
              <ReactMarkdown>{message?.siteDescription}</ReactMarkdown>
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
};

export default WelcomeMessage;
