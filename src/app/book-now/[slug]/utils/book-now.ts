import { bookDetails } from "@/data";

async function fetchBookDetail() {
  return bookDetails;
}

async function fetchBookDetailBySlug(slug: any) {
  const bookDetail = await fetchBookDetail();
  return bookDetail.filter((book) => book.key === slug);
}

export { fetchBookDetail, fetchBookDetailBySlug };
