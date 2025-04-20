import { describe, it, expect, vi, beforeEach } from "vitest";
import { dbLogin, handleQuery } from "../db/index";
import { mockConnSuccess, mockConnFail, mockQuery, mockQueryError } from "../__mocks__/db/index"; 

beforeEach(() => {
  vi.clearAllMocks();
});


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

describe("handleQuery", ()=>{
  it("should return data", async()=>{
    const sql = "Mock SQL"
    const values = ["mock", "values"]
    const mockResults = await handleQuery(sql, values, mockQuery) 
    const output = {test: "DATA"}
    expect(mockResults).toStrictEqual(output)
  })

  it("should reject on query error", async () => {
    const sql = "Bad SQL";
    const values = ["mock", "values"];

    await expect(handleQuery(sql, values, mockQueryError)).rejects.toBe("Query error: SOME ERROR");
  });
})