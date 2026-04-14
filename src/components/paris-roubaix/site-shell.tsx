import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_SC, Teko } from "next/font/google";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  buildLocalizedHref,
  siteConfig,
  siteNav,
  sourceLinks,
} from "@/data/paris-roubaix";

const displayFont = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const siteFonts = {
  display: displayFont.className,
  body: bodyFont.className,
};

export function SiteHeader({
  locale,
  tone = "light",
}: {
  locale: string;
  tone?: "light" | "dark";
}) {
  const isLight = tone === "light";
  const textClassName = isLight ? "text-[#111114]" : "text-white";
  const mutedClassName = isLight ? "text-[#3c403f]" : "text-white/70";
  const borderClassName = isLight ? "border-black/10" : "border-white/15";

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8 lg:px-12">
        <Link
          href={buildLocalizedHref(locale, "/")}
          className="flex items-center gap-3"
        >
          <Image
            src={siteConfig.logoMark}
            alt="Paris-Roubaix 标志"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg border border-white/15 bg-white/95 p-1.5"
            priority
          />
          <div className="min-w-0">
            <p
              className={cn(
                siteFonts.display,
                "text-3xl uppercase leading-none tracking-[0.04em]",
                textClassName
              )}
            >
              Paris-Roubaix
            </p>
            <p className={cn("text-xs", mutedClassName)}>
              中文战报 · 路线 · 经典历史
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={buildLocalizedHref(locale, item.href)}
              className={cn(
                "rounded-lg border px-3 py-2 text-sm transition-colors",
                borderClassName,
                isLight
                  ? "bg-white/80 text-[#111114] hover:bg-white"
                  : "bg-black/20 text-white hover:bg-white/10"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d1111]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111114] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#3c403f] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function InternalCta({
  locale,
  href,
  label,
  variant = "default",
}: {
  locale: string;
  href: string;
  label: string;
  variant?: "default" | "outline";
}) {
  return (
    <Button
      asChild
      variant={variant}
      size="lg"
      className={cn(
        "rounded-lg",
        variant === "default"
          ? "bg-[#8d1111] text-white hover:bg-[#721010]"
          : "border-[#111114]/15 bg-white/90 text-[#111114] hover:bg-white"
      )}
    >
      <Link href={buildLocalizedHref(locale, href)}>
        {label}
        <ArrowRight className="size-4" />
      </Link>
    </Button>
  );
}

export function SiteFooter({ locale }: { locale: string }) {
  return (
    <footer className="border-t border-black/10 bg-[#111114] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className={cn(siteFonts.display, "text-4xl uppercase")}>
              Paris-Roubaix.lol
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72">
              本站以中文整理 2026 Paris-Roubaix 最近战报、路线和历史背景。页面中的赛事事实主要参考官方站点与赛后报道，配图来自 Wikimedia Commons，见下方来源链接。
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {siteNav.map((item) => (
                <Link
                  key={item.href}
                  href={buildLocalizedHref(locale, item.href)}
                  className="rounded-lg border border-white/15 px-3 py-2 text-sm text-white/82 transition-colors hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
              参考来源
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {sourceLinks.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-start gap-2 transition-colors hover:text-white"
                  >
                    <ExternalLink className="mt-0.5 size-4 shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({
  locale,
  children,
  className,
}: {
  locale: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(siteFonts.body, "bg-[#f3efe7] text-[#111114]", className)}>
      <SiteHeader locale={locale} tone="light" />
      {children}
      <SiteFooter locale={locale} />
    </div>
  );
}
