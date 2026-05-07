import Link from "next/link";
import { Layers3, Orbit } from "lucide-react";
import { Container } from "./Container";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/#categories", label: "Categories" },
  { href: "/#catalog", label: "Catalog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-300/50">
              <Orbit className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Next.js assignment
              </p>
              <p className="text-sm font-semibold text-slate-950 sm:text-base">
                Dynamic Multi-Category Catalog
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 sm:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#catalog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
          >
            <Layers3 className="h-4 w-4" />
            Explore
          </Link>
        </div>
      </Container>
    </header>
  );
}
