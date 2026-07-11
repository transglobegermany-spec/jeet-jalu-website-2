import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface CtaBandProps {
  title?: string;
  lede?: string;
}

/** The closing conversion band used at the bottom of every page. */
export function CtaBand({
  title = "Ready to build your future in Germany?",
  lede = "Start with a short application. We'll talk honestly about your goals, your timeline, and whether we're the right fit.",
}: CtaBandProps) {
  return (
    <Section tone="dark" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="cta-heading"
          className="font-display text-3xl font-medium leading-tight text-cream sm:text-4xl"
        >
          {title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-cream/70 sm:text-lg">
          {lede}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/apply" variant="gold" size="lg">
            Apply for admission
          </Button>
          <Button href="/apply#assessment" variant="outlineOnDark" size="lg">
            Take the readiness assessment
          </Button>
        </div>
      </div>
    </Section>
  );
}
