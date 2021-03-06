import { FieldValidationSpy } from "@/validation/test/mockFieldValidation";
import { ValidationComposite } from "./validationComposite";
import faker from "@faker-js/faker";
import { ValidationBuilder as Builder } from "../builder/validationBuilder";

type SutTypes = {
  sut: ValidationComposite;
  fieldValidationsSpy: FieldValidationSpy[];
};

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName),
  ];
  const sut = ValidationComposite.build([
    ...Builder.field("email").required().email().build(),
    ...Builder.field("password").required().email().build(),
  ]);
  return {
    sut,
    fieldValidationsSpy,
  };
};

describe("ValidationComposite", () => {
  test("Should return error if any validation fails", () => {
    const fieldName = faker.database.column();
    const { sut, fieldValidationsSpy } = makeSut(fieldName);
    const errorMessage = faker.random.words();
    fieldValidationsSpy[0].error = new Error(errorMessage);
    fieldValidationsSpy[1].error = new Error(faker.random.words());
    const error = sut.validate(fieldName, faker.random.words());
    expect(error).toBe(error);
  });

  test("Should return error if any validation fails", () => {
    const fieldName = faker.database.column();
    const { sut } = makeSut(fieldName);
    const error = sut.validate(fieldName, faker.random.words());
    expect(error).toBeFalsy();
  });
});
