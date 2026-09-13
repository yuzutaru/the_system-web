import Link from "next/link";
import { ATTRIBUTE_LABELS, type Attribute } from "@/lib/domain";

const paths: Record<
  Attribute,
  { focus: string; firstWorkout: string }
> = {
  STR: {
    focus: "Getting stronger with weights",
    firstWorkout: "Start with 3 sets of 5 on squats, bench, or rows.",
  },
  END: {
    focus: "Building stamina and heart health",
    firstWorkout: "Try a 20-minute easy run or bike, then add intervals.",
  },
  AGI: {
    focus: "Moving better, faster, and more freely",
    firstWorkout: "Begin with bodyweight squats, push-ups, and mobility drills.",
  },
  VIT: {
    focus: "Recovering well and staying consistent",
    firstWorkout: "Set a sleep target and log one mobility session this week.",
  },
};

export function BeginnerPaths() {
  return (
    <section id="start" className="scroll-mt-24 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-50">
          New here? Pick where to start.
        </h2>
        <p className="max-w-2xl text-zinc-400">
          You don&apos;t need a perfect plan. Choose the path that matches your
          goal — The System grows the matching stat as you train.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {(Object.keys(ATTRIBUTE_LABELS) as Attribute[]).map((attribute) => (
          <div
            key={attribute}
            className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-5"
          >
            <h3 className="font-semibold text-zinc-100">
              {ATTRIBUTE_LABELS[attribute]}
              <span className="ml-2 text-xs text-zinc-500">{attribute}</span>
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{paths[attribute].focus}</p>
            <p className="mt-3 text-sm text-zinc-500">
              First workout: {paths[attribute].firstWorkout}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/exercises"
        className="inline-block text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
      >
        Find your first exercise →
      </Link>
    </section>
  );
}
