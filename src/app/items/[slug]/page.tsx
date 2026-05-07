import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Layers3 } from "lucide-react";
import { notFound } from "next/navigation";
import { CatalogItemCard } from "@/components/catalog/CatalogItemCard";
import { CatalogImage } from "@/components/catalog/CatalogImage";
import { CategoryBadge } from "@/components/catalog/CategoryBadge";
import { ItemPropsList } from "@/components/catalog/ItemPropsList";
import { Container } from "@/components/layout/Container";
import {
  generateSlug,
  getAllItems,
  getItemBySlug,
  getRelatedItems,
} from "@/lib/catalog";

interface ItemDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllItems().map((item) => ({
    slug: generateSlug(item.itemname),
  }));
}

export function generateMetadata({
  params,
}: ItemDetailPageProps): Metadata {
  const item = getItemBySlug(params.slug);

  if (!item) {
    return {
      title: "Item Not Found",
      description: "The requested catalog item could not be found.",
    };
  }

  const keyInformation = item.itemprops
    .slice(0, 2)
    .map((prop) => `${prop.label}: ${prop.value}`)
    .join(", ");

  return {
    title: item.itemname,
    description: `${item.itemname} in the ${item.category} category. ${keyInformation}`,
    openGraph: {
      title: item.itemname,
      description: `${item.category} catalog item with dynamically rendered specifications.`,
      images: [{ url: item.image, alt: `${item.itemname} image` }],
    },
  };
}

export default function ItemDetailPage({ params }: ItemDetailPageProps) {
  const item = getItemBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const relatedItems = getRelatedItems(item);

  return (
    <>
      <Container className="py-8 sm:py-10 lg:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to catalog overview
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#e2e8f0_100%)] p-4 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.4)] sm:p-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <CatalogImage
                src={item.image}
                alt={`${item.itemname} image`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col">
            <CategoryBadge category={item.category} />
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              {item.itemname}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              This profile is rendered entirely from the provided JSON
              structure. The UI does not assume category-specific fields and
              simply maps over the available `itemprops`.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                <Layers3 className="h-4 w-4" />
                Item specifications
              </div>
              <div className="mt-4">
                <ItemPropsList itemprops={item.itemprops} />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {relatedItems.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50/80 py-12 sm:py-16">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Same category
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                  Related {item.category}
                </h2>
              </div>
              <Link
                href="/#catalog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
              >
                Browse all categories
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {relatedItems.map((relatedItem) => (
                <CatalogItemCard
                  key={`${relatedItem.category}-${relatedItem.itemname}`}
                  item={relatedItem}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
