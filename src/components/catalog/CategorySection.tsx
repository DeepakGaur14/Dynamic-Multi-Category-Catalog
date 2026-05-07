import type { CatalogItem } from "@/types/catalog";
import { CatalogItemCard } from "./CatalogItemCard";

const sectionAccents = [
  "from-sky-100 via-white to-white",
  "from-amber-100 via-white to-white",
  "from-emerald-100 via-white to-white",
  "from-violet-100 via-white to-white",
];

interface CategorySectionProps {
  category: string;
  items: CatalogItem[];
  description: string;
  accentIndex?: number;
}

export function CategorySection({
  category,
  items,
  description,
  accentIndex = 0,
}: CategorySectionProps) {
  return (
    <section
      id={category.toLowerCase()}
      className={`rounded-[2rem] border border-slate-200/80 bg-gradient-to-br ${
        sectionAccents[accentIndex % sectionAccents.length]
      } p-6 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.35)] sm:p-8`}
    >
      <div className="flex flex-col gap-3 border-b border-slate-200/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Category
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            {category}
          </h2>
        </div>
        <div className="sm:max-w-md sm:text-right">
          <p className="text-sm text-slate-600">{description}</p>
          <p className="mt-2 text-sm font-medium text-slate-500">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <CatalogItemCard key={`${category}-${item.itemname}`} item={item} />
        ))}
      </div>
    </section>
  );
}
