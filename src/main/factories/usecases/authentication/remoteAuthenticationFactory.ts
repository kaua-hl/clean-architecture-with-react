import { RemoteAuthentication } from "@/data/usecases/authentication/remoteAuthentication";
import { Authentication } from "@/domain/usercases";
import { makeApiUrl } from "../../http/apiUrlFactory";
import { makeAxiosHttpClient } from "../../http/axiosHttpClientFactory";

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl("/login"), makeAxiosHttpClient());
};
