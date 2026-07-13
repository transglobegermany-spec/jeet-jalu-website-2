import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { WhyGermany } from "@/components/home/why-germany";
import { Paths } from "@/components/home/paths";
import { MethodPreview } from "@/components/home/method-preview";
import { MentorPreview } from "@/components/home/mentor-preview";
import { StoryFeature } from "@/components/home/story-feature";
import { DiscoverTeaser } from "@/components/home/discover-teaser";
import { CtaBand } from "@/components/shared/cta-band";

/**
 * Homepage as a journey: arrive (film) → believe (why) → choose a path →
 * meet the method and the mentor → see proof → dream (discover) → begin.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyGermany />
      <Paths />
      <MethodPreview />
      <MentorPreview />
      <StoryFeature />
      <DiscoverTeaser />
      <CtaBand />
    </>
  );
}
