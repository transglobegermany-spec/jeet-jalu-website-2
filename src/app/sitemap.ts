import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { programs } from "@/data/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/programs", "/method", "/about", "/stories", "/apply"].map(
    (path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const programRoutes = programs.map((p) => ({
    url: `${site.url}/programs/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...programRoutes];
}
