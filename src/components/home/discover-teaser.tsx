import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";

/** Full-width forest band inviting the visitor into Discover Germany. */
export function DiscoverTeaser() {
  return (
    <Section tone="dark" aria-labelledby="discover-heading">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold">
          Discover Germany
        </p>
        <h2
          id="discover-heading"
          className="mt-5 font-display text-4xl font-medium leading-tight text-cream sm:text-5xl"
        >
          Nine cities. Eight landmarks.
          <br />
          One future that&rsquo;s yours.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70">
          Berlin&rsquo;s energy or Munich&rsquo;s polish? A harbor city or a
          university town older than nations? Walk through the Germany
          you&rsquo;re actually moving to.
        </p>
        <Link
          href="/germany"
          className="group mt-10 inline-flex items-center gap-2 border border-cream/30 px-8 py-4 font-sans text-sm font-medium text-cream transition-[border-color,background-color] duration-300 ease-soft hover:border-cream hover:bg-cream/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Explore Germany
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </Section>
  );
}
