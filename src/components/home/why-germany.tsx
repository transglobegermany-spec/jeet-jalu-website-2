import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { GermanWord } from "@/components/shared/german-word";

const reasons = [
  {
    stat: "€0",
    title: "Tuition at public universities",
    text: "World-ranked education, funded by the German state. Your investment is preparation and living costs — not lakhs in fees.",
  },
  {
    stat: "18",
    title: "Months to find work after graduating",
    text: "Germany wants its international graduates to stay. The post-study job-seeker period is among the most generous in Europe.",
  },
  {
    stat: "#1",
    title: "Economy in Europe",
    text: "Engineering, IT, healthcare, skilled trades — Germany's shortage of qualified people is your opening.",
  },
];

/** Editorial "Why Germany" band — the rational case, told warmly. */
export function WhyGermany() {
  return (
    <Section tone="raised" className="border-y border-mist" aria-labelledby="why-heading">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Why Germany"
            title="Not the easiest path. The one that pays back."
          />
          <p className="mt-6 max-w-prose text-base leading-relaxed text-slate">
            Germany doesn&rsquo;t sell shortcuts, and neither do I. It offers
            something better: a system that rewards preparation. Learn the
            language properly, respect the paperwork, arrive ready — and the
            country opens like few places on earth.
          </p>
          <GermanWord
            word="Gründlichkeit"
            translation="thoroughness"
            className="mt-10"
          />
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title}>
              <p className="font-display text-5xl font-medium text-forest">
                {r.stat}
              </p>
              <h3 className="mt-4 font-sans text-sm font-semibold text-ink">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
