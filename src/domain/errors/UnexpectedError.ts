export class UnexpectedError extends Error {
  constructor() {
    super("Opps, Something went wrong. Try again later");
    this.name = "UnexpectedError";
  }
}
