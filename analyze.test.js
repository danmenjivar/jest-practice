const analyze = require("./analyze");

const array = [1, 8, 3, 4, 2, 6];

const expectation = { average: 4, min: 1, max: 8, length: 6 };

test("Analyzing array", () => {
  expect(analyze(array)).toStrictEqual(expectation);
});
