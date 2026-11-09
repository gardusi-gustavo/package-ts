import assert from "node:assert/strict";
import { test } from "node:test";
import { formatCount } from "../text.js";

test("formatCount groups thousands", () => {
  assert.equal(formatCount(1234), "1,234");
});
