import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { Paths } from "@/components/home/paths";
import { MethodPreview } from "@/components/home/method-preview";
import { MentorPreview } from "@/components/home/mentor-preview";
import { StoryFeature } from "@/components/home/story-feature";
import { CtaBand } from "@/components/shared/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Paths />
      <MethodPreview />
      <MentorPreview />
      <StoryFeature />
      <CtaBand />
    </>
  );
}
