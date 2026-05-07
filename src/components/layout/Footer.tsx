import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <Container className="py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
              Dynamic rendering
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              One catalog UI, multiple item categories.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              This project uses a shared JSON structure with `itemname`,
              `category`, `image`, and `itemprops` so each item can expose its
              own specifications without category-specific component logic.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
            >
              Home
            </Link>
            <Link
              href="/#categories"
              className="rounded-full border border-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
            >
              Categories
            </Link>
            <Link
              href="/#catalog"
              className="rounded-full border border-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
            >
              Catalog
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-sm text-slate-500">
          Built with Next.js App Router, TypeScript, Tailwind CSS, and local
          JSON data.
        </div>
      </Container>
    </footer>
  );
}
