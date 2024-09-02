import { itemPackages } from "@/data";

async function fetchPackages() {
  return itemPackages;
}

async function fetchPackagesBySlug(slug: any) {
  const posts = await fetchPackages();
  return posts.filter((post) => post.key === slug);
}

export { fetchPackages, fetchPackagesBySlug };
