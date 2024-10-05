"use client";
import { SectionWrapper } from "@/modules";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useTranslations } from "next-intl";

import deMd from "../../../locales/de/message.md";
import enMd from "../../../locales/en/message.md";
import frMd from "../../../locales/fr/message.md";
import hiMd from "../../../locales/hi/message.md";
import jaMd from "../../../locales/ja/message.md";
import koMd from "../../../locales/ko/message.md";
import nlMd from "../../../locales/nl/message.md";
import ruMd from "../../../locales/ru/message.md";
import tlMd from "../../../locales/tl/message.md";
import zhMd from "../../../locales/zh/message.md";
import { useParams } from "next/navigation";

const langMap: any = {
  en: enMd,
  de: deMd,
  fr: frMd,
  hi: hiMd,
  ja: jaMd,
  ko: koMd,
  nl: nlMd,
  ru: ruMd,
  tl: tlMd,
  zh: zhMd,
};

const WelcomeMessage = () => {
  const params = useParams();
  const { locale } = params;
  const t = useTranslations();

  return (
    <>
      <SectionWrapper id="about">
        <div className="mx-auto max-w-[860px]">
          <h3 className="md:text-center">{t("welcome.title")}</h3>

          <div className="flex flex-col gap-4 text-xl font-light md:text-center mt-6 md:mt-12 welcome">
            <ReactMarkdown>{langMap[String(locale ?? "en")]}</ReactMarkdown>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default WelcomeMessage;
