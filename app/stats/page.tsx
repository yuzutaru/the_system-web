import { LevelCurveDemo } from "@/features/stats/LevelCurveDemo";

export const metadata = { title: "Stats · The System" };

export default function StatsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-50">Stats</h1>
        <p className="text-zinc-400">
          The levelling formula, shared by iOS, Android, and the backend.
        </p>
      </div>
      <LevelCurveDemo />
    </div>
  );
}
