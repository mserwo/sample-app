import styles from "./footer.module.scss";
import { Logo } from "../logo";
import { BottomBar } from "./bottom-bar";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.logoSection}>
          <Logo />
          <p className={styles.logoSection_text}>
            {`The new creative
            Economy.`}
          </p>
        </section>
        <BottomBar />
      </div>
    </footer>
  );
};
