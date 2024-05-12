import React from "react";
import { Logo } from "../logo";
import styles from "./header.module.scss";
import { MenuMobile } from "./mobile-menu/mobile-menu";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.buttons}>
          <button className={styles.loginButton}>
            <a className={styles.loginButtonLink} href="/login">
              Login
            </a>
          </button>
          <button className={styles.registerButton}>
            <a className={styles.registerButtonLink} href="/register">
              Register
            </a>
          </button>
        </div>
        <div className={styles.menuMobile}>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};
