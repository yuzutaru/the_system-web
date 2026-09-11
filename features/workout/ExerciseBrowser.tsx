"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchExercises } from "@/lib/api";

const kindLabels: Record<string, string> = {
  strength: "Strength",
  cardio: "Cardio",
  mobility: "Mobility",
};

export function ExerciseBrowser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => fetchExercises(),
  });

  if (isLoading) {
    return <p className="text-zinc-400">Loading exercises…</p>;
  }

  if (error) {
    return (
      <p className="rounded border border-amber-900 bg-amber-950/40 p-4 text-sm text-amber-300">
        Backend not reachable. Start it with <code>make run</code> in{" "}
        <code>backend/</code> and set <code>NEXT_PUBLIC_API_URL</code> if needed.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-zinc-800 rounded-lg border border-zinc-800">
      {data?.map((exercise) => (
        <li key={exercise.id} className="flex items-center justify-between px-4 py-3">
          <span className="text-zinc-100">{exercise.name}</span>
          <span className="text-xs uppercase tracking-wide text-zinc-500">
            {kindLabels[exercise.kind]} · {exercise.primary}
            {exercise.secondary ? `/${exercise.secondary}` : ""}
          </span>
        </li>
      ))}
    </ul>
  );
}
