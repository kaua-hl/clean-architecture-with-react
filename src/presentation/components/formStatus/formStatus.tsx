import React, { useContext } from "react";
import styles from "./formStatusStyles.scss";
import Spinner from "@/presentation/components/spinner/spinner";
import Context from "@/presentation/components/context/form/formContext";

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context);

  return (
    <div className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default FormStatus;
