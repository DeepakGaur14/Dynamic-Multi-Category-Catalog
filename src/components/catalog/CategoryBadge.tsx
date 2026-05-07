import { cn } from "@/lib/utils";

const badgeStyles: Record<string, string> = {
  Cars: "border-amber-200 bg-amber-50 text-amber-800",
  Phones: "border-sky-200 bg-sky-50 text-sky-800",
  Bikes: "border-emerald-200 bg-emerald-50 text-emerald-800",
  Computers: "border-violet-200 bg-violet-50 text-violet-800",
};

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export function CategoryBadge({
  category,
  className,
}: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
        badgeStyles[category] ?? "border-slate-200 bg-slate-100 text-slate-700",
        className,
      )}
    >
      {category}
    </span>
  );
}
