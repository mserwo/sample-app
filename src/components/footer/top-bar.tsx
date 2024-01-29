import styles from "./top-bar.module.scss";
import { Logo } from "../logo";
import { CrypterLogoBar } from "./crypter-logo-bar";
import { CrypterBar } from "./crypter-bar";
import { InfoBar } from "./info-bar";
import { NewsLttrBar } from "./news-letter-bar";

export const TopBar = () => {
  return (
    <div className={styles.containerElements}>
      <CrypterLogoBar />
      <CrypterBar />
      <InfoBar />
      <NewsLttrBar />
    </div>
  );
};
