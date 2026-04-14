import { ParisRoubaixHomePage } from "@/components/paris-roubaix/home-page";
import {
  faqItems,
  PRIMARY_LOCALE,
  siteConfig,
} from "@/data/paris-roubaix";
import { buildParisRoubaixMetadata } from "@/lib/paris-roubaix-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return buildParisRoubaixMetadata({
    locale,
    path: "/",
    title: `${siteConfig.title} | ${siteConfig.name}`,
    description: siteConfig.description,
  });
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <ParisRoubaixHomePage locale={locale} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              name: "Paris-Roubaix 2026",
              eventStatus: "https://schema.org/EventCompleted",
              startDate: "2026-04-12",
              endDate: "2026-04-12",
              url: `https://${siteConfig.domain}${locale === PRIMARY_LOCALE ? "/zh" : `/${locale}`}`,
              description: siteConfig.description,
              location: {
                "@type": "Place",
                name: "Velodrome Andre-Petrieux, Roubaix",
                address: "Roubaix, France",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]),
        }}
      />
    </>
  );
}
