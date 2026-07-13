import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/shared/cta-band";
import { BookOpen, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "The Academy",
  description:
    "Learn German with premium, interactive courses. Offline-compatible, lifetime access.",
};

export default function CoursesPage() {
  const courses = [
    {
      slug: "a1",
      name: "Complete A1 System",
      tagline: "German from zero to confident",
      description:
        "16 interactive modules covering every A1 topic. 150+ practice questions. Learn offline on any device.",
      level: "A1 (Beginner)",
      modules: 16,
      questions: 150,
      price: 799,
      icon: BookOpen,
      highlight: true,
    },
    {
      slug: "a2",
      name: "Complete A2 System",
      tagline: "Build on your foundation",
      description: "Coming soon — A2 modules with conversation, storytelling, and cultural immersion.",
      level: "A2 (Elementary)",
      modules: 18,
      questions: 200,
      price: 899,
      icon: Users,
      highlight: false,
      comingSoon: true,
    },
    {
      slug: "b1",
      name: "Complete B1 System",
      tagline: "Fluent and independent",
      description: "Coming soon — B1 modules for real conversations, complex grammar, and exam preparation.",
      level: "B1 (Intermediate)",
      modules: 20,
      questions: 250,
      price: 999,
      icon: Award,
      highlight: false,
      comingSoon: true,
    },
  ];

  return (
    <>
      <section className="border-b border-mist py-20 sm:py-28">
        <Container className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
            The Academy
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Learn German at your pace.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-slate sm:text-lg">
            Interactive courses designed for real learning. No subscriptions. Download once, use forever offline.
          </p>
        </Container>
      </section>

      <Section>
        <div className="space-y-6">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.slug}
                className={`grid gap-10 border transition-[border-color,transform] duration-300 ease-soft hover:-translate-y-0.5 ${
                  course.highlight ? "border-gold bg-paper-raised" : "border-mist bg-paper-raised hover:border-gold/40"
                } p-8 lg:grid-cols-[1fr_1fr] lg:items-center`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <Icon
                      aria-hidden="true"
                      className={`h-6 w-6 ${
                        course.highlight ? "text-gold-deep" : "text-slate-light"
                      }`}
                    />
                    <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
                      {course.level}
                    </p>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-medium text-ink">
                    {course.name}
                  </h2>
                  <p className="mt-2 text-lg text-slate">{course.tagline}</p>
                  <p className="mt-5 leading-relaxed text-slate">{course.description}</p>
                  <div className="mt-8 flex gap-8">
                    <div>
                      <p className="font-sans text-xs uppercase tracking-caps text-slate-light">
                        Modules
                      </p>
                      <p className="mt-1 font-display text-2xl font-medium text-ink">
                        {course.modules}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-caps text-slate-light">
                        Questions
                      </p>
                      <p className="mt-1 font-display text-2xl font-medium text-ink">
                        {course.questions}+
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
                  <p className="font-sans text-xs uppercase tracking-caps text-slate-light">
                    One-time investment
                  </p>
                  <p className="mt-3 font-display text-5xl font-medium text-ink">
                    ₹{course.price}
                  </p>
                  <p className="mt-2 text-sm text-slate">Lifetime access</p>

                  {course.comingSoon ? (
                    <button
                      disabled
                      className="mt-8 rounded bg-slate/20 px-8 py-3 font-sans text-sm font-medium text-slate-light cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <Button href={`/courses/${course.slug}`} className="mt-8">
                      View & Buy
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <CtaBand
        title="Not sure which level?"
        lede="Take the free readiness assessment to find your starting point. No obligation — just clarity."
      />
    </>
  );
}
