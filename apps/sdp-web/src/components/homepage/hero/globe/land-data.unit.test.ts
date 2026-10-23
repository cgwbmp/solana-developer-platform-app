import { describe, expect, it } from "vitest";
import { LAND } from "./land-data";

describe("LAND", () => {
  it("keeps the coast data unchanged", () => {
    expect(LAND).toHaveLength(60);
    expect(LAND.filter((line) => line.closed)).toHaveLength(57);
    expect(LAND.reduce((count, line) => count + line.points.length, 0)).toBe(1290);
    expect(LAND[0].points[0]).toEqual([-180, 68.98]);
    expect(LAND[LAND.length - 1].points.at(-1)).toEqual([124.29, 12.57]);
  });
});
