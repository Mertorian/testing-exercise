import { describe, it, expect } from "vitest";
import { calculateSum } from "./calculateSum";

describe("calculateSum", () => {
  it("should return the sum of two numbers", () => {
    expect(calculateSum(1, 2)).toBe(3);
    expect(calculateSum(-1, 2)).toBe(1);
    expect(calculateSum(0, 0)).toBe(0);
  });

  it("should return 3 (not '12') when adding '1' and '2'", () => {
    expect(calculateSum("1", "2")).toBe(3);
  });
});
