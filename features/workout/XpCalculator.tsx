"use client";

import { useState } from "react";
import { oneRepMax, strengthXp } from "@/lib/domain";

export function XpCalculator() {
  const [reps, setReps] = useState(5);
  const [weight, setWeight] = useState(100);

  const volume = reps * weight;
  const xp = strengthXp(volume);

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="mb-4 font-semibold text-zinc-100">XP Calculator</h3>
      <div className="grid grid-cols-2 gap-4">
        <label className="text-sm text-zinc-400">
          Reps
          <input
            type="number"
            min={1}
            value={reps}
            onChange={(event) => setReps(Number(event.target.value))}
            className="mt-1 w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          />
        </label>
        <label className="text-sm text-zinc-400">
          Weight (kg)
          <input
            type="number"
            min={0}
            value={weight}
            onChange={(event) => setWeight(Number(event.target.value))}
            className="mt-1 w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          />
        </label>
      </div>
      <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <dt className="text-xs uppercase text-zinc-500">Volume</dt>
          <dd className="text-lg font-bold text-zinc-100">{volume} kg</dd>
        </div>
        <div>
          <dt className="text-xs uppercase text-zinc-500">XP</dt>
          <dd className="text-lg font-bold text-amber-400">+{xp}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase text-zinc-500">Est. 1RM</dt>
          <dd className="text-lg font-bold text-zinc-100">
            {oneRepMax(weight, reps).toFixed(1)} kg
          </dd>
        </div>
      </dl>
    </div>
  );
}
