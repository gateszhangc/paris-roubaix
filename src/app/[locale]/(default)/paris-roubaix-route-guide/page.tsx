import { ParisRoubaixRouteGuidePage } from "@/components/paris-roubaix/content-page";
import { buildParisRoubaixMetadata } from "@/lib/paris-roubaix-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return buildParisRoubaixMetadata({
    locale,
    path: "/paris-roubaix-route-guide",
    title: "Paris-Roubaix 2026 路线与时间指南 | Paris-Roubaix.lol",
    description:
      "中文查看 2026 Paris-Roubaix 关键石板区、男子与女子赛道变化、以及观赛时最该盯住的三个节点。",
  });
}

export default async function ParisRoubaixRouteGuideRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <ParisRoubaixRouteGuidePage locale={locale} />;
}
