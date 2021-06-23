const Calculator = require("./calculator");

test("2+2 is 4", () => {
  expect(Calculator.add(2, 2)).toBe(4);
});

test("2-2 is 0", () => {
  expect(Calculator.subtract(2, 2)).toBe(0);
});

test("2*7 is 14", () => {
  expect(Calculator.multiply(2, 7)).toBe(14);
});

test("2/2 is 1", () => {
  expect(Calculator.divide(2, 2)).toBe(1);
});
