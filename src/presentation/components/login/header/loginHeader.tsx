import React, { memo } from "react";
import styles from "./loginHeaderStyles.scss";
import Logo from "../../logo/logo";

const LoginHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
  );
};

export default memo(LoginHeader);
