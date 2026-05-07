import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CatalogItem } from "@/types/catalog";
import { generateSlug } from "@/lib/catalog";
import { CategoryBadge } from "./CategoryBadge";
import { CatalogImage } from "./CatalogImage";

interface CatalogItemCardProps {
  item: CatalogItem;
}

export function CatalogItemCard({ item }: CatalogItemCardProps) {
  const previewProps = item.itemprops.slice(0, 3);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <CatalogImage
          src={item.image}
          alt={`${item.itemname} image`}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <CategoryBadge category={item.category} />
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
          {item.itemname}
        </h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {previewProps.map((prop) => (
            <li
              key={`${item.itemname}-${prop.label}`}
              className="flex items-start justify-between gap-4 border-b border-dashed border-slate-200 pb-2"
            >
              <span className="font-medium text-slate-500">{prop.label}</span>
              <span className="text-right text-slate-700">{prop.value}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <Link
            href={`/items/${generateSlug(item.itemname)}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
