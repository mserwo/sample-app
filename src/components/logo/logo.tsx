import logo from "../../assets/images/logo.png";
import styles from "./logo.module.scss";

export const Logo = ({ text = "crypter" }: { text?: string }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={logo}></img>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
