import { MetadataRoute } from "next";

const BASE = "https://hariprasad.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/career", priority: 0.8 },
    { path: "/founder", priority: 0.8 },
    { path: "/speaking", priority: 0.8 },
    { path: "/community", priority: 0.7 },
    { path: "/content", priority: 0.7 },
    { path: "/clicks", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
