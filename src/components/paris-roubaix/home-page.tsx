import Image from "next/image";
import Link from "next/link";
import { Clock3, Flag, MapPinned, Radio, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading, SiteFooter, SiteHeader, siteFonts, InternalCta } from "./site-shell";
import {
  faqItems,
  latestNews,
  leadStory,
  quickFacts,
  siteConfig,
  watchGuide,
} from "@/data/paris-roubaix";
import { cn } from "@/lib/utils";

const factIcons = [Trophy, Flag, MapPinned, Radio];

export function ParisRoubaixHomePage({ locale }: { locale: string }) {
  return (
    <div className={cn(siteFonts.body, "bg-[#f3efe7] text-[#111114]")}>
      <section className="relative isolate min-h-[84svh] overflow-hidden bg-[#111114] text-white">
        <Image
          src={siteConfig.heroImage}
          alt="Paris-Roubaix 石板路主集团在石板路上高速通过"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.40)_0%,rgba(10,10,10,0.72)_52%,rgba(10,10,10,0.92)_100%)]" />

        <SiteHeader locale={locale} tone="dark" />

        <div className="relative mx-auto flex min-h-[calc(84svh-84px)] max-w-6xl flex-col justify-end px-6 pb-14 pt-14 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3c05d]">
              {leadStory.badge}
            </p>
            <h1
              className={cn(
                siteFonts.display,
                "mt-5 text-6xl uppercase leading-[0.85] tracking-[0.05em] text-white sm:text-7xl lg:text-8xl"
              )}
            >
              Paris-Roubaix
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/86 sm:text-xl">
              {leadStory.title}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/74 sm:text-lg">
              {leadStory.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <InternalCta
                locale={locale}
                href="/paris-roubaix-2026-results"
                label="查看最新战报"
              />
              <InternalCta
                locale={locale}
                href="/paris-roubaix-route-guide"
                label="路线与时间"
                variant="outline"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {quickFacts.slice(0, 3).map((fact, index) => {
              const Icon = factIcons[index];

              return (
                <div
                  key={fact.label}
                  className="rounded-lg border border-white/14 bg-white/8 p-4 backdrop-blur"
                >
                  <div className="flex items-center gap-2 text-[#f3c05d]">
                    <Icon className="size-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                      {fact.label}
                    </span>
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-white">{fact.value}</p>
                  <p className="mt-1 text-sm text-white/70">{fact.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <main>
        <section className="border-y border-black/10 bg-[#e7dfd0]">
          <div className="mx-auto grid max-w-6xl gap-4 px-6 py-6 sm:px-8 md:grid-cols-4 lg:px-12">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-lg bg-white/82 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8d1111]">
                  {fact.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-[#111114]">{fact.value}</p>
                <p className="mt-1 text-sm leading-6 text-[#4f5452]">{fact.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f7f3ec]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <SectionHeading
              eyebrow="最近新闻"
              title="先看结论，再决定要不要把整场比赛补完。"
              description="这三条是当前最值得读的新闻线：男子冠军如何诞生、为什么 2026 被称作史上最快、以及女子同日赛制如何把 Franziska Koch 推到聚光灯中心。"
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {latestNews.map((item) => (
                <article
                  key={item.href}
                  className="rounded-lg border border-black/10 bg-white p-5 shadow-[0_16px_40px_rgba(17,17,20,0.05)]"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8d1111]">
                    <span>{item.source}</span>
                    <span className="text-[#848987]">{item.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-8 text-[#111114]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4f5452]">{item.summary}</p>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#111114] underline-offset-4 hover:underline"
                  >
                    查看原始报道
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3efe7]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-20">
            <div>
              <SectionHeading
                eyebrow="观赛指南"
                title="你不需要记住全部石板区，但一定要知道什么时候开始“真正比赛”。"
                description="Paris-Roubaix 最迷人的地方在于，比赛很少等到最后 20 公里才开始。2026 赛道把前段石板做得更密，意味着真正的淘汰可能发生得比你预期更早。"
              />

              <div className="mt-8 space-y-4">
                {watchGuide.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-black/10 bg-white px-5 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <Clock3 className="mt-1 size-5 text-[#8d1111]" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#111114]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[#4f5452]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <InternalCta
                  locale={locale}
                  href="/paris-roubaix-route-guide"
                  label="打开路线页"
                />
                <InternalCta
                  locale={locale}
                  href="/paris-roubaix-history"
                  label="读经典历史"
                  variant="outline"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={siteConfig.velodromeImage}
                    alt="Roubaix 赛车场看台与赛道"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="rounded-lg border border-black/10 bg-[#111114] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f3c05d]">
                  为什么终点场地这么重要
                </p>
                <p className="mt-3 text-base leading-7 text-white/82">
                  其他古典赛把冲刺留给一条直线，Roubaix 把冲刺留给一个椭圆场。进场前的位置、弯道的外内线、最后半圈何时摇车，都会把“腿更强”和“判断更准”重新混在一起。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <SectionHeading
              eyebrow="常见问题"
              title="四个问题，快速建立这项赛事的观看框架。"
            />

            <Accordion type="single" collapsible className="mt-10 border-t border-black/10">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#111114] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-[#4f5452]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
