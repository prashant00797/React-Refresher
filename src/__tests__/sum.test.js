import { sum } from "../dummy/sum";

test("sum function should calculate", () => {
  const result = sum(3, 4);

  //assertion
  expect(result).toBe(7);
});
