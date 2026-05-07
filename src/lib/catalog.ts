import catalogData from "@/data/catalog.json";
import type { CatalogItem } from "@/types/catalog";

const catalogItems = catalogData as CatalogItem[];

export function generateSlug(itemname: string): string {
  return itemname
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllItems(): CatalogItem[] {
  return catalogItems;
}

export function getCategories(): string[] {
  const seen = new Set<string>();

  return catalogItems.reduce<string[]>((categories, item) => {
    if (!seen.has(item.category)) {
      seen.add(item.category);
      categories.push(item.category);
    }

    return categories;
  }, []);
}

export function groupItemsByCategory(): Record<string, CatalogItem[]> {
  return catalogItems.reduce<Record<string, CatalogItem[]>>((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }

    groups[item.category].push(item);
    return groups;
  }, {});
}

export function getItemBySlug(slug: string): CatalogItem | undefined {
  return catalogItems.find((item) => generateSlug(item.itemname) === slug);
}

export function getRelatedItems(item: CatalogItem): CatalogItem[] {
  const currentSlug = generateSlug(item.itemname);

  return catalogItems
    .filter(
      (candidate) =>
        candidate.category === item.category &&
        generateSlug(candidate.itemname) !== currentSlug,
    )
    .slice(0, 4);
}
