import styles from "./single-input-field.module.scss";
import { ReactComponent as ArrowRight2 } from "../../../assets/images/arrowRight2.svg";
import { useState } from "react";

export const SingleInputField = () => {
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
      <div className={styles.container} onSubmit={() => {}}>
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
            <div className={styles.inputAnswer_error}>
              The field cannot be empty
            </div>
          ) : (
            <div className={styles.inputAnswer_correct}>
              Thank you! Your email address has been successfully saved.
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};
