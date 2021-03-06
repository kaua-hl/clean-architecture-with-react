import { ValidationComposite } from "@/validation/validators";
import { ValidationBuilder } from "@/validation/validators/builder/validationBuilder";
import { makeLoginValidation } from "./loginValidation";

describe("LoginValidationFactory", () => {
  test("Should make ValidationComposite with corrrect validations", () => {
    const composite = makeLoginValidation();
    expect(composite).toEqual(
      ValidationComposite.build([
        ...ValidationBuilder.field("email").required().email().build(),
        ...ValidationBuilder.field("password").required().min(5).build(),
      ])
    );
  });
});
