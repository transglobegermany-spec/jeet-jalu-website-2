"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

/**
 * Application form.
 *
 * TODO (backend): this form currently opens the visitor's email client with
 * a pre-filled application (zero-infrastructure fallback that works today).
 * Before launch, wire `handleSubmit` to one of:
 *   - a form service (Formspree, Basin, Tally) — 15 minutes of setup, or
 *   - your own API route at src/app/api/apply/route.ts.
 */

const fieldClasses =
  "w-full border border-mist bg-paper-raised px-4 py-3 font-sans text-sm text-ink placeholder:text-slate-light focus:border-ink focus:outline-none focus:ring-2 focus:ring-gold";

export function ApplicationForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const subject = `Application — ${data.get("program")} — ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone / WhatsApp: ${data.get("phone")}`,
      `Program: ${data.get("program")}`,
      `Current German level: ${data.get("level")}`,
      `Target timeline: ${data.get("timeline")}`,
      "",
      "Goal in Germany:",
      String(data.get("goal") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-mist bg-paper-raised p-10 text-center"
      >
        <Check aria-hidden="true" className="mx-auto h-8 w-8 text-gold-deep" />
        <h3 className="mt-4 font-display text-2xl font-medium text-ink">
          Application started
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate">
          Your email app should have opened with your application. Send it as
          it is — we reply within two working days with your readiness call
          slot. If nothing opened, write to us directly at {site.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-sans text-sm font-medium text-ink">
            Full name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-sans text-sm font-medium text-ink">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="name@example.com" className={fieldClasses} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block font-sans text-sm font-medium text-ink">
            Phone / WhatsApp
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91 …" className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="program" className="mb-2 block font-sans text-sm font-medium text-ink">
            Program
          </label>
          <select id="program" name="program" required className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Choose a program
            </option>
            {programs.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} — {p.audience}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — advise me</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="level" className="mb-2 block font-sans text-sm font-medium text-ink">
            Current German level
          </label>
          <select id="level" name="level" required className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Select your level
            </option>
            {["Complete beginner", "A1", "A2", "B1", "B2 or above"].map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="mb-2 block font-sans text-sm font-medium text-ink">
            When do you want to be in Germany?
          </label>
          <select id="timeline" name="timeline" required className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Select a timeline
            </option>
            {["Within 1 year", "1–2 years", "2+ years", "Already in Germany"].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="goal" className="mb-2 block font-sans text-sm font-medium text-ink">
          Your goal in Germany
        </label>
        <textarea
          id="goal"
          name="goal"
          required
          rows={5}
          placeholder="Tell us in a few sentences: what do you want to build in Germany, and what's your situation today?"
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <Button type="submit" size="lg">
          Submit application
        </Button>
        <p className="text-xs leading-relaxed text-slate-light">
          We reply within two working days. Applying doesn&rsquo;t commit you
          to anything — the readiness call is where we both decide.
        </p>
      </div>
    </form>
  );
}
