import React from "react";
import { BookDetail } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";

interface BookNowProps {
  params: { slug: string };
}

const BookNow = ({ params }: BookNowProps) => {
  const { slug } = params;
  return <BookDetail slug={slug} />;
};

export default BookNow;
