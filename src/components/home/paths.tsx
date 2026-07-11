import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgramCard } from "@/components/shared/program-card";
import { programs } from "@/data/programs";

/** Three audience-first paths into the programs. */
export function Paths() {
  return (
    <Section aria-labelledby="paths-heading">
      <SectionHeading
        eyebrow="Choose your path"
        title="Three journeys. One destination."
        lede="Every program is organised around your goal in Germany — not around exam levels."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </Section>
  );
}
