import { XpCalculator } from "@/features/workout/XpCalculator";
import { ATTRIBUTE_LABELS, type Attribute } from "@/lib/domain";

const attributeCopy: Record<Attribute, string> = {
  STR: "Heavy compounds, powerlifting, resistance training.",
  END: "Running, cycling, HIIT, steady-state cardio.",
  AGI: "Sports, calisthenics, mobility, speed drills.",
  VIT: "Sleep, recovery, nutrition consistency.",
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50">
          Forge real-life attributes through iron.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-400">
          The System turns workouts into a heavy RPG. Log your grind, earn XP and
          gold, level up, and allocate stat points to shape your build. Free,
          open source, and offline-first.
        </p>
      </section>

      <XpCalculator />

      <section className="grid gap-4 sm:grid-cols-2">
        {(Object.keys(ATTRIBUTE_LABELS) as Attribute[]).map((attribute) => (
          <div
            key={attribute}
            className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-5"
          >
            <h3 className="font-semibold text-zinc-100">
              {ATTRIBUTE_LABELS[attribute]}
              <span className="ml-2 text-xs text-zinc-500">{attribute}</span>
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{attributeCopy[attribute]}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
