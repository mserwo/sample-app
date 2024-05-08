import React from "react";
import { Logo } from "../logo";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.buttons}>
          <button className={styles.loginButton}>
            <a className={styles.link} href="/login">
              Login
            </a>
          </button>
          <button className={styles.registerButton}>
            <a className={styles.registerButton_a} href="/register">
              Register
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};
