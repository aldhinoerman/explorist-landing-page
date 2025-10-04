import React from "react";
import { BookDetail } from "@/components";
import { setRequestLocale } from "next-intl/server";

interface BookNowProps {
  params: Promise<{ slug: string; locale: string }>;
}

const BookNow = async ({ params }: BookNowProps) => {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  return <BookDetail slug={slug} locale={locale} />;
};

export default BookNow;
