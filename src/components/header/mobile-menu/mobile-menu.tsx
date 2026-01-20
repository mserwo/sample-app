import React, { useState } from "react";
import { Link } from "react-router-dom";
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
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
