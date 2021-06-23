const capitalize = require("./capitalize");

test("apple are mean capitalized is Apple are mean", () => {
  expect(capitalize("apple are mean")).toBe("Apple are mean");
});
