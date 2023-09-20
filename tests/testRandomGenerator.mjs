import { test } from "./testFramework.mjs";
import { createRandomNumber } from "../randomUtil.mjs";

test(() => {
  createRandomNumber();
  return true;
}, "Creating random number");

test(() => {
  return typeof createRandomNumber() === "number";
}, "number is returned ");

function test_doesFunctionReturnValuesBetweent() {
  const min = 0;
  const max = 10;

  for (let i = 0; i < 10000; i++) {
    const result = createRandomNumber();
    if (result > max || result < min) {
      return false;
    }
  }

  return true;
}

test(test_doesFunctionReturnValuesBetweent, "Values fall within limits");
