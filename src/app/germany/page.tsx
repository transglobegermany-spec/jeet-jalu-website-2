import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GermanWord } from "@/components/shared/german-word";
import { SmartImage } from "@/components/shared/smart-image";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "Discover Germany",
  description:
    "Cities, landmarks, and the culture behind them — Germany as it actually feels, told by someone who lived it.",
};

const cities = [
  {
    name: "Berlin",
    line: "The capital that reinvents itself every decade — startups, history, and student life that never sleeps.",
    tags: "Startups · History · Nightlife",
  },
  {
    name: "Munich",
    line: "Bavaria's polished heart. BMW, world-class universities, beer gardens, and the Alps an hour away.",
    tags: "Engineering · Tradition · Alps",
  },
  {
    name: "Hamburg",
    line: "A harbor city of media houses and red-brick warehouses, where northern Germany does business with the world.",
    tags: "Media · Trade · Waterfront",
  },
  {
    name: "Heidelberg",
    line: "Germany's oldest university town — a castle above the river, and lecture halls older than most countries.",
    tags: "Academia · Romance · Research",
  },
  {
    name: "Frankfurt",
    line: "The skyline that runs Europe's money. Banking, consulting, and the busiest airport on the continent.",
    tags: "Finance · Careers · Global",
  },
  {
    name: "Cologne",
    line: "A cathedral seven centuries in the making and a carnival spirit that lasts all year.",
    tags: "Culture · Media · Rhine",
  },
  {
    name: "Dresden",
    line: "Baroque architecture rebuilt from ash — and today, a quiet powerhouse of microelectronics.",
    tags: "Architecture · Tech · East",
  },
  {
    name: "Stuttgart",
    line: "Porsche and Mercedes were born here. Where German engineering isn't a slogan — it's the neighbours.",
    tags: "Automotive · Precision · Hills",
  },
  {
    name: "Leipzig",
    line: "Bach's city turned creative capital — affordable, artistic, and rising fast with young graduates.",
    tags: "Music · Affordable · Rising",
  },
];

const landmarks = [
  { name: "Neuschwanstein Castle", line: "The fairytale castle that inspired Disney, high in the Bavarian hills." },
  { name: "Brandenburg Gate", line: "Berlin's icon — once a border, now the symbol of a reunited country." },
  { name: "Cologne Cathedral", line: "632 years under construction. Germans finish what they start." },
  { name: "The Black Forest", line: "Dark pines, cuckoo clocks, and the cake that took the name worldwide." },
  { name: "Rhine Valley", line: "Castles on every hilltop, vineyards on every slope, barges gliding between." },
  { name: "Bavarian Alps", line: "Where Munich goes on weekends — hiking in summer, skiing in winter." },
  { name: "Lake Königssee", line: "Water so still and clean the boats run on electricity — since 1909." },
  { name: "Christmas Markets", line: "Glühwein, wooden stalls, and entire cities that smell of cinnamon from late November." },
];

const culture = [
  {
    title: "Punctuality is respect",
    text: "A 10:00 meeting begins at 10:00 — arriving at 10:05 says something you didn't intend. Germans read time as a measure of reliability, and once you internalize it, you'll never go back.",
  },
  {
    title: "Direct is polite",
    text: "Germans say what they mean, without cushioning. It can feel blunt at first; it's actually a form of respect — nobody wastes your time guessing.",
  },
  {
    title: "Order creates freedom",
    text: "Recycling sorted into five bins, quiet hours after ten, forms for everything. The structure feels strict — until you notice how smoothly everything runs because of it.",
  },
  {
    title: "Work hard, then actually stop",
    text: "Focused, efficient workdays — and then evenings, weekends, and holidays that are genuinely yours. Germans protect their free time like an asset.",
  },
  {
    title: "Football is a second language",
    text: "Knowing your city's club — Bayern, BVB, St. Pauli — opens more conversations than any grammar chapter ever will.",
  },
  {
    title: "The trains connect everything",
    text: "One ticket, and the whole country opens: lecture in Munich, weekend in Berlin. Public transport isn't a backup plan in Germany — it's the plan.",
  },
];

export default function GermanyPage() {
  return (
    <>
      {/* Editorial opening */}
      <section className="border-b border-mist py-24 sm:py-32">
        <Container className="max-w-3xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-caps text-gold-deep">
            Discover Germany
          </p>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
            One day, this will be your life.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate">
            Not the Germany of brochures — the Germany of Monday mornings and
            Friday evenings. The trains that arrive, the lectures that demand,
            the lakes in summer, the markets in December. This is the country
            you&rsquo;re actually moving to.
          </p>
          <GermanWord
            word="Fernweh"
            translation="the ache for distant places"
            className="mt-12 inline-block"
          />
        </Container>
      </section>

      {/* Cities — editorial grid */}
      <Section aria-labelledby="cities-heading">
        <SectionHeading
          eyebrow="The Cities"
          title="Nine cities, nine different lives."
          lede="Every German city offers a different version of your future. Part of my work is matching you to the right one — not just the famous one."
        />
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, i) => (
            <article key={city.name} className="group">
              <SmartImage
                src={`/germany/${city.name.toLowerCase()}.jpg`}
                alt={`${city.name}, Germany`}
                label={`${city.name} — photo appears when uploaded`}
                ratio="aspect-[4/3]"
              />
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-medium text-ink">
                  {city.name}
                </h3>
                <span className="font-sans text-[10px] uppercase tracking-caps text-slate-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate">{city.line}</p>
              <p className="mt-3 font-sans text-[11px] uppercase tracking-caps text-gold-deep">
                {city.tags}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Landmarks — quiet editorial list on stone */}
      <Section tone="raised" className="border-y border-mist" aria-labelledby="landmarks-heading">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              eyebrow="The Landmarks"
              title="Postcards you'll send home."
            />
            <p className="mt-6 max-w-prose text-base leading-relaxed text-slate">
              Weekends are part of the education. Germany is compact and
              connected — every place on this list is a train ride from
              wherever you study.
            </p>
            <GermanWord word="Wanderlust" translation="the joy of wandering" className="mt-10" />
          </div>
          <ol className="divide-y divide-mist">
            {landmarks.map((l) => (
              <li key={l.name} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-display text-xl font-medium text-ink">{l.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">{l.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Culture — the codes, in deep forest */}
      <Section tone="dark" aria-labelledby="culture-heading">
        <SectionHeading
          onDark
          eyebrow="The Culture"
          title="The unwritten rules I teach alongside grammar."
          lede="Language gets you into Germany. Culture lets you belong there. These are the codes that took me years to decode — my students get them before their flight."
        />
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {culture.map((c, i) => (
            <div key={c.title}>
              <span className="font-display text-3xl font-medium text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-sans text-base font-semibold text-cream">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Stop dreaming in general. Start planning in specific."
        lede="Your city, your program, your timeline — built on honest advice from someone who lived there. That's how the journey begins."
      />
    </>
  );
}
