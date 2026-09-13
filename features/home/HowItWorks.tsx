import Link from "next/link";

const steps = [
  {
    title: "Log your workout",
    body: "Record strength sets, cardio, or mobility. Every entry earns XP and gold automatically — no spreadsheets.",
    href: "/exercises",
    cta: "Browse exercises",
  },
  {
    title: "Log your progression",
    body: "XP levels you up, estimated 1RMs track your strength, and streaks keep your routine honest.",
    href: "/stats",
    cta: "See the level curve",
  },
  {
    title: "Analyze your progress",
    body: "Watch your STR, END, AGI, and VIT grow, and unlock a class that reflects how you actually train.",
    href: "/character",
    cta: "Find your class",
  },
];

export function HowItWorks() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-50">How it works</h2>
        <p className="text-zinc-400">
          Three habits, one loop: log it, track it, learn from it.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/60 p-5"
          >
            <span className="text-xs font-bold uppercase tracking-wide text-amber-400">
              Step {index + 1}
            </span>
            <h3 className="mt-2 font-semibold text-zinc-100">{step.title}</h3>
            <p className="mt-1 flex-1 text-sm text-zinc-400">{step.body}</p>
            <Link
              href={step.href}
              className="mt-4 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              {step.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
