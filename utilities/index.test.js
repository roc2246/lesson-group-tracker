import { describe, it, expect, vi, beforeEach } from "vitest";
import { validateInput } from ".";

describe("validateInput", () => {
  it("should throw error message", () => {
    const testMssg = "TEST";
    const expectedMssg = `${testMssg} is required.`;
    expect(() => validateInput(null, testMssg)).toThrow(expectedMssg);
  });
});
