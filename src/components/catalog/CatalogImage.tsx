"use client";

import Image from "next/image";
import { useState } from "react";

const fallbackImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
    <rect width="1200" height="900" fill="#e2e8f0" />
    <rect x="120" y="120" width="960" height="660" rx="36" fill="#cbd5e1" />
    <circle cx="380" cy="360" r="86" fill="#94a3b8" />
    <path d="M240 680 470 450l165 165 120-120 205 185H240Z" fill="#64748b" />
  </svg>
`)}`;

interface CatalogImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
  fill?: boolean;
}

export function CatalogImage({
  src,
  alt,
  priority,
  sizes,
  className,
  fill = true,
}: CatalogImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setImageSrc(fallbackImage)}
    />
  );
}
