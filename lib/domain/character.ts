import type { AttributeScores } from "./attribute";

export type CharacterClass =
  | "Novice"
  | "Warrior"
  | "Rogue"
  | "Monk"
  | "Berserker"
  | "Paladin"
  | "Assassin"
  | "Ranger";

export function resolveClass(scores: AttributeScores): CharacterClass {
  const { STR: str, END: end, AGI: agi, VIT: vit } = scores;

  const isWarrior = str >= 20;
  const isRogue = agi >= 20;

  let result: CharacterClass = "Novice";
  if (isWarrior) result = "Warrior";
  if (isRogue) result = "Rogue";
  if (agi >= 15 && vit >= 15) result = "Monk";
  if (isWarrior && str >= 40) result = "Berserker";
  if (isWarrior && end >= 30) result = "Paladin";
  if (isRogue && agi >= 40) result = "Assassin";
  if (isRogue && end >= 30) result = "Ranger";
  return result;
}
