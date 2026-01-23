import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./mobile-menu.module.scss";
import MenuLine from "../../../assets/images/Line.svg?react";
import Xsymbol from "@/assets/images/x_symbol.svg?react";
import { LanguageContext, UserContext } from "../../../App";
import FlagPl from "@/assets/images/flag_pl.svg?react";
import FlagEngl from "@/assets/images/flag_engl.svg?react";

export const MenuMobile = () => {
  const { language, toggleLang } = useContext(LanguageContext);
  const [currentLang, setCurrentLang] = useState<"pl" | "en">("pl");
  const { menu } = language;
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

  useEffect(() => {
    const langFromSession = sessionStorage.getItem("lang") as "pl" | "en";
    if (langFromSession) setCurrentLang(langFromSession);
  }, []);

  const handleToggleLang = () => {
    toggleLang();
    setCurrentLang((prev) => (prev === "pl" ? "en" : "pl"));
  };

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
              <div className={styles.userMenu_itemHello}>
                {menu.hello} {mockNick ? mockNick : nick}!
              </div>
              <div
                className={styles.userMenu_item}
                onClick={() => {
                  id ? navigate(`/userpage/${id}`) : navigate(`/userpage/mock`),
                    window.scrollTo(0, 0);
                  toggleMenu();
                }}
              >
                {menu.userSettings}
              </div>
              <div className={styles.userMenu_item} onClick={logout}>
                {menu.logOut}
              </div>
            </div>
          ) : null}

          <ul className={styles.pageMenuApp}>
            <li
              onClick={() => {
                toggleMenu();
                navigate("/login");
                window.scrollTo(0, 0);
              }}
            >
              {menu.login}
            </li>
            <li
              onClick={() => {
                toggleMenu();
                navigate("/register");
                window.scrollTo(0, 0);
              }}
            >
              {menu.register}
            </li>
          </ul>
          <ul className={styles.pageMenu}>
            <li
              onClick={() => {
                toggleMenu();
                navigate("/case/register");
                window.scrollTo(0, 0);
              }}
            >
              {menu.useCaseRegister}
            </li>
            <li
              onClick={() => {
                toggleMenu();
                navigate("/case/login");
                window.scrollTo(0, 0);
              }}
            >
              {menu.useCaseLogin}
            </li>
            <li
              onClick={() => {
                toggleMenu();
                navigate("/case/user-panel");
                window.scrollTo(0, 0);
              }}
            >
              {menu.useCaseUserPanel}
            </li>
          </ul>
          <ul className={styles.pageMenu}>
            <li
              onClick={() => {
                toggleMenu();
                navigate("/stack/frontend");
                window.scrollTo(0, 0);
              }}
            >
              {menu.techStackFrontend}
            </li>
            <li
              onClick={() => {
                toggleMenu();
                navigate("/stack/api");
                window.scrollTo(0, 0);
              }}
            >
              {menu.techStackApi}
            </li>
            <li
              onClick={() => {
                toggleMenu();
                navigate("/stack/server");
                window.scrollTo(0, 0);
              }}
            >
              {menu.techStackServer}
            </li>
          </ul>
          <div className={styles.languageSwitcher}>
            <div className={styles.languageSwitcher_text}>{menu.language}</div>
            {currentLang === "pl" ? (
              <FlagEngl
                className={styles.languageSwitcher_icon}
                onClick={handleToggleLang}
              />
            ) : (
              <FlagPl
                className={styles.languageSwitcher_icon}
                onClick={handleToggleLang}
              />
            )}
          </div>
        </nav>
      ) : null}
    </div>
  );
};
