import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real students, real outcomes — nursing contracts, master's admissions, and careers built in Germany. Long-form stories, not star ratings.",
};

/*
 * NOTE FOR JEET: the stories in src/data/stories.ts are structured drafts.
 * Replace them with real student stories (with written consent), keeping
 * the format: quote → narrative → concrete outcome → city.
 */
export default function StoriesPage() {
  return (
    <>
      <section className="border-b border-mist py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Success stories"
            title="Names, cities, outcomes."
            lede="No star ratings, no anonymous praise. These are real journeys — including how long they actually took."
          />
        </Container>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-16">
          {stories.map((story) => (
            <article
              key={story.slug}
              className="border-b border-mist pb-16 last:border-b-0 last:pb-0"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
                {story.program}
              </p>
              <blockquote className="mt-5">
                <p className="font-display text-2xl font-medium italic leading-snug text-ink">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </blockquote>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-slate">
                {story.narrative}
              </p>
              <footer className="mt-6">
                <p className="font-sans text-sm font-semibold text-ink">
                  {story.name}
                </p>
                <p className="mt-1 font-sans text-xs uppercase tracking-caps text-slate-light">
                  {story.outcome} · {story.location}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Your story starts with one honest conversation."
        lede="Apply, take the readiness call, and get a real answer about your path to Germany."
      />
    </>
  );
}
