import styles from "./crypter-bar.module.scss";

export const CrypterBar = () => {
  return (
    <div className={styles.containerCr}>
      <p className={styles.containerCr}></p>
      <div className={styles.containerCrText}>
        <ul>
          <li>Discover</li>
          <li>Connect wallet</li>
          <li>Create item</li>
        </ul>
      </div>
    </div>
  );
};
