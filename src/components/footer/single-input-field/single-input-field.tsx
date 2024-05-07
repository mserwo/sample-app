import styles from "./single-input-field.module.scss";
import { ReactComponent as ArrowRight2 } from "../../../assets/images/arrowRight2.svg";
import { useState } from "react";

import cn from "classnames";

interface InputAnswerProps {
  errorText: string;
  onHandleSubmit: (value: string) => void;
}

export const SingleInputField = ({
  errorText,
  onHandleSubmit,
}: InputAnswerProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (inputValue.length === 0) {
      setError(errorText);
      return;
    }

    setError("");
    setInputValue("");
    onHandleSubmit(inputValue);
  };

  return (
    <div>
      <div className={styles.container}>
        <input
          className={styles.container_input}
          placeholder="Enter your email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <ArrowRight2
          data-testid={"newsletter-btn"}
          className={styles.container_arrow}
          onClick={handleSubmit}
        />
      </div>
      <div className={styles.inputAnswer}>
        <div className={cn(styles.inputAnswer_error)}>{error}</div>
      </div>
    </div>
  );
};
