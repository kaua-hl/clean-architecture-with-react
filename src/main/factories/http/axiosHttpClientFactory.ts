import { AxiosHttpClient } from "@/infrastructure/htpp/axiosHttpClient/axiosHttpClient";

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};
