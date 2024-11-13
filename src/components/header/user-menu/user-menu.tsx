import React, { useContext, useEffect, useState } from "react";
import styles from "./user-menu.module.scss";
import { ReactComponent as MenuLine } from "../../../assets/images/Line.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import { getUserId } from "../../../api";

export const UserMenu = () => {
  const { token, nick } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const logout = () => {
    sessionStorage.clear();
  };

  return (
    <div className={styles.mobileContainer}>
      <div className={styles.userMenu}>
        <button onClick={toggleMenu}>Hello {nick}!</button>
      </div>

      {isOpen ? (
        <nav className={styles.navigationContainer}>
          <ul className={styles.buttons}>
            <li>
              <Link className={styles.item} to={`/userpage/`}>
                Go to user settings
              </Link>
            </li>
            <li>
              <div className={styles.item} onClick={logout}>
                log out
              </div>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
