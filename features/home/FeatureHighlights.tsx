import Link from "next/link";
import { XpCalculator } from "@/components/XpCalculator";

export function FeatureHighlights() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-50">See how XP works</h2>
        <p className="max-w-2xl text-zinc-400">
          Every rep counts. Plug in a set to see the XP and estimated one-rep
          max The System would award.
        </p>
      </div>
      <XpCalculator />
      <Link
        href="/stats"
        className="inline-block text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
      >
        Explore the full level curve →
      </Link>
    </section>
  );
}
