import { MetadataRoute } from "next";

// Auto-generates robots.txt for SEO
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ashraymalhotra.com/sitemap.xml",
  };
}
