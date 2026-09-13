import Link from "next/link";

export function ClosingCta() {
  return (
    <section className="rounded-lg border border-amber-900/60 bg-amber-950/20 p-8 text-center">
      <h2 className="text-2xl font-bold text-zinc-50">
        Start your first session today.
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-zinc-400">
        No account, no subscription. The System is free, open source, and works
        offline on mobile.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/exercises"
          className="rounded-md bg-amber-400 px-5 py-2.5 font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
        >
          Log a workout
        </Link>
        <Link
          href="/character"
          className="rounded-md border border-zinc-700 px-5 py-2.5 font-semibold text-zinc-100 transition-colors hover:border-amber-400 hover:text-amber-400"
        >
          Build your character
        </Link>
      </div>
    </section>
  );
}
