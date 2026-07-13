import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Dark inverts the section to ink background with cream text. */
  tone?: "paper" | "dark" | "raised";
  /** Render without the inner Container (for full-bleed content). */
  bleed?: boolean;
}

/** Standard page section: consistent vertical rhythm and tone handling. */
export function Section({
  tone = "paper",
  bleed = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 sm:py-28",
        tone === "dark" && "bg-forest text-cream",
        tone === "raised" && "bg-stone",
        className
      )}
      {...props}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
