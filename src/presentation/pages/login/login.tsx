import React, { useState, useEffect } from "react";
import styles from "./loginStyles.scss";
import {
  LoginHeader,
  Input,
  FormStatus,
  Footer,
} from "@/presentation/components/";

import Context from "@/presentation/components/context/form/formContext";
import { Validation } from "@/presentation/protocols/validation";

type Props = {
  validation: Validation;
};

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: "",
    emailError: "Campo obrigatório",
    passwordError: "Campo obrigatório",
    mainError: "",
  });

  useEffect(() => {
    validation.validate({ email: state.email });
  }, [state.email]);

  return (
    <div className={styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button
            disabled
            data-testid="submit"
            className={styles.submit}
            type="submit"
          >
            Entrar
          </button>
          <span className={styles.link}>Cadastre-se</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
