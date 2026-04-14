import { MetadataRoute } from "next";
import { PRIMARY_LOCALE } from "@/data/paris-roubaix";
import { getSiteUrl } from "@/lib/site-url";
import { getAbsoluteLocalizedUrl } from "@/i18n/url";

const PUBLIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "daily", priority: 1.0 },
  {
    path: "/paris-roubaix-2026-results",
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    path: "/paris-roubaix-route-guide",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/paris-roubaix-history",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  { path: "/privacy-policy", changeFrequency: "monthly", priority: 0.6 },
  { path: "/terms-of-service", changeFrequency: "monthly", priority: 0.6 },
  { path: "/refund-policy", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of PUBLIC_ROUTES) {
    entries.push({
      url: getAbsoluteLocalizedUrl(siteUrl, PRIMARY_LOCALE, route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  return entries;
}
