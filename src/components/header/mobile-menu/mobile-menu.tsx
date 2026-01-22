import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./mobile-menu.module.scss";
import MenuLine from "../../../assets/images/Line.svg?react";
import Xsymbol from "@/assets/images/x_symbol.svg?react";
import { LanguageContext, UserContext } from "../../../App";

export const MenuMobile = () => {
  const { menu } = useContext(LanguageContext);
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
    <div className={styles.wrapper}>
      <div className={styles.menuLine} onClick={toggleMenu}>
        {isOpen ? null : <MenuLine />}
      </div>

      {isOpen ? (
        <nav ref={menuRef} className={styles.menu}>
          <div className={styles.symbol} onClick={toggleMenu}>
            <Xsymbol className={styles.icon} />
          </div>

          {token || mockUser.mockToken ? (
            <div className={styles.userMenu}>
              <div className={styles.userMenu_itemHello} onClick={toggleMenu}>
                {menu.hello} {mockNick ? mockNick : nick}!
              </div>
              <div>
                <Link
                  to={id ? `/userpage/${id}` : `/userpage/mock`}
                  onClick={() => window.scrollTo(0, 0)}
                  className={styles.userMenu_item}
                >
                  {menu.userSettings}
                </Link>
              </div>
              <div className={styles.userMenu_item} onClick={logout}>
                {menu.logOut}
              </div>
            </div>
          ) : null}

          <ul className={styles.pageMenuApp}>
            <li>
              <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
                {menu.login}
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => window.scrollTo(0, 0)}>
                {menu.register}
              </Link>
            </li>
          </ul>
          <ul className={styles.pageMenu}>
            <li>
              <Link to="/case/register" onClick={() => window.scrollTo(0, 0)}>
                {menu.useCaseRegister}
              </Link>
            </li>
            <li>
              <Link to="/case/login" onClick={() => window.scrollTo(0, 0)}>
                {menu.useCaseLogin}
              </Link>
            </li>
            <li>
              <Link to="/case/login" onClick={() => window.scrollTo(0, 0)}>
                {menu.useCaseUserPanel}
              </Link>
            </li>
          </ul>
          <ul className={styles.pageMenu}>
            <li>
              <Link to="/stack/frontend" onClick={() => window.scrollTo(0, 0)}>
                {menu.techStackFrontend}
              </Link>
            </li>
            <li>
              <Link to="/stack/api" onClick={() => window.scrollTo(0, 0)}>
                {menu.techStackApi}
              </Link>
            </li>
            <li>
              <Link to="/stack/server" onClick={() => window.scrollTo(0, 0)}>
                {menu.techStackServer}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
