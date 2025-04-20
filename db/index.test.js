import { describe, it, expect } from "vitest";
import { dbLogin } from "../db/index";
import { mockConnSuccess, mockConnFail } from "../__mocks__/db/index"; // import mocks


describe("dbLogin", () => {
  it("should return mock connection message", async () => {
    const message = await dbLogin(mockConnSuccess);
    expect(message).toBe("Connected to the database!");
  });

  it("should handle the error when connection fails", async () => {
    const errorMessage = await dbLogin(mockConnFail).catch((err) => err);
    expect(errorMessage).toBe("DB connection failed: TEST");
  });
});
