import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { GermanWord } from "@/components/shared/german-word";

export default function NotFound() {
  return (
    <Section className="py-32 text-center">
      <GermanWord word="Verlaufen" translation="lost your way" className="justify-center" />
      <h1 className="mt-6 font-display text-4xl font-medium text-ink sm:text-5xl">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base text-slate">
        The link may be old, or the page may have moved. The homepage will get
        you back on track.
      </p>
      <div className="mt-10">
        <Button href="/">Back to the homepage</Button>
      </div>
    </Section>
  );
}
