import { isWorking } from "../public/javascript/components/login";

test("returns true if module is status 200", () => {
  expect(isWorking()).toBe(true);
});
