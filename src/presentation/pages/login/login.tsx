import React, { useState } from "react";
import styles from "./loginStyles.scss";
import {
  LoginHeader,
  Input,
  FormStatus,
  Footer,
} from "@/presentation/components/";

import Context from "@/presentation/components/context/form/formContext";

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: "",
  });

  return (
    <div data-testid="error-wrap" className={styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button className={styles.submit} type="submit">
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
