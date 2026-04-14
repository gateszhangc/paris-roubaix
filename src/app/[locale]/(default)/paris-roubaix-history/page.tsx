import { ParisRoubaixHistoryPage } from "@/components/paris-roubaix/content-page";
import { buildParisRoubaixMetadata } from "@/lib/paris-roubaix-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return buildParisRoubaixMetadata({
    locale,
    path: "/paris-roubaix-history",
    title: "Paris-Roubaix 经典历史 | Paris-Roubaix.lol",
    description:
      "用中文理解 Paris-Roubaix 为什么叫“北方地狱”、Roubaix 赛车场为何关键，以及这项赛事如何制造传奇。",
  });
}

export default async function ParisRoubaixHistoryRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <ParisRoubaixHistoryPage locale={locale} />;
}
