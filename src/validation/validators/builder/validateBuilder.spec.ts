import { RequiredFieldValidation } from "../requiredField/requiredFieldValidation";
import { ValidationBuilder as sut } from "./validationBuilder";

describe("ValidationBuilder", () => {
  test("Should return RequireFieldValidation", () => {
    const validations = sut.field("any_field").required().build();
    expect(validations).toEqual([new RequiredFieldValidation("any_field")]);
  });
});
