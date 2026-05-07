# Dynamic Multi-Category Catalog

## Objective

Build a responsive Next.js application that reads a provided local JSON file and dynamically renders a multi-category catalog with category overview sections and item detail pages.

## Description

This project refactors the original electronics showcase into a JSON-driven catalog for multiple categories, including Cars, Bikes, Phones, and Computers. The application uses the provided file as the primary data source and renders item details dynamically based on each item’s `itemprops`.

This project dynamically renders item details by iterating over the itemprops array from the provided JSON. This allows every category, such as Cars, Bikes, Phones, and Computers, to have different attributes without changing the UI component logic.

## Tech Stack

- Next.js 13 App Router
- TypeScript
- Tailwind CSS
- `next/image` for optimized remote images
- Local static JSON data

## Features

- Uses the provided JSON file as the main catalog source
- Dynamically derives categories from the JSON data
- Renders a separate category section for each discovered category
- Shows reusable item cards with image, badge, and preview specs
- Generates slug-based detail routes at `/items/[slug]`
- Dynamically renders all item properties from `itemprops`
- Displays related items from the same category
- Responsive layout for mobile, tablet, and desktop
- SEO metadata for the home page and item detail pages
- Remote image domain support plus image fallback behavior

## Routes

- `/`
  Home page with hero section and category overview
- `/items/[slug]`
  Dynamic item detail page for a selected catalog item

## Data Format

Source file: `src/data/catalog.json`

Each catalog item keeps the provided structure:

```ts
{
  itemname: string;
  category: string;
  image: string;
  itemprops: {
    label: string;
    value: string;
  }[];
}
```

Optional helper values such as slugs are generated at runtime and are not stored in the source data.

## Dynamic Rendering Approach

- Categories are generated with `getCategories()`
- Category groupings are built with `groupItemsByCategory()`
- Detail pages resolve items with `getItemBySlug()`
- Related items are derived with `getRelatedItems()`
- Item specification UIs map over `itemprops` without category-specific conditions

## Folder Structure

```text
src/
  app/
    items/
      [slug]/
        page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    catalog/
      CatalogImage.tsx
      CatalogItemCard.tsx
      CategoryBadge.tsx
      CategorySection.tsx
      ItemPropsList.tsx
    layout/
      Container.tsx
      Footer.tsx
      Header.tsx
  data/
    catalog.json
  lib/
    catalog.ts
    utils.ts
  types/
    catalog.ts
```

## How to Install

```bash
npm install
```

## How to Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## How to Build

```bash
npm run build
```

## Responsive Design Notes

- Mobile uses single-column item layouts
- Tablet uses two-column catalog grids
- Desktop expands to three or four cards depending on context
- Item detail pages stack on smaller screens and switch to two columns on larger screens

## SEO Notes

- Home page metadata is defined in `src/app/page.tsx`
- Shared metadata defaults are defined in `src/app/layout.tsx`
- Item detail metadata is generated dynamically in `src/app/items/[slug]/page.tsx`
- Semantic headings are used with one `h1` per page and `h2` per category section

## Image Configuration

Remote image domains are configured in `next.config.js` for all hostnames used by the provided JSON file. A client-side fallback image is also used if a remote image fails to load.

## AI-Assisted Development Notes

- AI assistance was used to refactor the existing codebase into a JSON-driven multi-category catalog
- All catalog rendering logic, routing, and typing were aligned to the provided assignment requirements
- The provided JSON structure was preserved and not replaced with dummy data

## Future Improvements

- Add category-level filtering and search without changing the core data model
- Add lightweight image blur placeholders
- Add unit tests for slug generation and catalog utilities
- Introduce pagination or virtualized grids for larger datasets
