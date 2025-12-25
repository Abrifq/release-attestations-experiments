import { test } from "node:test";
import { deepStrictEqual } from "node:assert/strict"
import { testSwitch } from "./index.js";

test("testSwitch should be on", () => deepStrictEqual(testSwitch(), true, "testSwitch was not on."))