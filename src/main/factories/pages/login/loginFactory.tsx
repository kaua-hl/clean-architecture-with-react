import React from "react";
import { Login } from "@/presentation/pages/";
import { makeRemoteAuthentication } from "../../usecases/authentication/remoteAuthenticationFactory";
import { makeLoginValidation } from "./loginValidation";

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  );
};
