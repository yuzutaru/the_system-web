import { describe, expect, it } from "vitest";
import {
  cardioXp,
  entryXp,
  gold,
  levelForTotalXp,
  oneRepMax,
  resolveClass,
  sessionXp,
  split,
  strengthXp,
  totalXpForLevel,
} from "./index";

describe("xp", () => {
  it("uses volume over 50 for strength", () => {
    expect(strengthXp(500)).toBe(10);
  });

  it("returns zero for no volume", () => {
    expect(strengthXp(0)).toBe(0);
  });

  it("applies the high-intensity cardio factor", () => {
    expect(cardioXp(10, 150)).toBe(12);
    expect(cardioXp(10, 100)).toBe(10);
  });

  it("computes session xp and gold", () => {
    const entries = [
      { id: "1", exerciseId: "squat", kind: "strength" as const, sets: [{ reps: 5, weightKg: 100 }] },
      { id: "2", exerciseId: "run", kind: "cardio" as const, durationMin: 20, avgHeartRate: 150 },
    ];
    expect(sessionXp(entries)).toBe(34);
    expect(gold(sessionXp(entries))).toBe(17);
  });

  it("splits without a secondary attribute", () => {
    expect(split(10, "STR")).toEqual({ STR: 10, END: 0, AGI: 0, VIT: 0 });
  });

  it("keeps the total when splitting", () => {
    const scores = split(10, "STR", "END");
    expect(scores.STR + scores.END).toBe(10);
    expect(scores.END).toBe(3);
  });

  it("computes entry xp by kind", () => {
    expect(entryXp({ id: "1", exerciseId: "squat", kind: "strength", sets: [{ reps: 5, weightKg: 100 }] })).toBe(10);
  });
});

describe("level", () => {
  it("matches the documented table", () => {
    expect(totalXpForLevel(1)).toBe(0);
    expect(totalXpForLevel(2)).toBe(100);
    expect(totalXpForLevel(3)).toBe(300);
    expect(totalXpForLevel(5)).toBe(1000);
  });

  it("computes level from xp", () => {
    expect(levelForTotalXp(99)).toBe(1);
    expect(levelForTotalXp(100)).toBe(2);
    expect(levelForTotalXp(300)).toBe(3);
  });

  it("computes the Epley one-rep max", () => {
    expect(oneRepMax(100, 5)).toBeCloseTo(116.666, 2);
  });
});

describe("class", () => {
  it("defaults to novice", () => {
    expect(resolveClass({ STR: 0, END: 0, AGI: 0, VIT: 0 })).toBe("Novice");
  });

  it("unlocks advanced classes", () => {
    expect(resolveClass({ STR: 40, END: 0, AGI: 0, VIT: 0 })).toBe("Berserker");
    expect(resolveClass({ STR: 20, END: 30, AGI: 0, VIT: 0 })).toBe("Paladin");
    expect(resolveClass({ STR: 0, END: 0, AGI: 15, VIT: 15 })).toBe("Monk");
  });
});
