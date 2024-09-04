import React from "react";
import { fetchDetails } from "./utils";
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

export async function generateStaticParams() {
  const details = await fetchDetails();

  return details.map((pack) => ({
    slug: pack.key,
  }));
}

export default Details;
