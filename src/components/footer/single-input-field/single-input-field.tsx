import styles from "./single-input-field.module.scss";
import { ReactComponent as ArrowRight2 } from "../../../assets/images/arrowRight2.svg";

export const SingleInputField = () => {
  return (
    <div>
      <div className={styles.container}>
        <input
          className={styles.container_input}
          placeholder="Enter your email"
        ></input>
        <ArrowRight2 className={styles.container_arrow} />
      </div>
    </div>
  );
};
