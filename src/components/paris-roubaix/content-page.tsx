import Link from "next/link";
import {
  ChevronRight,
  Flag,
  MapPinned,
  Newspaper,
  Trophy,
} from "lucide-react";
import { PageFrame, SectionHeading, siteFonts } from "./site-shell";
import {
  buildLocalizedHref,
  historyGuide,
  resultsGuide,
  routeGuide,
  siteNav,
} from "@/data/paris-roubaix";
import { cn } from "@/lib/utils";

type PageKey = "results" | "route-guide" | "history";

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-y border-black/10 bg-[#e7dfd0]">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d1111]">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111114] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-[#424846]">{intro}</p>
      </div>
    </section>
  );
}

function PageNav({ locale, active }: { locale: string; active: PageKey }) {
  const activeHref =
    active === "results"
      ? "/paris-roubaix-2026-results"
      : active === "route-guide"
        ? "/paris-roubaix-route-guide"
        : "/paris-roubaix-history";

  return (
    <div className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-4 sm:px-8 lg:px-12">
        {siteNav.map((item) => {
          const isActive = item.href === activeHref;

          return (
            <Link
              key={item.href}
              href={buildLocalizedHref(locale, item.href)}
              className={cn(
                "rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-[#8d1111] bg-[#8d1111] text-white"
                  : "border-black/10 bg-[#f7f3ec] text-[#111114] hover:bg-[#ede7db]"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function ParisRoubaixResultsPage({ locale }: { locale: string }) {
  return (
    <PageFrame locale={locale}>
      <PageHero
        eyebrow="最新战报"
        title={resultsGuide.title}
        intro={resultsGuide.intro}
      />
      <PageNav locale={locale} active="results" />

      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          <section className="rounded-lg border border-black/10 bg-white p-6">
            <div className="flex items-center gap-3 text-[#8d1111]">
              <Trophy className="size-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                男子组
              </p>
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[#4f5452]">
              {resultsGuide.men.map((item) => (
                <li key={item} className="flex gap-3">
                  <ChevronRight className="mt-1 size-4 shrink-0 text-[#8d1111]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-black/10 bg-white p-6">
            <div className="flex items-center gap-3 text-[#8d1111]">
              <Flag className="size-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                女子组
              </p>
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[#4f5452]">
              {resultsGuide.women.map((item) => (
                <li key={item} className="flex gap-3">
                  <ChevronRight className="mt-1 size-4 shrink-0 text-[#8d1111]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <SectionHeading
            eyebrow="结果意义"
            title="这不是“又一场春季古典赛”，而是两个长期叙事同时改写。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {resultsGuide.whyItMatters.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-black/10 bg-[#f7f3ec] p-6"
              >
                <h2 className="text-xl font-semibold text-[#111114]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#4f5452]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}

export function ParisRoubaixRouteGuidePage({ locale }: { locale: string }) {
  return (
    <PageFrame locale={locale}>
      <PageHero
        eyebrow="路线与时间"
        title={routeGuide.title}
        intro={routeGuide.intro}
      />
      <PageNav locale={locale} active="route-guide" />

      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {routeGuide.milestones.map((item) => (
            <div key={item.label} className="rounded-lg border border-black/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8d1111]">
                {item.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-[#111114]">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-[#4f5452]">{item.note}</p>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <SectionHeading
            eyebrow="关键石板"
            title="真正决定冠亚军的，通常不是最后 5 公里，而是之前 80 公里已经累积出的损耗。"
          />
          <div className="mt-8 space-y-4">
            {routeGuide.sectors.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-black/10 bg-[#f7f3ec] p-6"
              >
                <div className="flex items-center gap-3 text-[#8d1111]">
                  <MapPinned className="size-5" />
                  <h2 className="text-xl font-semibold text-[#111114]">{item.title}</h2>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#4f5452]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}

export function ParisRoubaixHistoryPage({ locale }: { locale: string }) {
  return (
    <PageFrame locale={locale}>
      <PageHero
        eyebrow="经典历史"
        title={historyGuide.title}
        intro={historyGuide.intro}
      />
      <PageNav locale={locale} active="history" />

      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="rounded-lg border border-black/10 bg-[#111114] px-6 py-8 text-white">
          <p className={cn(siteFonts.display, "text-5xl uppercase leading-none")}>
            Hell Of The North
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/78">
            官方站点在介绍 Paris-Roubaix 时反复把它称为 Queen of the Classics 与 Hell of the North。一个词说荣耀，一个词说代价，两者缺一不可。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {historyGuide.beats.map((item, index) => {
            const Icon = index === 0 ? Newspaper : index === 1 ? MapPinned : Trophy;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-black/10 bg-white p-6"
              >
                <Icon className="size-5 text-[#8d1111]" />
                <h2 className="mt-4 text-xl font-semibold text-[#111114]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#4f5452]">{item.body}</p>
              </article>
            );
          })}
        </div>
      </main>
    </PageFrame>
  );
}
