import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GermanWord } from "@/components/shared/german-word";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "About Jeet Jalu",
  description:
    "Jeet Jalu lived, studied, and worked in Germany — and now mentors students, professionals, and Ausbildung aspirants through the same journey.",
};

/*
 * NOTE FOR JEET: the story below is a structured draft written from your
 * brief. Replace the bracketed details with your real dates, cities, and
 * specifics — the structure (arrival → struggle → learning → return → why)
 * is designed for trust and should stay.
 */
export default function AboutPage() {
  return (
    <>
      <section className="border-b border-mist py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
                About
              </p>
              <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
                I lived it before I taught it.
              </h1>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-slate sm:text-lg">
                I&rsquo;m Jeet Jalu. Everything I teach — the language, the
                culture, the paperwork, the patience — I learned first as a
                student of it, standing in the same queues you&rsquo;ll stand
                in.
              </p>
              <GermanWord
                word="Erfahrung"
                translation="experience"
                className="mt-10"
              />
            </div>
            <PlaceholderImage
              ratio="aspect-[4/5]"
              label="Professional portrait of Jeet — natural light, no studio backdrop"
            />
          </div>
        </Container>
      </section>

      <Section aria-labelledby="story-heading">
        <div className="mx-auto max-w-prose">
          <SectionHeading eyebrow="The story" title="From learner to mentor." />
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate">
            <p>
              When I arrived in Germany [TODO: year and city], I had textbook
              German and real-world silence. I could conjugate verbs; I
              couldn&rsquo;t open a bank account. That gap — between what
              institutes teach and what Germany demands — is the reason this
              brand exists.
            </p>
            <p>
              Over my years there [TODO: your specifics — study, work,
              city], I learned the language the way it actually gets learned:
              in kitchens, offices, government waiting rooms, and
              conversations I was terrified to start. I learned that German
              precision isn&rsquo;t a stereotype, it&rsquo;s a culture — and
              that once you understand the culture, the language finally makes
              sense.
            </p>
            <p>
              When I returned to India, I saw the industry from the other
              side: exam factories, agencies selling guarantees they
              can&rsquo;t keep, and students paying for shortcuts that lead
              nowhere. I decided to build the opposite — a small, honest,
              premium education brand that prepares people for Germany the way
              I wish I had been prepared.
            </p>
            <p>
              That&rsquo;s the whole story. No franchise, no batch factory, no
              guarantees I can&rsquo;t stand behind. Just real German, real
              culture, and a mentor who has made the journey — walking it
              again with every student.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark" aria-labelledby="values-heading">
        <SectionHeading
          onDark
          align="center"
          eyebrow="What I stand for"
          title="Three promises to every student."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {[
            {
              word: "Ehrlichkeit",
              title: "Honesty first",
              text: "Real timelines, real requirements, real chances — even when the honest answer costs me a student.",
            },
            {
              word: "Qualität",
              title: "Quality over volume",
              text: "Small groups and selective admission, because I would rather teach fewer people properly.",
            },
            {
              word: "Begleitung",
              title: "With you throughout",
              text: "From your first Hallo to your first day in Germany — mentorship doesn't end when class does.",
            },
          ].map((v) => (
            <div key={v.word} className="border border-cream/15 p-8 text-center">
              <p className="font-display text-xl font-medium italic text-gold">
                {v.word}
              </p>
              <h3 className="mt-4 font-sans text-sm font-semibold text-cream">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Let's talk about your Germany."
        lede="The application takes five minutes. The readiness call is an honest conversation, not a sales pitch."
      />
    </>
  );
}
