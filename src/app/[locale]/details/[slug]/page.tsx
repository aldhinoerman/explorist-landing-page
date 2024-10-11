import React from "react";
import { DetailBanner } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";

interface DetailPageProps {
  params: { slug: string };
}

const Details = ({ params }: DetailPageProps) => {
  const { slug } = params;
  return (
    <>
      <DetailBanner slug={slug} />
    </>
  );
};

export default Details;
