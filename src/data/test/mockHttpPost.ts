import { HttpPostParams } from "../protocols/http";
import faker from "@faker-js/faker";

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement, // Em caso de falha, adicionar a chamada do method
});
