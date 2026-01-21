import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./mobile-menu.module.scss";
import MenuLine from "../../../assets/images/Line.svg?react";
import Xsymbol from "@/assets/images/x_symbol.svg?react";
import { UserContext } from "../../../App";

export const MenuMobile = () => {
  const { nick, id, token, setToken } = useContext(UserContext);
  const [login, setLogin] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    console.log("user logout");
    setLogin(false);
    setToken("");
    navigate("/");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const mockUser = JSON.parse(sessionStorage.getItem("mockUser") || "{}");
  const mockNick = mockUser.mockNick;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <MenuLine />
      </div>

      {isOpen ? (
        <nav ref={menuRef} className={styles.menuItems}>
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
              <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => window.scrollTo(0, 0)}>
                Register
              </Link>
            </li>
          </ul>
          <ul className={styles.menuStyle}>
            <li>
              <Link to="/case/register" onClick={() => window.scrollTo(0, 0)}>
                Use Case Register
              </Link>
            </li>
            <li>
              <Link to="/case/login" onClick={() => window.scrollTo(0, 0)}>
                Use Case Login
              </Link>
            </li>
            <li>
              <Link to="/case/login" onClick={() => window.scrollTo(0, 0)}>
                Use Case User Panel
              </Link>
            </li>
          </ul>
          <ul className={styles.menuStyle}>
            <li>
              <Link to="/stack/frontend" onClick={() => window.scrollTo(0, 0)}>
                Tech Stack Frontend
              </Link>
            </li>
            <li>
              <Link to="/stack/api" onClick={() => window.scrollTo(0, 0)}>
                Tech Stack Api
              </Link>
            </li>
            <li>
              <Link to="/stack/server" onClick={() => window.scrollTo(0, 0)}>
                Tech Stack Server
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
