import Link from "next/link";
import { navigation, site } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { GermanWord } from "@/components/shared/german-word";

/** Site footer — quiet, institutional, minimal. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-caps">
              {site.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {site.description}
            </p>
            <GermanWord
              word="Bis bald in Deutschland"
              translation="see you soon in Germany"
              onDark
              className="mt-6"
            />
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-caps text-cream/50">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors duration-300 ease-soft hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/apply"
                  className="text-sm text-cream/70 transition-colors duration-300 ease-soft hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  Apply
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:justify-self-end">
            <p className="font-sans text-xs font-semibold uppercase tracking-caps text-cream/50">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-300 ease-soft hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
              <li className="flex gap-4 pt-2">
                {Object.entries(site.social).map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    className="capitalize transition-colors duration-300 ease-soft hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {name}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-cream/10 pt-6 text-xs text-cream/40">
          © {year} {site.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
