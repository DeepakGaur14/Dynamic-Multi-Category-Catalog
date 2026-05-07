import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, Layers3, Sparkles } from "lucide-react";
import { CategorySection } from "@/components/catalog/CategorySection";
import { Container } from "@/components/layout/Container";
import { getAllItems, getCategories, groupItemsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Dynamic Multi-Category Catalog",
  description:
    "Browse a responsive catalog of cars, bikes, phones, and computers with dynamically rendered item specifications.",
};

const categoryDescriptions: Record<string, string> = {
  Cars: "Explore performance cars, SUVs, EVs, and touring models with spec-driven presentation.",
  Phones:
    "Compare flagship smartphones through their unique cameras, displays, batteries, and standout features.",
  Bikes:
    "Browse street, touring, and superbike machines with category-agnostic technical highlights.",
  Computers:
    "Review creative and gaming computers by whichever specs the JSON provides for each machine.",
};

export default function HomePage() {
  const items = getAllItems();
  const categories = getCategories();
  const groupedItems = groupItemsByCategory();
  const propertyCount = items.reduce(
    (total, item) => total + item.itemprops.length,
    0,
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(249,115,22,0.18),_transparent_24%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_52%,_#ffffff_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Assignment-ready catalog
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Dynamic Multi-Category Catalog
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Browse cars, bikes, phones, and computers from one shared data
                model. Every item detail is rendered directly from the provided
                JSON, so category-specific specifications appear without
                hardcoded UI branches.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#catalog"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore Catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#categories"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white"
                >
                  Jump to Categories
                  <Layers3 className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]">
                <p className="text-sm font-medium text-slate-500">
                  Available categories
                </p>
                <p className="mt-3 text-4xl font-semibold text-slate-950">
                  {categories.length}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Generated dynamically from the provided catalog JSON.
                </p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]">
                <p className="text-sm font-medium text-slate-500">
                  Total items
                </p>
                <p className="mt-3 text-4xl font-semibold text-slate-950">
                  {items.length}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Ready for preview cards and dedicated detail pages.
                </p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]">
                <p className="text-sm font-medium text-slate-500">
                  Dynamic specifications
                </p>
                <p className="mt-3 text-4xl font-semibold text-slate-950">
                  {propertyCount}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Rendered by iterating over each item&apos;s `itemprops` array.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="categories"
        className="border-b border-slate-200/80 bg-white/85 py-8 backdrop-blur"
      >
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Category overview
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                Browse by catalog section
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                >
                  <Boxes className="h-4 w-4 text-slate-400" />
                  {category}
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs text-slate-500">
                    {groupedItems[category]?.length ?? 0}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <div id="catalog" className="py-10 sm:py-12">
        <Container className="space-y-10">
          {categories.map((category, index) => (
            <CategorySection
              key={category}
              category={category}
              items={groupedItems[category] ?? []}
              description={
                categoryDescriptions[category] ??
                `${groupedItems[category]?.length ?? 0} items rendered from the shared JSON source with fully dynamic specification fields.`
              }
              accentIndex={index}
            />
          ))}
        </Container>
      </div>
    </>
  );
}
