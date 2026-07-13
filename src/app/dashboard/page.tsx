import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProgressCard } from "@/components/dashboard/progress-card";

export const metadata: Metadata = {
  title: "Members' Area",
  description: "Your private members' area — courses, notes, and downloads.",
  robots: { index: false, follow: false },
};

/**
 * Private members' area. Not linked in public navigation —
 * shared with students after purchase.
 * Background film: upload a muted MP4 to /public/germany.mp4
 * (optional poster image at /public/germany-poster.jpg).
 */
export default function DashboardPage() {
  const downloadUrl = process.env.NEXT_PUBLIC_A1_DOWNLOAD_URL ?? "/courses/a1";

  return (
    <div className="bg-ink">
      {/* Cinematic hero */}
      <section className="relative flex min-h-[86vh] items-end overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_10%,#2A2A28_0%,#141414_60%)]"
        />

        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70 motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/germany-poster.jpg"
          aria-hidden="true"
        >
          <source src="/germany.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25"
        />

        <Container className="relative pb-20 pt-40 sm:pb-28">
          <p className="animate-fade-up font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Members&rsquo; Area
          </p>

          <h1 className="mt-6 max-w-3xl animate-fade-up font-display text-5xl font-medium leading-[1.05] text-cream [animation-delay:120ms] sm:text-6xl md:text-7xl">
            Willkommen zurück.
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-cream/70 [animation-delay:240ms] sm:text-lg">
            Every module you finish is a street you&rsquo;ll walk more easily,
            a conversation you&rsquo;ll hold more confidently. Germany is not
            far away — it&rsquo;s fifteen modules away.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col items-start gap-5 [animation-delay:360ms] sm:flex-row sm:items-center">
            <Link
              href="/courses/a1"
              className="inline-flex items-center gap-2 bg-cream px-8 py-4 font-sans text-sm font-medium text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Continue learning
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium text-cream/80 underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Open your downloads
            </a>
          </div>
        </Container>
      </section>

      {/* The four rooms */}
      <section aria-labelledby="rooms-heading" className="border-t border-cream/10">
        <Container className="py-20 sm:py-24">
          <h2 id="rooms-heading" className="sr-only">
            Your member resources
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/courses"
              className="group flex flex-col border border-cream/10 bg-ink-soft/60 p-8 transition-[border-color,transform] duration-300 ease-soft hover:-translate-y-0.5 hover:border-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <p className="font-sans text-[11px] font-semibold uppercase tracking-caps text-gold">
                Courses
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium text-cream">
                The A1 System
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/60">
                Fifteen interactive modules, from your first sounds to the
                complete workbook. A2 and B1 are on their way.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-cream transition-colors group-hover:text-gold">
                Enter
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>

            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-cream/10 bg-ink-soft/60 p-8 transition-[border-color,transform] duration-300 ease-soft hover:-translate-y-0.5 hover:border-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <p className="font-sans text-[11px] font-semibold uppercase tracking-caps text-gold">
                The Library
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium text-cream">
                Your library
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/60">
                Every module works offline — on the train, in the café, on the
                flight to Frankfurt. Open INDEX.html and begin anywhere.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-cream transition-colors group-hover:text-gold">
                Open notes
                <BookOpen aria-hidden="true" className="h-4 w-4" />
              </span>
            </a>

            <ProgressCard />

            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-cream/10 bg-ink-soft/60 p-8 transition-[border-color,transform] duration-300 ease-soft hover:-translate-y-0.5 hover:border-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <p className="font-sans text-[11px] font-semibold uppercase tracking-caps text-gold">
                Downloads
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium text-cream">
                Take it with you
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/60">
                Re-download the complete A1 package any time. Yours for life —
                no expiry, no subscription.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-cream transition-colors group-hover:text-gold">
                Download
                <Download aria-hidden="true" className="h-4 w-4" />
              </span>
            </a>
          </div>
        </Container>
      </section>

      {/* Quiet closing line */}
      <section className="border-t border-cream/10">
        <Container className="py-16 text-center sm:py-20">
          <Sparkles aria-hidden="true" className="mx-auto h-5 w-5 text-gold" />
          <p className="mx-auto mt-6 max-w-xl font-display text-2xl font-medium italic leading-snug text-cream sm:text-3xl">
            &bdquo;Aller Anfang ist schwer.&ldquo;
          </p>
          <p className="mt-3 font-sans text-xs uppercase tracking-caps text-cream/50">
            Every beginning is hard — and you&rsquo;ve already begun.
          </p>
        </Container>
      </section>
    </div>
  );
}
