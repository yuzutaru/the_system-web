"use client";

import { useState } from "react";
import {
  ATTRIBUTES,
  ATTRIBUTE_LABELS,
  resolveClass,
  type Attribute,
  type AttributeScores,
} from "@/lib/domain";
import { StatBar } from "@/components/StatBar";

export function ClassDemo() {
  const [scores, setScores] = useState<AttributeScores>({
    STR: 0,
    END: 0,
    AGI: 0,
    VIT: 0,
  });

  const characterClass = resolveClass(scores);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-6">
        <p className="text-sm uppercase tracking-wide text-zinc-500">
          Current class
        </p>
        <p className="text-3xl font-bold text-amber-400">{characterClass}</p>
      </div>
      <div className="space-y-4">
        {ATTRIBUTES.map((attribute: Attribute) => (
          <div key={attribute} className="space-y-2">
            <StatBar attribute={attribute} value={scores[attribute]} />
            <input
              type="range"
              min={0}
              max={50}
              value={scores[attribute]}
              onChange={(event) =>
                setScores((previous) => ({
                  ...previous,
                  [attribute]: Number(event.target.value),
                }))
              }
              className="w-full accent-amber-500"
              aria-label={ATTRIBUTE_LABELS[attribute]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
