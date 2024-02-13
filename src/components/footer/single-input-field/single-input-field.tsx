import styles from "./single-input-field.module.scss";

export const SingleInputField = () => {
  return (
    <div className={styles.container}>
      <input className={styles.container_input}></input>
      <button className={styles.container_button}></button>
    </div>
  );
};
