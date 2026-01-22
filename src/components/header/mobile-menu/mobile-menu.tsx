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
    const handlePointerDown = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuLine} onPointerDown={toggleMenu}>
        {isOpen ? null : <MenuLine />}
      </div>

      {isOpen ? (
        <nav ref={menuRef} className={styles.menu}>
          <div className={styles.symbol} onPointerDown={toggleMenu}>
            <Xsymbol className={styles.icon} />
          </div>

          {token || mockUser.mockToken ? (
            <div className={styles.userMenu}>
              <div
                className={styles.userMenu_itemHello}
                onPointerDown={toggleMenu}
              >
                {menu.hello} {mockNick ? mockNick : nick}!
              </div>
              <div
                className={styles.userMenu_item}
                onPointerDown={() => {
                  id ? navigate(`/userpage/${id}`) : navigate(`/userpage/mock`),
                    window.scrollTo(0, 0);
                }}
              >
                {menu.userSettings}
              </div>
              <div className={styles.userMenu_item} onPointerDown={logout}>
                {menu.logOut}
              </div>
            </div>
          ) : null}

          <ul className={styles.pageMenuApp}>
            <li
              onPointerDown={() => {
                navigate("/login");
                window.scrollTo(0, 0);
              }}
            >
              {menu.login}
            </li>
            <li
              onPointerDown={() => {
                navigate("/register");
                window.scrollTo(0, 0);
              }}
            >
              {menu.register}
            </li>
          </ul>
          <ul className={styles.pageMenu}>
            <li
              onPointerDown={() => {
                navigate("/case/register");
                window.scrollTo(0, 0);
              }}
            >
              {menu.useCaseRegister}
            </li>
            <li
              onPointerDown={() => {
                navigate("/case/login");
                window.scrollTo(0, 0);
              }}
            >
              {menu.useCaseLogin}
            </li>
            <li
              onPointerDown={() => {
                navigate("/case/user-panel");
                window.scrollTo(0, 0);
              }}
            >
              {menu.useCaseUserPanel}
            </li>
          </ul>
          <ul className={styles.pageMenu}>
            <li
              onPointerDown={() => {
                navigate("/stack/frontend");
                window.scrollTo(0, 0);
              }}
            >
              {menu.techStackFrontend}
            </li>
            <li
              onPointerDown={() => {
                navigate("/stack/api");
                window.scrollTo(0, 0);
              }}
            >
              {menu.techStackApi}
            </li>
            <li
              onPointerDown={() => {
                navigate("/stack/server");
                window.scrollTo(0, 0);
              }}
            >
              {menu.techStackServer}
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
