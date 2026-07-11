import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GermanWord } from "@/components/shared/german-word";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/shared/cta-band";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProgram, programs } from "@/data/programs";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const program = getProgram(params.slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.promise,
  };
}

export default function ProgramPage({ params }: Props) {
  const program = getProgram(params.slug);
  if (!program) notFound();

  const admissionSteps = [
    { step: "1", name: "Short application", detail: "Five minutes. Tell us your goal and background." },
    { step: "2", name: "Readiness call", detail: "An honest conversation about fit, level, and timeline." },
    { step: "3", name: "Admission", detail: "You receive your admission letter and start date." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-mist py-20 sm:py-28">
        <Container className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
            Program · {program.audience}
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl md:text-6xl">
            {program.headline}
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-slate sm:text-lg">
            {program.promise}
          </p>
          <dl className="mt-10 grid gap-6 border-t border-mist pt-8 sm:grid-cols-3">
            {(
              [
                ["Duration", program.meta.duration],
                ["Format", program.meta.format],
                ["Level", program.meta.level],
              ] as const
            ).map(([label, value]) => (
              <div key={label}>
                <dt className="font-sans text-xs uppercase tracking-caps text-slate-light">
                  {label}
                </dt>
                <dd className="mt-1 font-sans text-sm font-medium text-ink">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <GermanWord
            word={program.germanWord.word}
            translation={program.germanWord.translation}
            className="mt-10"
          />
        </Container>
      </section>

      {/* Honest fit */}
      <Section aria-labelledby="fit-heading">
        <SectionHeading
          eyebrow="Honest fit"
          title="Who this is for — and who it isn't."
          lede="We would rather turn you away today than disappoint you in six months. Read both columns before applying."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="border border-mist bg-paper-raised p-8">
            <h3 className="font-display text-xl font-medium text-ink">
              This is for you if&hellip;
            </h3>
            <ul className="mt-6 space-y-4">
              {program.forYou.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-mist bg-paper-raised p-8">
            <h3 className="font-display text-xl font-medium text-ink">
              This is not for you if&hellip;
            </h3>
            <ul className="mt-6 space-y-4">
              {program.notForYou.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate">
                  <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-slate-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section tone="dark" aria-labelledby="outcomes-heading">
        <SectionHeading
          onDark
          eyebrow="Outcomes"
          title="What you'll be able to do."
          lede="Not chapters completed — abilities gained. This is what graduating from this program actually means."
        />
        <ul className="mt-12 grid gap-x-12 gap-y-7 md:grid-cols-2">
          {program.outcomes.map((outcome) => (
            <li key={outcome} className="border-l border-gold/40 pl-5 text-sm leading-relaxed text-cream/80 sm:text-base">
              {outcome}
            </li>
          ))}
        </ul>
      </Section>

      {/* Structure */}
      <Section aria-labelledby="structure-heading">
        <SectionHeading
          eyebrow="Program structure"
          title="A clear road, phase by phase."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {program.phases.map((phase) => (
            <li key={phase.name} className="border border-mist bg-paper-raised p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
                {phase.name}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">
                {phase.focus}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {phase.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Investment + proof */}
      <Section tone="raised" className="border-y border-mist" aria-labelledby="investment-heading">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Investment" title="Transparent, always." />
            <p className="mt-6 max-w-prose text-sm leading-relaxed text-slate sm:text-base">
              {program.investment.note}
            </p>
            <ul className="mt-8 space-y-3">
              {program.investment.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Proof" title="From this exact track." />
            <blockquote className="mt-8 border-l-2 border-gold pl-6">
              <p className="font-display text-xl font-medium italic leading-snug text-ink">
                &ldquo;{program.story.quote}&rdquo;
              </p>
              <footer className="mt-5">
                <p className="font-sans text-sm font-semibold text-ink">
                  {program.story.name}
                </p>
                <p className="mt-1 font-sans text-xs uppercase tracking-caps text-slate-light">
                  {program.story.outcome} · {program.story.location}
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* Admission */}
      <Section aria-labelledby="admission-heading">
        <SectionHeading
          align="center"
          eyebrow="Admission in three steps"
          title="One calm process. No pressure calls."
        />
        <ol className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {admissionSteps.map((s) => (
            <li key={s.step} className="border border-mist bg-paper-raised p-7 text-center">
              <p className="font-display text-3xl font-medium text-gold-deep">{s.step}</p>
              <h3 className="mt-3 font-sans text-sm font-semibold text-ink">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{s.detail}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <Button href="/apply" size="lg">
            Apply for this program
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="raised" className="border-t border-mist" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Asked honestly, answered honestly." />
          <Accordion type="single" collapsible className="mt-10">
            {program.faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <CtaBand
        title={`Ready for the ${program.name} program?`}
        lede="Start with the short application. We'll tell you honestly whether this is the right path — and the right time."
      />
    </>
  );
}
