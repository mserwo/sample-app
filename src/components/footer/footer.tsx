import styles from "./footer.module.scss";
import { BottomBar } from "./bottom-bar/bottom-bar";
import LogoSection from "./logo-section/logo-section";
import { NavigationMenu } from "./navigation-menu/navigation-menu";

const menu1items = [
  { title: "Discover", url: "/discover" },
  { title: "Connect wallet", url: "/connect-wallet" },
  { title: "Create item", url: "/create-item" },
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
          <NavigationMenu title={"Stacks"} menuElements={menu1items} />
          <NavigationMenu title={"Info"} menuElements={menu2items} />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
};
