import React, { useContext } from "react";
import styles from "./formStatusStyles.scss";
import Spinner from "@/presentation/components/spinner/spinner";
import Context from "@/presentation/components/context/form/formContext";

const FormStatus: React.FC = () => {
  const { state } = useContext(Context);

  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {state.isLoading && <Spinner className={styles.spinner} />}
      {state.main && (
        <span data-testid="mainError" className={styles.error}>
          {state.main}
        </span>
      )}
    </div>
  );
};

export default FormStatus;
