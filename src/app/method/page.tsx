import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GermanWord } from "@/components/shared/german-word";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { CtaBand } from "@/components/shared/cta-band";
import { principles } from "@/data/method";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "How we teach: real-world German, cultural fluency, precision, honesty, and mentorship — the five principles behind every program.",
};

export default function MethodPage() {
  return (
    <>
      <section className="border-b border-mist py-20 sm:py-28">
        <Container className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
            The method
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl md:text-6xl">
            We don&rsquo;t teach German. We teach Germany.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-slate sm:text-lg">
            A certificate gets you a visa appointment. It doesn&rsquo;t get you
            through the flat viewing, the first team meeting, or the winter
            when everything is in a language you only studied for an exam.
            Our method is built on five principles — each one learned the hard
            way, in Germany.
          </p>
          <GermanWord
            word="Übung macht den Meister"
            translation="practice makes the master"
            className="mt-10"
          />
        </Container>
      </section>

      {principles.map((principle, index) => (
        <Section
          key={principle.germanWord}
          tone={index % 2 === 1 ? "raised" : "paper"}
          className={index % 2 === 1 ? "border-y border-mist" : undefined}
          aria-labelledby={`principle-${index}`}
        >
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-caps text-slate-light">
                Principle {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 font-display text-4xl font-medium italic text-gold-deep sm:text-5xl">
                {principle.germanWord}
              </p>
              <p className="mt-2 font-sans text-xs uppercase tracking-caps text-slate-light">
                {principle.translation}
              </p>
            </div>
            <div>
              <h2
                id={`principle-${index}`}
                className="font-display text-2xl font-medium text-ink sm:text-3xl"
              >
                {principle.title}
              </h2>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-slate">
                {principle.description}
              </p>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="dark" aria-labelledby="classroom-heading">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              onDark
              eyebrow="Inside the classroom"
              title="Small groups. Cameras on. Everyone speaks."
              lede="No recorded lectures pretending to be a course. Every session is live, every student speaks, and every sentence gets corrected — the way languages have always actually been learned."
            />
          </div>
          <PlaceholderImage
            onDark
            label="Screenshot or photo of a live class session (with student consent)"
          />
        </div>
      </Section>

      <CtaBand
        title="See if the method fits you."
        lede="The readiness assessment takes ten minutes and gives you an honest starting point — level, timeline, and fit."
      />
    </>
  );
}
