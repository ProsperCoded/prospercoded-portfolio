import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://your-portfolio-domain.com"; // Replace with your actual domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/temp/", "/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
