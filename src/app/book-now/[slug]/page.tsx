import React from "react";
import { fetchBookDetail } from "./utils";
import { BookDetail } from "@/components";

interface BookNowProps {
  params: { slug: string };
}

const BookNow = ({ params }: BookNowProps) => {
  const { slug } = params;
  return <BookDetail slug={slug} />;
};

export async function generateStaticParams() {
  const bookings = await fetchBookDetail();

  return bookings.map((book) => ({
    slug: book.key,
  }));
}

export default BookNow;
