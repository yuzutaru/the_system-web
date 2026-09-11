export const ATTRIBUTES = ["STR", "END", "AGI", "VIT"] as const;

export type Attribute = (typeof ATTRIBUTES)[number];

export type AttributeScores = Record<Attribute, number>;

export const ATTRIBUTE_LABELS: Record<Attribute, string> = {
  STR: "Strength",
  END: "Endurance",
  AGI: "Agility",
  VIT: "Vitality",
};

export function emptyScores(): AttributeScores {
  return { STR: 0, END: 0, AGI: 0, VIT: 0 };
}
