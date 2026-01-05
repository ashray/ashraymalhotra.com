import { MetadataRoute } from "next";

// Auto-generates sitemap.xml for SEO
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ashraymalhotra.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
