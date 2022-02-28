import React, { useContext } from "react";
import styles from "./inputStyles.scss";
import Context from "@/presentation/components/context/form/formContext";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context);
  const error = errorState[props.name];

  const getStatus = (): string => {
    return "🔴";
  };

  const getTitle = (): string => {
    return error;
  };

  return (
    <div className={styles.inputWrap}>
      <input {...props} />
      <span
        data-testid={`${props.name}Status`}
        title={getTitle()}
        className={styles.status}
      >
        {getStatus()}
      </span>
    </div>
  );
};

export default Input;
