import { z } from "zod";
import type { Exercise, ExerciseKind } from "./domain";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

const exerciseSchema = z.object({
  id: z.string(),
  name: z.string(),
  kind: z.enum(["strength", "cardio", "mobility"]),
  primary: z.enum(["STR", "END", "AGI", "VIT"]),
  secondary: z.enum(["STR", "END", "AGI", "VIT"]).optional(),
});

const exerciseListSchema = z.object({ items: z.array(exerciseSchema) });

export async function fetchExercises(kind?: ExerciseKind): Promise<Exercise[]> {
  const url = new URL("/v1/exercises", API_URL);
  if (kind) url.searchParams.set("kind", kind);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load exercises (${response.status})`);
  }
  const parsed = exerciseListSchema.parse(await response.json());
  return parsed.items;
}
