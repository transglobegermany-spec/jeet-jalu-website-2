import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

/** Eyebrow + display title + optional lede. The standard section opener. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 font-sans text-xs font-semibold uppercase tracking-caps",
            onDark ? "text-gold" : "text-gold-deep"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-medium leading-tight sm:text-4xl md:text-[2.75rem]",
          onDark ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            onDark ? "text-cream/70" : "text-slate"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
