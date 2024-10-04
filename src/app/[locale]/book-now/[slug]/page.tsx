import React from "react";
import { BookDetail } from "@/components";

interface BookNowProps {
  params: { slug: string };
}

const BookNow = ({ params }: BookNowProps) => {
  const { slug } = params;
  return <BookDetail slug={slug} />;
};

export default BookNow;
