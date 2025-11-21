import { Logo } from "../../logo";
import styles from "./logo-section.module.scss";

const LogoSection = () => {
  return (
    <section className={styles.logoSection}>
      <Logo />
      <p className={styles.logoSection_text}>{`React Developer`}</p>
    </section>
  );
};

export default LogoSection;
