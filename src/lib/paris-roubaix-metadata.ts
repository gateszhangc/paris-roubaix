import type { Metadata } from "next";
import {
  PRIMARY_LOCALE,
  buildCanonicalLocalePath,
  siteConfig,
} from "@/data/paris-roubaix";
import { getAbsoluteLocalizedUrl } from "@/i18n/url";
import { getSiteUrl } from "@/lib/site-url";

export function buildParisRoubaixMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalPath = buildCanonicalLocalePath(path);
  const canonicalUrl = getAbsoluteLocalizedUrl(siteUrl, PRIMARY_LOCALE, path);
  const shouldIndex = locale === PRIMARY_LOCALE;
  const ogImage = new URL(siteConfig.ogImage, siteUrl).toString();

  return {
    title,
    description,
    keywords: siteConfig.keywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      locale: "zh_CN",
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: shouldIndex,
      follow: shouldIndex,
    },
    other: {
      "x-default-canonical": canonicalPath,
    },
  };
}
