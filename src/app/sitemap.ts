import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://exploristtourbali.com",
      lastModified: new Date(),
    },
    {
      url: "https://exploristtourbali.com/activity",
      lastModified: new Date(),
    },
    {
      url: "https://exploristtourbali.com/package",
      lastModified: new Date(),
    },
  ];
}
