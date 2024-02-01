import { Logo } from "../../logo";
import styles from "./logo-section.module.scss";

const LogoSection = () => {
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

export default LogoSection;
