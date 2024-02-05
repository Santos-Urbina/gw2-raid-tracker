const sum = require("./testTest");

test("testing the test", () => {
  const sumTest = sum(3, 4);

  expect(sumTest).toBe(7);
});
