import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  /** Instruction for which real photo goes here, e.g. "Portrait of Jeet". */
  label: string;
  /** Tailwind aspect ratio class, e.g. "aspect-[4/5]". */
  ratio?: string;
  onDark?: boolean;
  className?: string;
}

/**
 * REPLACE-ME image slot.
 * Swap each instance for <Image /> from next/image with a real photo.
 * The `label` tells you exactly which photo belongs in that slot.
 */
export function PlaceholderImage({
  label,
  ratio = "aspect-[4/3]",
  onDark = false,
  className,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 border border-dashed",
        ratio,
        onDark
          ? "border-cream/25 bg-ink-soft text-cream/50"
          : "border-slate-light/50 bg-mist/40 text-slate",
        className
      )}
    >
      <ImageIcon aria-hidden="true" className="h-6 w-6 opacity-60" />
      <p className="max-w-[85%] text-center font-sans text-xs uppercase tracking-caps">
        Replace: {label}
      </p>
    </div>
  );
}
