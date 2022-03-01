import { RequiredFieldError } from "../errors/";
import { RequiredFieldValidation } from "./requiredFieldValidation";
import faker from "@faker-js/faker";

describe("RequireFieldValidation", () => {
  test("Should return error if field is empty", () => {
    const sut = new RequiredFieldValidation("email");
    const error = sut.validate("");
    expect(error).toEqual(new RequiredFieldError());
  });

  test("Should return falsy if field is not empty", () => {
    const sut = new RequiredFieldValidation("email");
    const error = sut.validate(faker.random.word());
    expect(error).toBeFalsy();
  });
});
