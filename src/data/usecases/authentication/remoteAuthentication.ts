import { HttpStatusCode } from "@/data/protocols/http/httpResponse";
import { InvalidCredentialError } from "@/domain/error/invalidCredentialsError";
import { UnexpectedError } from "@/domain/error/UnexpectedError copy";
import { AccountModel } from "@/domain/models/accountModel";
import { AuthenticationParams } from "../../../domain/usercases/authentication";
import { HttpPostClient } from "../../protocols/http/httpPostClient";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialError();
      default:
        throw new UnexpectedError();
    }
  }
}
