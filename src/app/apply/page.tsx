import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GermanWord } from "@/components/shared/german-word";
import { ApplicationForm } from "@/components/shared/application-form";

export const metadata: Metadata = {
  title: "Apply for Admission",
  description:
    "Apply in five minutes. A short application, an honest readiness call, and a clear answer about your path to Germany.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="border-b border-mist py-20 sm:py-28">
        <Container className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
            Admission
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Apply for admission.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-slate sm:text-lg">
            Five minutes now, an honest readiness call within two working
            days, and a clear answer — including, sometimes, &ldquo;not
            yet.&rdquo; We admit students we can genuinely help. That&rsquo;s
            what keeps our success rate honest.
          </p>
          <GermanWord word="Der erste Schritt" translation="the first step" className="mt-10" />
        </Container>
      </section>

      <Section aria-labelledby="form-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="form-heading" className="sr-only">
            Application form
          </h2>
          <ApplicationForm />
        </div>
      </Section>

      <Section
        tone="raised"
        className="border-t border-mist"
        id="assessment"
        aria-labelledby="assessment-heading"
      >
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Not ready to apply?"
            title="Start with the readiness assessment."
            lede="Ten minutes, free, and honest: your current level, a realistic timeline, and which path fits your goal — even if that path isn't with us. Mention 'readiness assessment' in the goal field above and we'll begin there instead of a full application."
          />
        </div>
      </Section>
    </>
  );
}
