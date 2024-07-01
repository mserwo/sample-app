import React from "react";
import { Logo } from "../logo";
import styles from "./header.module.scss";
import { MenuMobile } from "./mobile-menu/mobile-menu";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.buttons}>
          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
          <Link to="/register" className={styles.registerButton}>
            Register
          </Link>
        </div>
        <div className={styles.menuMobile}>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};
