import React from "react";
import { DetailBanner } from "@/components";
import { setRequestLocale } from "next-intl/server";

interface DetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const Details = async ({ params }: DetailPageProps) => {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return (
    <>
      <DetailBanner slug={slug} />
    </>
  );
};

export default Details;
