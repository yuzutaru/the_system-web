import type { Attribute } from "./attribute";

export type ExerciseKind = "strength" | "cardio" | "mobility";

export interface Exercise {
  id: string;
  name: string;
  kind: ExerciseKind;
  primary: Attribute;
  secondary?: Attribute;
}

export interface SetEntry {
  reps: number;
  weightKg: number;
  rpe?: number;
}

export interface SessionEntry {
  id: string;
  exerciseId: string;
  kind: ExerciseKind;
  sets?: SetEntry[];
  durationMin?: number;
  distanceKm?: number;
  avgHeartRate?: number;
}

export function entryVolume(sets: SetEntry[] | undefined): number {
  if (!sets) return 0;
  return sets.reduce((total, set) => total + set.reps * set.weightKg, 0);
}
