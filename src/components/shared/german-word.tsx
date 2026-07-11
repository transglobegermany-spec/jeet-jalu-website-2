import { cn } from "@/lib/utils";

interface GermanWordProps {
  word: string;
  translation: string;
  onDark?: boolean;
  className?: string;
}

/**
 * The brand's signature device: a large German word set in the display
 * serif, with its quiet English translation. Used to open key pages.
 */
export function GermanWord({ word, translation, onDark, className }: GermanWordProps) {
  return (
    <p className={cn("select-none", className)} aria-hidden="true">
      <span
        className={cn(
          "font-display text-2xl italic sm:text-3xl",
          onDark ? "text-gold" : "text-gold-deep"
        )}
      >
        {word}
      </span>
      <span
        className={cn(
          "ml-3 font-sans text-xs uppercase tracking-caps",
          onDark ? "text-cream/50" : "text-slate-light"
        )}
      >
        — {translation}
      </span>
    </p>
  );
}
