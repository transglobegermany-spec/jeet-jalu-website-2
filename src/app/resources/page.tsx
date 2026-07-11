import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/shared/cta-band";
import { Download, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium A1 Learning System",
  description:
    "The Complete A1 System — 16 interactive HTML modules, 150+ practice questions, offline access. Learn German on your own time.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-mist py-20 sm:py-28">
        <Container className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
            Premium Resources
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            The Complete A1 System.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-slate sm:text-lg">
            16 interactive modules covering every A1 topic. Learn offline on your
            phone, tablet, or laptop. No subscriptions, no watermarks — you own it.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="border border-mist bg-paper-raised p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
                What&rsquo;s Inside
              </p>
              <h2 className="mt-4 font-display text-2xl font-medium text-ink">
                16 Complete Modules
              </h2>
              <ul className="mt-7 space-y-4">
                {[
                  "Pronunciation & Sounds",
                  "The Complete Article System (13 sections)",
                  "Time, Days & Months",
                  "Sentence Foundations",
                  "Personal Pronouns (Nominativ/Akkusativ/Dativ)",
                  "Verb Conjugation (regular, irregular, modal, separable)",
                  "Perfekt (Past Tense)",
                  "Cases (Nominativ, Akkusativ, Dativ, Genitiv)",
                  "Prepositions (Akkusativ, Dativ, two-way)",
                  "W-Fragen & Ja/Nein Questions",
                  "Goethe A1 Official Vocabulary (by theme)",
                  "The A1 Comprehensive Workbook",
                  "4 Interactive Games (article, verb, case, word order)",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border border-mist bg-paper-raised p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
                Features
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "150+ practice quiz questions with instant feedback",
                  "Fully offline — no internet required after download",
                  "Works on any device: phone, tablet, laptop",
                  "Self-contained HTML files — nothing to install",
                  "Interactive sentence builders and games",
                  "Goethe-aligned vocabulary and exam format",
                  "Download once, use forever — no subscriptions",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-sm leading-relaxed text-slate"
                  >
                    <span className="text-gold-deep">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="sticky top-24 border border-gold bg-paper-raised p-10 text-center">
              <p className="font-sans text-xs uppercase tracking-caps text-gold-deep">
                Premium Package
              </p>
              <p className="mt-8 font-display text-5xl font-medium text-ink">
                ₹799
              </p>
              <p className="mt-2 text-sm text-slate">
                One-time purchase. Lifetime access.
              </p>

              <a
                href="#"
                className="mt-10 block w-full bg-gold px-8 py-4 font-sans text-base font-medium text-white text-center transition-opacity hover:opacity-90"
                title="Razorpay payment link — setup required"
              >
                <Download aria-hidden="true" className="mb-1 inline h-4 w-4" /> Get Instant Download
              </a>

              <p className="mt-6 text-xs leading-relaxed text-slate-light">
                After payment, download link with all 16 modules. Use forever — offline.
              </p>

              <hr className="my-8 border-mist" />

              <p className="font-sans text-xs font-semibold uppercase tracking-caps text-slate-light">
                Why students choose this:
              </p>
              <ul className="mt-5 space-y-2 text-left text-xs leading-relaxed text-slate">
                <li>✓ No subscription. Buy once, keep forever.</li>
                <li>✓ Offline. Learn on flights, trains, anywhere.</li>
                <li>✓ Premium. Built by Jeet Jalu, who lived in Germany.</li>
                <li>✓ Comprehensive. Every A1 topic in one package.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="raised" className="border-y border-mist">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Free Sample"
            title="Try before you buy."
            lede="Download one complete module free to see the quality and style. No email required."
          />
        </div>
      </Section>

      <CtaBand
        title="Ready to master A1?"
        lede="16 modules, 150+ practice questions, lifetime access. One payment, complete system."
      />
    </>
  );
}
