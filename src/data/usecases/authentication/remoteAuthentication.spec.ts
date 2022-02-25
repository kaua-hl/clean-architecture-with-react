import { HttpPostClient } from "data/protocols/http/httpPostClient";
import { RemoteAuthentication } from "./remoteAuthentication";

describe("RemoteAuthentication", () => {
  test("Shoud call HttpPostClient with correct URL", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy); //system under test (sut)
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});