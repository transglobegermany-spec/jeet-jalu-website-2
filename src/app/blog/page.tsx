import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/shared/cta-band";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "The Germany Journal",
  description:
    "Honest guides and personal stories for anyone building a life in Germany — written by someone who lived it.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="border-b border-mist py-20 sm:py-28">
        <Container className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
            The Germany Journal
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Germany, without the sugarcoating.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-slate sm:text-lg">
            Guides that solve real problems, and stories from a journey that
            included the mistakes. Written by someone who lived it — so you
            don&rsquo;t have to learn it the hard way.
          </p>
        </Container>
      </section>

      <Section>
        {/* Featured article — magazine cover treatment */}
        {sorted[0] && (
          <article className="border border-mist bg-stone p-10 sm:p-14">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-4">
                <span
                  className={`font-sans text-[11px] font-semibold uppercase tracking-caps ${
                    sorted[0].category === "Story" ? "text-gold-deep" : "text-slate-light"
                  }`}
                >
                  Featured · {sorted[0].category}
                </span>
                <span className="font-sans text-xs text-slate-light">
                  {formatDate(sorted[0].date)} · {sorted[0].readMinutes} min read
                </span>
              </div>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                <Link
                  href={`/blog/${sorted[0].slug}`}
                  className="transition-colors duration-300 ease-soft hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {sorted[0].title}
                </Link>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate">
                {sorted[0].excerpt}
              </p>
              <Link
                href={`/blog/${sorted[0].slug}`}
                className="group mt-8 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-forest transition-colors duration-300 ease-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Read the featured article
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </article>
        )}

        <div className="mx-auto mt-16 max-w-3xl space-y-0 divide-y divide-mist">
          {sorted.slice(1).map((post) => (
            <article key={post.slug} className="py-10 first:pt-0 last:pb-0">
              <div className="flex items-center gap-4">
                <span
                  className={`font-sans text-[11px] font-semibold uppercase tracking-caps ${
                    post.category === "Story" ? "text-gold-deep" : "text-slate-light"
                  }`}
                >
                  {post.category}
                </span>
                <span className="font-sans text-xs text-slate-light">
                  {formatDate(post.date)} · {post.readMinutes} min read
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors duration-300 ease-soft hover:text-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-slate">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="group mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-gold-deep transition-colors duration-300 ease-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Read article
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5"
                />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Reading is step one."
        lede="When you're ready for a real plan — your profile, your timeline, the truth in the first meeting — apply and let's talk."
      />
    </>
  );
}
