"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

const MODULES = [
  "Pronunciation & Sounds",
  "The Complete Article System",
  "Time, Days & Months",
  "Sentence Foundations",
  "Personal Pronouns (Akk/Dat)",
  "Verb Conjugation",
  "Perfekt (Past Tense)",
  "Cases Explorer",
  "Cases Interactive",
  "Prepositions Complete",
  "Prepositions Interactive",
  "W-Fragen & Ja/Nein Questions",
  "Goethe A1 Wortschatz",
  "The A1 Workbook",
  "Deutsch-Spiele",
] as const;

const STORAGE_KEY = "jj-a1-progress";

/**
 * Personal progress tracker. Stored locally in the student's browser —
 * private to them, works without any account.
 */
export function ProgressCard() {
  const [done, setDone] = React.useState<Set<number>>(new Set());
  const [open, setOpen] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(new Set(JSON.parse(raw) as number[]));
    } catch {
      /* first visit */
    }
    setReady(true);
  }, []);

  const toggle = (i: number) => {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      } catch {
        /* private mode */
      }
      return next;
    });
  };

  const pct = Math.round((done.size / MODULES.length) * 100);

  return (
    <div className="flex h-full flex-col border border-cream/10 bg-ink-soft/60 p-8 transition-[border-color,transform] duration-300 ease-soft hover:-translate-y-0.5 hover:border-gold/40">
      <p className="font-sans text-[11px] font-semibold uppercase tracking-caps text-gold">
        Progress
      </p>
      <h3 className="mt-3 font-display text-2xl font-medium text-cream">
        Your journey
      </h3>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-4xl font-medium text-cream">
            {ready ? done.size : "–"}
            <span className="text-lg text-cream/50"> / {MODULES.length}</span>
          </span>
          <span className="font-sans text-sm text-cream/60">{ready ? `${pct}%` : ""}</span>
        </div>
        <div
          className="mt-3 h-px w-full bg-cream/15"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Modules completed"
        >
          <div
            className="h-px bg-gold transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/60">
        Tick off each module as you finish it. Saved privately on this device.
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-cream transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {open ? "Hide checklist" : "Open checklist"}
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="mt-5 space-y-1 border-t border-cream/10 pt-5">
          {MODULES.map((m, i) => {
            const isDone = done.has(i);
            return (
              <li key={m}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={isDone}
                  className="group flex w-full items-center gap-3 py-1.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-colors ${
                      isDone
                        ? "border-gold bg-gold"
                        : "border-cream/30 group-hover:border-cream/60"
                    }`}
                  >
                    {isDone && (
                      <Check aria-hidden="true" className="h-3 w-3 text-ink" />
                    )}
                  </span>
                  <span
                    className={`font-sans text-sm transition-colors ${
                      isDone ? "text-cream/40 line-through" : "text-cream/80"
                    }`}
                  >
                    {m}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
