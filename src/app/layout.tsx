import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dynamic-multi-category-catalog.vercel.app"),
  title: {
    default: "Dynamic Multi-Category Catalog",
    template: "%s | Dynamic Multi-Category Catalog",
  },
  description:
    "Browse a responsive catalog of cars, bikes, phones, and computers with dynamically rendered item specifications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dynamic Multi-Category Catalog",
    title: "Dynamic Multi-Category Catalog",
    description:
      "A responsive multi-category catalog built with Next.js, TypeScript, Tailwind CSS, and local JSON data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Multi-Category Catalog",
    description:
      "Explore cars, bikes, phones, and computers with JSON-driven specifications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_35%,_#f8fafc_100%)] font-sans text-slate-900 antialiased"
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
