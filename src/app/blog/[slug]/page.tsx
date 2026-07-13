import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CtaBand } from "@/components/shared/cta-band";
import { posts, getPost, type PostBlock } from "@/data/posts";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-medium leading-snug text-ink">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="mt-6 text-base leading-relaxed text-slate">{block.text}</p>
      );
    case "list":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-slate">
              <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div className="mt-8 border-l-2 border-gold bg-cream px-6 py-5">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-caps text-gold-deep">
            From experience
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink">{block.text}</p>
        </div>
      );
    case "quote":
      return (
        <blockquote className="mt-10 border-l-2 border-gold pl-6">
          <p className="font-display text-xl font-medium italic leading-snug text-ink sm:text-2xl">
            &bdquo;{block.text}&ldquo;
          </p>
        </blockquote>
      );
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <article className="py-20 sm:py-24">
        <Container className="max-w-2xl">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-slate-light transition-colors duration-300 ease-soft hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 ease-soft group-hover:-translate-x-0.5"
            />
            All articles
          </Link>

          <div className="mt-10 flex items-center gap-4">
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

          <h1 className="mt-5 font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate">{post.excerpt}</p>

          <hr className="mt-10 border-mist" />

          <div>
            {post.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="mt-14 border-t border-mist pt-8">
            <p className="font-sans text-sm leading-relaxed text-slate-light">
              Written by <span className="font-medium text-ink">Jeet Jalu</span> —
              German coach and Germany career mentor. Lived it, failed parts of
              it, mastered it, teaches it.
            </p>
          </div>
        </Container>
      </article>

      <CtaBand
        title="Ready to go beyond reading?"
        lede="Your profile, your timeline, and the truth in the first meeting. That's how every journey here begins."
      />
    </>
  );
}
