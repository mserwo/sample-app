import React, { useState } from "react";
import styles from "./mobile-menu.module.scss";
import MenuLine from "../../../assets/images/Line.svg?react";

export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <MenuLine />
      </div>

      {isOpen ? (
        <nav className={styles.menuItems}>
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
