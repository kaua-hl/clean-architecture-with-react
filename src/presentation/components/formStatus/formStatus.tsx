import React from "react";
import styles from "./formStatusStyles.scss";
import Spinner from "@/presentation/components/spinner/spinner";

const FormStatus: React.FC = () => {
  return (
    <div className={styles.errorWrap}>
      <Spinner className={styles.spinner} />
      <span className={styles.error}>Error</span>
    </div>
  );
};

export default FormStatus;
