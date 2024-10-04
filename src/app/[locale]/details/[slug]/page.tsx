import React from "react";
import { DetailBanner } from "@/components";

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
