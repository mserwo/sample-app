import styles from "./crypter-logo-bar.module.scss";

export const CrypterLogoBar = () => {
  return (
    <section className={styles.logoSection}>
      <Logo />
      <p className={styles.logoSection_text}>
        {`The new creative
        Economy.`}
      </p>
    </section>
  );
};
