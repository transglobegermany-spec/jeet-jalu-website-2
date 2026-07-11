import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GermanWord } from "@/components/shared/german-word";

/**
 * Homepage hero — Apple-grade discipline:
 * one oversized, tightly-tracked statement; one short subline;
 * one primary action + one quiet text link; generous air above and below.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-mist"
    >
      {/* Subtle top glow — barely-there depth, never decoration. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.9),transparent_70%)]"
      />
      <Container className="relative max-w-5xl py-28 text-center sm:py-36">
        <p className="animate-fade-up font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-slate-light">
          German language · Culture · Careers
        </p>

        <h1
          id="hero-heading"
          className="mx-auto mt-8 max-w-4xl animate-fade-up text-balance font-display text-6xl font-medium leading-[0.98] tracking-[-0.02em] text-ink [animation-delay:100ms] sm:text-7xl md:text-8xl"
        >
          Germany, done&nbsp;right.
        </h1>

        <p className="mx-auto mt-8 max-w-xl animate-fade-up text-lg font-normal leading-relaxed text-slate [animation-delay:200ms] sm:text-xl">
          Real-world German, cultural fluency, and personal mentorship —
          for a career and a life in Germany.
        </p>

        <div className="mt-12 flex animate-fade-up flex-col items-center justify-center gap-6 [animation-delay:300ms] sm:flex-row">
          <Button href="/apply" size="lg" className="px-10">
            Apply for admission
          </Button>
          <Link
            href="/programs"
            className="group inline-flex items-center gap-1.5 font-sans text-[15px] font-medium text-gold-deep transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Explore the programs
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <p className="mx-auto mt-14 max-w-md animate-fade-up font-sans text-xs leading-relaxed text-slate-light [animation-delay:400ms]">
          Taught by a mentor who lived it. Trusted by students now living and
          working in Stuttgart, Munich, and Aachen.
        </p>

        <GermanWord
          word="Der Anfang ist die Hälfte des Ganzen"
          translation="beginning is half of the whole"
          className="mt-16 hidden animate-fade-up [animation-delay:500ms] sm:block"
        />
      </Container>
    </section>
  );
}
