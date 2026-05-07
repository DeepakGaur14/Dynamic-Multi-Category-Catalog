import type { ItemProp } from "@/types/catalog";

interface ItemPropsListProps {
  itemprops: ItemProp[];
}

export function ItemPropsList({ itemprops }: ItemPropsListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {itemprops.map((prop) => (
        <div
          key={`${prop.label}-${prop.value}`}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            {prop.label}
          </p>
          <p className="mt-2 text-base font-semibold text-slate-900">
            {prop.value}
          </p>
        </div>
      ))}
    </div>
  );
}
