import { vi } from "vitest";

export const mockConnSuccess = {
  connect: vi.fn((cb) => cb())
};

export const mockConnFail = {
  connect: vi.fn((cb) => {
    const err = { stack: "TEST" };
    cb(err);
  })
};

export const mockQuery = {
  query: vi.fn((sql, values, cb) => {
    cb(null, { test: "DATA" });
  })
};

export const mockQueryError = {
  query: vi.fn((sql, values, cb) => {
    cb("SOME ERROR", null);
  })
};
