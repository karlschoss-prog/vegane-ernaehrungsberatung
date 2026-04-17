import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/impressum", "/datenschutz", "/agb"],
    },
    sitemap: "https://christinschoss.de/sitemap.xml",
  };
}
