"use strict";
const src = require("../src/add");

describe("add()", () => {
  test("add works", () => {
    expect(src.add(1, 2)).toBe(3);
  });
});
