import styles from "./footer.module.scss";
import { BottomBar } from "./bottom-bar/bottom-bar";
import LogoSection from "./logo-section/logo-section";
import { NavigationMenu } from "./navigation-menu/navigation-menu";
import { JoinNewsletter } from "./join-newsletter/join-newsletter";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <LogoSection />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
};
