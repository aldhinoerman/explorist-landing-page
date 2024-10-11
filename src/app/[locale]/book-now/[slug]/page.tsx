import React from "react";
import { BookDetail } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";

interface BookNowProps {
  params: { slug: string; locale: string };
}

const BookNow = ({ params }: BookNowProps) => {
  const { slug, locale } = params;
  return <BookDetail slug={slug} locale={locale} />;
};

export default BookNow;
