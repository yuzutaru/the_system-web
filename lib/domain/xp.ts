import { emptyScores, type Attribute, type AttributeScores } from "./attribute";
import { entryVolume, type SessionEntry } from "./exercise";

export const STRENGTH_VOLUME_PER_XP = 50;
export const CARDIO_HIGH_INTENSITY_THRESHOLD = 140;
export const CARDIO_HIGH_INTENSITY_FACTOR = 1.2;
export const SECONDARY_SHARE = 0.3;

export function strengthXp(volume: number): number {
  if (volume <= 0) return 0;
  return Math.max(1, Math.floor(volume / STRENGTH_VOLUME_PER_XP));
}

export function cardioXp(durationMin: number, avgHeartRate?: number): number {
  if (durationMin <= 0) return 0;
  const factor =
    (avgHeartRate ?? 0) >= CARDIO_HIGH_INTENSITY_THRESHOLD
      ? CARDIO_HIGH_INTENSITY_FACTOR
      : 1;
  return Math.max(1, Math.floor(durationMin * factor));
}

export function mobilityXp(durationMin: number): number {
  if (durationMin <= 0) return 0;
  return Math.max(1, Math.floor(durationMin));
}

export function entryXp(entry: SessionEntry): number {
  switch (entry.kind) {
    case "strength":
      return strengthXp(entryVolume(entry.sets));
    case "cardio":
      return cardioXp(entry.durationMin ?? 0, entry.avgHeartRate);
    case "mobility":
      return mobilityXp(entry.durationMin ?? 0);
  }
}

export function sessionXp(entries: SessionEntry[]): number {
  return entries.reduce((total, entry) => total + entryXp(entry), 0);
}

export function gold(xp: number): number {
  return Math.floor(xp / 2);
}

export function split(
  xp: number,
  primary: Attribute,
  secondary?: Attribute,
): AttributeScores {
  const scores = emptyScores();
  if (!secondary || secondary === primary) {
    scores[primary] += xp;
    return scores;
  }
  const secondaryXp = Math.floor(xp * SECONDARY_SHARE);
  scores[primary] += xp - secondaryXp;
  scores[secondary] += secondaryXp;
  return scores;
}
