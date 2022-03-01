export class RequiredFieldError extends Error {
  constructor() {
    super("Campo obrigado");
    this.name = "RequiredFieldError";
  }
}
