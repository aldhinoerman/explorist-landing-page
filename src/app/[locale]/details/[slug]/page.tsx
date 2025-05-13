import React from "react";
import { DetailBanner } from "@/components";
import { setRequestLocale } from "next-intl/server";

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

const Details = async ({ params }: DetailPageProps) => {
  const { slug } = await params;
  return (
    <>
      <DetailBanner slug={slug} />
    </>
  );
};

export default Details;
