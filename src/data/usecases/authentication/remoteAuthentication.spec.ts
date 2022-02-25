import { RemoteAuthentication } from "./remoteAuthentication";
import { HttpPostClientSpy } from "../../test/mockHttpClient";

describe("RemoteAuthentication", () => {
  test("Shoud call HttpPostClient with correct URL", async () => {
    const url = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy); //system under test (sut)
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
