import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgramCard } from "@/components/shared/program-card";
import { CtaBand } from "@/components/shared/cta-band";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "German language and career preparation programs for students, Ausbildung aspirants, and professionals building a future in Germany.",
};

export default function ProgramsPage() {
  return (
    <>
      <Section aria-labelledby="programs-heading" className="border-b border-mist">
        <SectionHeading
          eyebrow="Programs"
          title="Organised around your goal, not an exam syllabus."
          lede="Choose the journey that matches where you're headed. Every program includes language, culture, and mentorship — because moving your life to Germany takes all three."
        />
      </Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
        <p className="mt-12 max-w-prose text-sm leading-relaxed text-slate">
          Not sure which path fits? The readiness assessment takes ten minutes
          and gives you an honest starting point — including when the honest
          answer is &ldquo;not yet.&rdquo;
        </p>
      </Section>
      <CtaBand />
    </>
  );
}
