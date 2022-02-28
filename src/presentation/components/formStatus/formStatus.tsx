import React, { useContext } from "react";
import styles from "./formStatusStyles.scss";
import Spinner from "@/presentation/components/spinner/spinner";
import Context from "@/presentation/components/context/form/formContext";

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context);

  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {state.isLoading && <Spinner className={styles.spinner} />}
      {errorState.main && (
        <span className={styles.error}>{errorState.main}</span>
      )}
    </div>
  );
};

export default FormStatus;
