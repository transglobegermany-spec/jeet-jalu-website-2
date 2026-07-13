import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GermanWord } from "@/components/shared/german-word";

/**
 * Homepage hero — cinematic film of Germany behind one oversized statement.
 * Video lives at /public/germany.mp4; if absent, the dark gradient stands in.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink"
    >
      {/* Fallback atmosphere while the film loads (or if it's missing). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#2A2A28_0%,#141414_65%)]"
      />

      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60 motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/germany-poster.jpg"
        aria-hidden="true"
      >
        <source src="/germany.mp4" type="video/mp4" />
      </video>

      {/* Legibility shade — darkest at the base, open at the top. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/45 to-ink/85"
      />

      <Container className="relative max-w-5xl py-28 text-center sm:py-36">
        <p className="animate-fade-up font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-cream/70">
          German language · Culture · Careers
        </p>

        <h1
          id="hero-heading"
          className="mx-auto mt-8 max-w-4xl animate-fade-up text-balance font-display text-6xl font-medium leading-[0.98] tracking-[-0.02em] text-cream [animation-delay:100ms] sm:text-7xl md:text-8xl"
        >
          Germany, done&nbsp;right.
        </h1>

        <p className="mx-auto mt-8 max-w-xl animate-fade-up text-lg font-normal leading-relaxed text-cream/80 [animation-delay:200ms] sm:text-xl">
          Real-world German, cultural fluency, and personal mentorship —
          for a career and a life in Germany.
        </p>

        <div className="mt-12 flex animate-fade-up flex-col items-center justify-center gap-6 [animation-delay:300ms] sm:flex-row">
          <Link
            href="/apply"
            className="inline-flex h-14 items-center bg-cream px-10 font-sans text-base font-medium text-ink transition-colors duration-300 ease-soft hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Apply for admission
          </Link>
          <Link
            href="/programs"
            className="group inline-flex items-center gap-1.5 font-sans text-[15px] font-medium text-gold transition-colors duration-300 ease-soft hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Explore the programs
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <p className="mx-auto mt-14 max-w-md animate-fade-up font-sans text-xs leading-relaxed text-cream/60 [animation-delay:400ms]">
          Taught by a mentor who lived it. Trusted by students now living and
          working in Stuttgart, Munich, and Aachen.
        </p>

        <GermanWord
          onDark
          word="Der Anfang ist die Hälfte des Ganzen"
          translation="beginning is half of the whole"
          className="mt-16 hidden animate-fade-up [animation-delay:500ms] sm:block"
        />
      </Container>
    </section>
  );
}
