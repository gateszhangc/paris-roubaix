import { ParisRoubaixResultsPage } from "@/components/paris-roubaix/content-page";
import { buildParisRoubaixMetadata } from "@/lib/paris-roubaix-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return buildParisRoubaixMetadata({
    locale,
    path: "/paris-roubaix-2026-results",
    title: "Paris-Roubaix 2026 最新战报 | Paris-Roubaix.lol",
    description:
      "中文整理 2026 Paris-Roubaix 男子组与女子组冠军、终点冲刺和赛后意义。",
  });
}

export default async function ParisRoubaixResultsRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <ParisRoubaixResultsPage locale={locale} />;
}
