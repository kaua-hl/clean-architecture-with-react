import { AuthenticationParams } from "../usercases/authentication";
import { AccountModel } from "../models/accountModel";
import faker from "@faker-js/faker";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email,
  password: faker.internet.password,
});

export const mockAccountModel = (): AccountModel => ({
  acessToken: faker.random.uuid(),
});
