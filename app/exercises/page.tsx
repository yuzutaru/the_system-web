import { ExerciseBrowser } from "@/features/workout/ExerciseBrowser";

export const metadata = { title: "Exercises · The System" };

export default function ExercisesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-50">Exercise Catalogue</h1>
        <p className="text-zinc-400">
          Loaded from the The System API (<code>GET /v1/exercises</code>).
        </p>
      </div>
      <ExerciseBrowser />
    </div>
  );
}
