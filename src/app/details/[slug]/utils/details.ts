import { itemDetails } from "@/data";

async function fetchDetails() {
  return itemDetails;
}

async function fetchDetailBySlug(slug: any) {
  const posts = await fetchDetails();
  return posts.filter((post) => post.key === slug);
}

export { fetchDetails, fetchDetailBySlug };
