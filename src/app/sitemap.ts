import type { MetadataRoute } from "next";

import { getSlugs } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/work",
    "/projects",
    "/writing",
    "/photography",
    "/now",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const collections: { collection: string; base: string }[] = [
    { collection: "work", base: "/work" },
    { collection: "projects", base: "/projects" },
    { collection: "writing", base: "/writing" },
    { collection: "photography", base: "/photography" },
  ];

  const dynamicRoutes = collections.flatMap(({ collection, base }) =>
    getSlugs(collection).map((slug) => ({
      url: `${siteConfig.url}${base}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  return [...staticRoutes, ...dynamicRoutes];
}
