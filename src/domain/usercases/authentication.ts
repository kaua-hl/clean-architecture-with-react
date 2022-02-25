import { AccountModel } from "../models/accountModel";

export type AuthenticationParams = {
  email: string | any;
  password: string | any;
};

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>;
}
