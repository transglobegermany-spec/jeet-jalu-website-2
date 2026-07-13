"use client";

import * as React from "react";

interface SmartImageProps {
  /** Path inside /public, e.g. /germany/berlin.jpg */
  src: string;
  alt: string;
  /** Label shown in the placeholder until the real photo is uploaded. */
  label: string;
  /** Tailwind aspect class, e.g. "aspect-[4/3]" */
  ratio?: string;
  className?: string;
}

/**
 * Renders the real photo if it exists in /public; otherwise shows an
 * elegant labeled placeholder. Upload the file → the photo appears.
 * No code changes ever needed.
 */
export function SmartImage({
  src,
  alt,
  label,
  ratio = "aspect-[4/3]",
  className = "",
}: SmartImageProps) {
  const [missing, setMissing] = React.useState(false);

  if (missing) {
    return (
      <div
        className={`${ratio} flex items-center justify-center border border-mist bg-stone ${className}`}
        role="img"
        aria-label={alt}
      >
        <p className="max-w-[80%] text-center font-sans text-[11px] uppercase tracking-caps text-slate-light">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className={`${ratio} overflow-hidden border border-mist bg-stone ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setMissing(true)}
        className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
      />
    </div>
  );
}
