import React, { useContext, useEffect, useState } from "react";
import styles from "./user-menu.module.scss";
import MenuLine from "../../../assets/images/Line.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import { getUserId } from "../../../api";

export const UserMenu = () => {
  const { nick, id, setToken } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [login, setLogin] = useState<boolean>(true);

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    console.log("user logout");
    setLogin(false);
    setToken("");

    if (window.location.origin === "http://localhost:5173") {
      navigate("/");
    }
  };

  const mockUser = JSON.parse(sessionStorage.getItem("mockUser") || "{}");

  const mockNick = mockUser.mockNick;

  return (
    <div className={styles.mobileContainer}>
      <div className={styles.userMenu}>
        <button onClick={toggleMenu}>
          Hello {mockNick ? mockNick : nick}!
        </button>
      </div>

      {isOpen ? (
        <nav className={styles.navigationContainer}>
          <ul className={styles.buttons}>
            <li>
              <Link
                className={styles.item}
                to={id ? `/userpage/${id}` : `/userpage/mock`}
                onClick={() => window.scrollTo(0, 0)}
              >
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
