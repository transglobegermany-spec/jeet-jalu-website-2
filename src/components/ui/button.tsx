import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-ink text-cream hover:bg-ink-soft",
        onDark: "bg-cream text-ink hover:bg-white",
        outline:
          "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03]",
        outlineOnDark:
          "border border-cream/30 text-cream hover:border-cream hover:bg-cream/5",
        gold: "bg-gold text-white hover:bg-gold-deep",
        ghost: "text-ink hover:text-gold-deep",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as a Next.js link when provided. */
  href?: string;
}

/** Brand button. Use `href` for navigation, plain for form actions. */
export function Button({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }
  return <button className={classes} {...props} />;
}
