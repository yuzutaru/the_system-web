import { ClassDemo } from "@/features/character/ClassDemo";

export const metadata = { title: "Character · The System" };

export default function CharacterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-50">Character</h1>
        <p className="text-zinc-400">
          Drag the attributes to see which class unlocks. Same rules as{" "}
          <code>docs/domain.md</code>.
        </p>
      </div>
      <ClassDemo />
    </div>
  );
}
