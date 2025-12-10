import styles from "./footer.module.scss";
import { BottomBar } from "./bottom-bar/bottom-bar";
import LogoSection from "./logo-section/logo-section";
import { NavigationMenu } from "./navigation-menu/navigation-menu";
import { JoinNewsletter } from "./join-newsletter/join-newsletter";

const menu1items = [
  { title: "Register", url: "/case/register" },
  { title: "Login", url: "/case/login" },
  { title: "User panel", url: "/case/user-panel" },
];

const menu2items = [
  { title: "Download", url: "/download" },
  { title: "Demos", url: "/demos" },
  { title: "Support", url: "/support" },
];

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <LogoSection />
          <NavigationMenu title={"Use Case"} menuElements={menu1items} />
          <NavigationMenu title={"Tech Stack"} menuElements={menu2items} />
          <JoinNewsletter />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
};
