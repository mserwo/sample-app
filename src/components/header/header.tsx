import React, { useContext, useState } from "react";
import { Logo } from "../logo";
import styles from "./header.module.scss";
import { MenuMobile } from "./mobile-menu/mobile-menu";
import { Link } from "react-router-dom";
import { LanguageContext, UserContext } from "../../App";
import { UserMenu } from "./user-menu/user-menu";

export const Header = () => {
  const { language } = useContext(LanguageContext);
  const { header } = language;
  const { token } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const mockUser = JSON.parse(sessionStorage.getItem("mockUser") || "{}");

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link className={styles.logoLink} to={`/`}>
          <Logo />
        </Link>
        {!(token || mockUser.mockToken) ? (
          <div className={styles.buttonsSection}>
            <div className={styles.buttons}>
              <Link to="/login" className={styles.loginButton}>
                {header.login}
              </Link>
              <Link to="/register" className={styles.registerButton}>
                {header.register}
              </Link>
            </div>
            <div className={styles.menuMobile}>
              <MenuMobile />
            </div>
          </div>
        ) : (
          <div className={styles.menuMobile}>
            <MenuMobile />
          </div>
        )}
      </div>
    </header>
  );
};
