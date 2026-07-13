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
    "Jeet Jalu lived and studied in Germany — engineering, taught entirely in German. Now he prepares students for the exam, the country, and the life.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-mist py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
                About
              </p>
              <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
                I became the guide I never had.
              </h1>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-slate sm:text-lg">
                I&rsquo;m Jeet Jalu. I teach German and prepare people for
                Germany — the language, the system, and the life. I can do
                this for one reason: I lived every mistake I now help you
                avoid.
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

      {/* The story — short */}
      <Section aria-labelledby="story-heading">
        <div className="mx-auto max-w-prose">
          <SectionHeading eyebrow="The story" title="Four chapters, honestly told." />
          <div className="mt-10 space-y-10">
            <div>
              <h3 className="font-display text-xl font-medium text-ink">
                A boy, a book, one page.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate">
                In my childhood home in Rajkot there was an encyclopedia. I
                kept returning to one page — Germany. I loved cars, and every
                machine I admired came from that one country. When a friend
                later told me German universities were tuition-free, I
                researched the entire path myself. There was no one to ask.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-ink">
                A smooth promise, a hard landing.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate">
                A consultant sold my family an easy plan — and left out that
                Studienkolleg requires a competitive entrance exam. I learned
                the truth standing inside Germany, money spent, plan in
                pieces. It cost me a year. It&rsquo;s why I verify everything
                at the source today, and say the uncomfortable truths in the
                first meeting — not the fine print.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-ink">
                Engineering, in German, in Bavaria.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate">
                I ended up in a small Bavarian town, in a program taught
                entirely in German — Bavarian German. For a year I understood
                fragments of lectures, then studied everything twice: the
                engineering, and the language beneath it. Fluency
                wasn&rsquo;t an achievement for me. It was survival. And
                Germany humbled me in other ways too — I made the mistakes
                nobody warns you about, and my journey there ended in a way I
                never planned.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-ink">
                Every student is me, five years earlier.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate">
                Back in Rajkot, I began teaching German — and understood why
                everything had happened. I know which false promises
                you&rsquo;ll be told, because I believed them. I know how
                Germany tests you, because it tested me. So I teach the
                language seriously — and alongside it, what nobody taught me:
                money, discipline, self-command.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <blockquote className="mt-14 border-l-2 border-gold pl-6">
            <p className="font-display text-2xl font-medium italic leading-snug text-ink">
              &bdquo;Do the hard work here, so life is easy there.&ldquo;
            </p>
            <cite className="mt-3 block font-sans text-xs uppercase not-italic tracking-caps text-slate-light">
              The rule every student hears in our first meeting
            </cite>
          </blockquote>
        </div>
      </Section>

      {/* Today */}
      <Section tone="dark" aria-labelledby="today-heading">
        <div className="mx-auto max-w-prose text-center">
          <SectionHeading
            onDark
            eyebrow="Today"
            title="Germany, done right."
            lede="I coach German from A1 to C1, guide university admissions, and build career pathways into Germany. My students live and work in Stuttgart, Munich, and Aachen — and when a difficult moment comes, my advice is the voice in their head that carries them through. That's the only review I care about."
          />
        </div>
      </Section>

      <CtaBand
        title="Ready to do it right?"
        lede="Start with an honest conversation about your path — the truth in the first meeting, always."
      />
    </>
  );
}
