"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Sticky site header with accessible mobile navigation. */
export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  // Close the mobile menu on route change.
  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-paper/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-sans text-sm font-semibold uppercase tracking-caps text-ink transition-colors duration-300 ease-soft hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className={cn(
                "nav-link hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                pathname.startsWith(item.href)
                  ? "font-medium text-ink"
                  : "text-slate"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/apply" size="sm">
            Apply
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-mist bg-paper md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 font-sans text-base text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/apply" className="mt-3 w-full">
              Apply for admission
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
