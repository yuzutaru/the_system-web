export const POINTS_PER_LEVEL = 3;

export function xpToNext(level: number): number {
  if (level < 1) return 0;
  return 100 * level;
}

export function totalXpForLevel(level: number): number {
  if (level < 1) return 0;
  return (100 * level * (level - 1)) / 2;
}

export function levelForTotalXp(xp: number): number {
  if (xp <= 0) return 1;
  let level = 1;
  while (totalXpForLevel(level + 1) <= xp) {
    level += 1;
  }
  return level;
}

export function progressToNextLevel(totalXp: number): {
  current: number;
  required: number;
} {
  const level = levelForTotalXp(totalXp);
  const base = totalXpForLevel(level);
  return { current: totalXp - base, required: xpToNext(level) };
}

export function oneRepMax(weightKg: number, reps: number): number {
  if (reps < 1) return 0;
  return weightKg * (1 + reps / 30);
}
