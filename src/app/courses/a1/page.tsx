import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { CourseCheckout } from "@/components/shared/course-checkout";
import { Button } from "@/components/ui/button";
import { Check, BookOpen, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "The Complete A1 System — German Course",
  description:
    "16 interactive modules, 150+ practice questions, offline access. Master German A1 with premium, lifetime-access course.",
};

export default function A1CoursePage() {
  const modules = [
    "Pronunciation & Sounds",
    "The Complete Article System (13 sections)",
    "Time, Days & Months",
    "Sentence Foundations",
    "Personal Pronouns (Nominativ/Akkusativ/Dativ)",
    "Verb Conjugation",
    "Perfekt (Past Tense)",
    "Cases Explorer",
    "Cases Interactive",
    "Prepositions (Akkusativ, Dativ, two-way)",
    "Prepositions Interactive",
    "W-Fragen & Ja/Nein Questions",
    "Goethe A1 Official Vocabulary",
    "The A1 Comprehensive Workbook",
    "4 Interactive Games",
  ];

  const features = [
    {
      icon: BookOpen,
      title: "16 Complete Modules",
      description: "Every A1 topic covered. Pronunciation, grammar, vocabulary, games.",
    },
    {
      icon: Zap,
      title: "150+ Practice Questions",
      description: "Interactive quizzes with instant feedback. Track your progress.",
    },
    {
      icon: Users,
      title: "Learn Offline",
      description: "Download once. Use forever. Works on phone, tablet, laptop.",
    },
  ];

  return (
    <>
      <section className="border-b border-mist py-20 sm:py-28">
        <Container className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
            Premium Course
          </p>
          <h1 className="mt-5 font-display text-5xl font-medium leading-tight text-ink sm:text-6xl">
            The Complete A1 System.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate sm:text-xl">
            16 interactive modules covering every A1 topic. Learn offline on any device. One payment, lifetime access.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}>
                  <Icon aria-hidden="true" className="h-6 w-6 text-gold-deep" />
                  <h3 className="mt-3 font-sans text-sm font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What's Inside"
          title="16 Complete Modules"
          lede="Each module is interactive, self-contained, and works offline."
        />
        <div className="mt-12 grid gap-3">
          {modules.map((module) => (
            <div
              key={module}
              className="flex gap-3 border-b border-mist py-3 last:border-b-0"
            >
              <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
              <p className="text-sm text-slate">{module}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised" className="border-y border-mist">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who It's For" title="Your Starting Point" />
            <div className="mt-8 space-y-4">
              {[
                "You're starting German from zero",
                "You want premium content, not generic",
                "You learn best offline, at your pace",
                "You're preparing for Germany",
              ].map((point) => (
                <div key={point} className="flex gap-3">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold-deep" />
                  <p className="text-sm leading-relaxed text-slate">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="How It Works" title="4 Simple Steps" />
            <div className="mt-8 space-y-4">
              {[
                { step: "1", title: "Buy", desc: "Pay ₹799 on this page." },
                { step: "2", title: "Download", desc: "Get zip with all 16 modules." },
                { step: "3", title: "Extract", desc: "Unzip and open INDEX.html." },
                { step: "4", title: "Learn", desc: "Study offline, forever. No expiry." },
              ].map((item) => (
                <div key={item.step} className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold text-xs font-medium text-gold-deep">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <p className="text-xs text-slate">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-medium text-ink">Ready to start?</h2>
            <p className="mt-5 text-base leading-relaxed text-slate">
              One payment. Lifetime access. Start learning A1 right now.
            </p>
            <div className="mt-8 space-y-3 border-y border-mist py-8">
              {[
                "16 interactive modules",
                "150+ practice questions",
                "4 games included",
                "Works offline forever",
                "No subscriptions",
              ].map((point) => (
                <div key={point} className="flex gap-3">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold-deep" />
                  <p className="text-sm text-slate">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="border border-gold bg-paper-raised p-10 text-center">
              <p className="font-sans text-xs uppercase tracking-caps text-gold-deep">
                One-time investment
              </p>
              <p className="mt-6 font-display text-6xl font-medium text-ink">₹799</p>
              <p className="mt-2 text-sm text-slate">Lifetime access. No renewal.</p>
            </div>

            <CourseCheckout
              courseName="The Complete A1 System"
              price={799}
            />

            <p className="text-xs leading-relaxed text-slate-light">
              After payment, download instantly. Extract and open INDEX.html. Works offline on any device.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
