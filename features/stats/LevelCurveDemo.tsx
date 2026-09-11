"use client";

import { useState } from "react";
import {
  levelForTotalXp,
  POINTS_PER_LEVEL,
  progressToNextLevel,
  totalXpForLevel,
} from "@/lib/domain";

export function LevelCurveDemo() {
  const [xp, setXp] = useState(0);
  const level = levelForTotalXp(xp);
  const { current, required } = progressToNextLevel(xp);
  const percent = Math.min(100, (current / required) * 100);

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="mb-4 font-semibold text-zinc-100">Level Curve</h3>
      <input
        type="range"
        min={0}
        max={5000}
        step={10}
        value={xp}
        onChange={(event) => setXp(Number(event.target.value))}
        className="w-full accent-amber-500"
      />
      <div className="mt-4 flex justify-between text-sm text-zinc-400">
        <span>Total XP: {xp}</span>
        <span>Level {level}</span>
      </div>
      <div className="mt-2 h-3 rounded-full bg-zinc-800">
        <div
          className="h-3 rounded-full bg-amber-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-zinc-500">
        {current}/{required} XP to next level · {level * POINTS_PER_LEVEL} points
        earned · {totalXpForLevel(level)} XP into this level
      </p>
    </div>
  );
}
