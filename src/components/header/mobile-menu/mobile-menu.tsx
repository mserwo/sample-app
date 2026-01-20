import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./mobile-menu.module.scss";
import MenuLine from "../../../assets/images/Line.svg?react";
import Xsymbol from "@/assets/images/x_symbol.svg?react";
import { UserContext } from "../../../App";

export const MenuMobile = () => {
  const { nick, id, token, setToken } = useContext(UserContext);
  const [login, setLogin] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => setIsOpen(!isOpen);

  const mockUser = JSON.parse(sessionStorage.getItem("mockUser") || "{}");
  const mockNick = mockUser.mockNick;

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <MenuLine />
      </div>

      {isOpen ? (
        <nav className={styles.menuItems}>
          <div className={styles.symbol} onClick={toggleMenu}>
            <Xsymbol className={styles.xSymbol} />
          </div>

          {token || mockUser.mockToken ? (
            <div className={styles.userMenu}>
              <div className={styles.userMenu_itemHello} onClick={toggleMenu}>
                Hello {mockNick ? mockNick : nick}!
              </div>
              <div>
                <Link
                  to={id ? `/userpage/${id}` : `/userpage/mock`}
                  onClick={() => window.scrollTo(0, 0)}
                  className={styles.userMenu_item}
                >
                  Go to user settings
                </Link>
              </div>
              <div className={styles.userMenu_item} onClick={logout}>
                log out
              </div>
            </div>
          ) : null}

          <ul className={styles.menuStyleMain}>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <ul className={styles.menuStyle}>
            <li>
              <Link to="/case/register">Use Case Register</Link>
            </li>
            <li>
              <Link to="/case/login">Use Case Login</Link>
            </li>
            <li>
              <Link to="/case/login">Use Case User Panel</Link>
            </li>
          </ul>
          <ul className={styles.menuStyle}>
            <li>
              <Link to="/stack/frontend">Tech Stack Frontend</Link>
            </li>
            <li>
              <Link to="/stack/api">Tech Stack Api</Link>
            </li>
            <li>
              <Link to="/stack/server">Tech Stack Server</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
