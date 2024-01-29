import { BottomBar } from "./bottom-bar";
import { TopBar } from "./top-bar";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <TopBar />
        <BottomBar />
      </div>
    </footer>
  );
};
