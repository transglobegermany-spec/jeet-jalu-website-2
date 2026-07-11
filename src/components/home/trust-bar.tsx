import { Container } from "@/components/ui/container";

const signals = [
  { value: "Lived in Germany", detail: "taught from experience" },
  { value: "A1 – C1", detail: "complete language pathway" },
  { value: "High success rate", detail: "because we're selective" },
  { value: "1:1 mentorship", detail: "beyond the classroom" },
] as const;

/** Credibility strip directly under the hero. */
export function TrustBar() {
  return (
    <section aria-label="Why students trust us" className="border-b border-mist bg-paper-raised">
      <Container>
        <ul className="grid grid-cols-2 divide-mist md:grid-cols-4 md:divide-x">
          {signals.map((s) => (
            <li key={s.value} className="px-4 py-8 text-center">
              <p className="font-display text-lg font-medium text-ink">
                {s.value}
              </p>
              <p className="mt-1 font-sans text-xs uppercase tracking-caps text-slate-light">
                {s.detail}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
