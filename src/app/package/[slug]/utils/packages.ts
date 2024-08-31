async function fetchPackages() {
  return [
    {
      slug: "kuta",
      title: "My First Post",
      content: "This is my first post",
    },
    {
      slug: "east-bali",
      title: "Another Post",
      content: "This is another post",
    },
  ];
}

async function fetchPackagesBySlug(slug: any) {
  const posts = await fetchPackages();
  return posts.filter((post) => post.slug === slug);
}

export { fetchPackages, fetchPackagesBySlug };
