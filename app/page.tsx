import { Hero } from "@/features/home/Hero";
import { HowItWorks } from "@/features/home/HowItWorks";
import { BeginnerPaths } from "@/features/home/BeginnerPaths";
import { FeatureHighlights } from "@/features/home/FeatureHighlights";
import { ClosingCta } from "@/features/home/ClosingCta";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <HowItWorks />
      <BeginnerPaths />
      <FeatureHighlights />
      <ClosingCta />
    </div>
  );
}
