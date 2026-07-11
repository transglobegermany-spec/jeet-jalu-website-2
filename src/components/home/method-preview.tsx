import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { GermanWord } from "@/components/shared/german-word";
import { principles } from "@/data/method";

/** Homepage preview of the teaching method (first three principles). */
export function MethodPreview() {
  return (
    <Section tone="dark" aria-labelledby="method-heading">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            onDark
            eyebrow="The method"
            title="Real German, not exam German."
            lede="Most institutes prepare you for a test. We prepare you for a Tuesday morning in Germany — the flat viewing, the team meeting, the phone call you can't avoid."
          />
          <ul className="mt-10 space-y-6">
            {principles.slice(0, 3).map((p) => (
              <li key={p.germanWord} className="border-l border-gold/40 pl-5">
                <GermanWord word={p.germanWord} translation={p.translation} onDark />
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
          <Button href="/method" variant="outlineOnDark" className="mt-10">
            Explore the full method
          </Button>
        </div>
        <PlaceholderImage
          onDark
          ratio="aspect-[4/5]"
          label="Candid photo of Jeet teaching, or a German street scene you shot yourself"
        />
      </div>
    </Section>
  );
}
