import { RequiredFieldError } from "../errors/";
import { RequiredFieldValidation } from "./requiredFieldValidation";

describe("RequireFieldValidation", () => {
  test("Should return error if field is empty", () => {
    const sut = new RequiredFieldValidation("email");
    const error = sut.validate("");
    expect(error).toEqual(new RequiredFieldError());
  });
});
