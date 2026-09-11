import { ATTRIBUTE_LABELS, type Attribute } from "@/lib/domain";

const tints: Record<Attribute, string> = {
  STR: "bg-red-500",
  END: "bg-emerald-500",
  AGI: "bg-blue-500",
  VIT: "bg-amber-500",
};

export function StatBar({
  attribute,
  value,
  max = 50,
}: {
  attribute: Attribute;
  value: number;
  max?: number;
}) {
  const width = Math.min(100, (value / max) * 100);
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs uppercase tracking-wide text-zinc-400">
        <span>{ATTRIBUTE_LABELS[attribute]}</span>
        <span className="font-bold text-zinc-100">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-zinc-800">
        <div
          className={`h-2 rounded-full ${tints[attribute]}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
