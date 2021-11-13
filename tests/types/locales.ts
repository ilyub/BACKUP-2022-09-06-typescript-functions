import * as is from "@/guards";
import { LocaleNameVO } from "@/types/locales";

it("LocaleNameVO", () => {
  expect(is.enumeration("en-US", LocaleNameVO)).toBeTrue();
  expect(is.enumeration(1, LocaleNameVO)).toBeFalse();
});
