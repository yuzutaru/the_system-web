import Link from "next/link";

export function Hero() {
  return (
    <section className="space-y-6">
      <p className="text-sm font-medium uppercase tracking-wide text-amber-400">
        Free &amp; open-source fitness tracker
      </p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
        Track workouts. Log your progress. See the gains.
      </h1>
      <p className="max-w-2xl text-lg text-zinc-400">
        The System is a fitness tracker for beginners. It tells you where to
        start, logs every session, tracks how you improve, and turns your grind
        into levels and stats along the way.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="#start"
          className="rounded-md bg-amber-400 px-5 py-2.5 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
        >
          Start here
        </Link>
        <Link
          href="/exercises"
          className="rounded-md border border-zinc-700 px-5 py-2.5 font-semibold text-zinc-100 transition-colors hover:border-amber-400 hover:text-amber-400"
        >
          Log a workout
        </Link>
      </div>
    </section>
  );
}
