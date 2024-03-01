import styles from "./single-input-field.module.scss";
import { ReactComponent as ArrowRight2 } from "../../../assets/images/arrowRight2.svg";
import { useState } from "react";

interface InputAnswerProps {
  errorText: string;
  correctText: string;
}

export const SingleInputField = ({
  errorText,
  correctText,
}: InputAnswerProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [isArrowClick, setIsArrowClick] = useState(false);

  const handleEmailButton = () => {
    inputValue.length === 0
      ? setError(true)
      : (setError(false), setInputValue(""));
    setIsArrowClick(true);
  };

  return (
    <div>
      <div
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className={styles.container_input}
          placeholder="Enter your email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <ArrowRight2
          className={styles.container_arrow}
          onClick={handleEmailButton}
        />
      </div>
      <div className={styles.inputAnswer}>
        {isArrowClick ? (
          error ? (
            <div className={styles.inputAnswer_error}>{errorText}</div>
          ) : (
            <div className={styles.inputAnswer_correct}>{correctText}</div>
          )
        ) : null}
      </div>
    </div>
  );
};
