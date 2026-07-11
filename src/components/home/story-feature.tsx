import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { featuredStory } from "@/data/stories";

/** One long-form featured story — proof, not testimonial noise. */
export function StoryFeature() {
  return (
    <Section tone="raised" aria-labelledby="story-heading" className="border-y border-mist">
      <div className="mx-auto max-w-3xl text-center">
        <p
          id="story-heading"
          className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep"
        >
          Success stories
        </p>
        <blockquote className="mt-8">
          <p className="font-display text-2xl font-medium italic leading-snug text-ink sm:text-3xl">
            &ldquo;{featuredStory.quote}&rdquo;
          </p>
          <footer className="mt-8">
            <p className="font-sans text-sm font-semibold text-ink">
              {featuredStory.name}
            </p>
            <p className="mt-1 font-sans text-xs uppercase tracking-caps text-slate-light">
              {featuredStory.outcome} · {featuredStory.location}
            </p>
          </footer>
        </blockquote>
        <Link
          href="/stories"
          className="mt-10 inline-flex items-center gap-2 font-sans text-sm font-medium text-ink transition-colors hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Read all stories
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
