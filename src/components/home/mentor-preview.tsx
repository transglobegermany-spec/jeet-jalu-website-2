import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/shared/placeholder-image";

/** Homepage introduction to Jeet — the human behind the brand. */
export function MentorPreview() {
  return (
    <Section aria-labelledby="mentor-heading">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <PlaceholderImage
          ratio="aspect-[4/5]"
          label="Professional portrait of Jeet Jalu"
          className="order-1"
        />
        <div className="order-2">
          <SectionHeading
            eyebrow="Your mentor"
            title="I lived it before I taught it."
            lede="I'm Jeet Jalu. I've stood where you're standing — the visa queues, the first winter, the meetings where everyone switches to German. I built this brand to teach what I wish someone had taught me: the language and the life together."
          />
          <Button href="/about" variant="outline" className="mt-9">
            Read my story
          </Button>
        </div>
      </div>
    </Section>
  );
}
