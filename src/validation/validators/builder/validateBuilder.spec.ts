import {
  RequiredFieldValidation,
  EmailValidation,
  MinLengthValidation,
} from "@/validation/validators";
import { ValidationBuilder as sut } from "./validationBuilder";
import faker from "@faker-js/faker";

describe("ValidationBuilder", () => {
  test("Should return RequireFieldValidation", () => {
    const field = faker.database.column();
    const validations = sut.field(field).required().build();
    expect(validations).toEqual([new RequiredFieldValidation(field)]);
  });

  test("Should return EmailValidation", () => {
    const field = faker.database.column();
    const validations = sut.field(field).email().build();
    expect(validations).toEqual([new EmailValidation(field)]);
  });

  test("Should return EmailValidation", () => {
    const field = faker.database.column();
    const length = faker.random.number();
    const validations = sut.field(field).min(length).build();
    expect(validations).toEqual([new MinLengthValidation(field, length)]);
  });

  test("Should return a list of validations", () => {
    const field = faker.database.column();
    const length = faker.random.number({ min: 5 });
    const validations = sut.field(field).required().min(length).email().build();
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field),
    ]);
  });
});
