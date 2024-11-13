import React, { useContext, useState } from "react";
import { Logo } from "../logo";
import styles from "./header.module.scss";
import { MenuMobile } from "./mobile-menu/mobile-menu";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { UserMenu } from "./user-menu/user-menu";

export const Header = () => {
  const { token, nick } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link className={styles.logoLink} to={`/`}>
          <Logo />
        </Link>
        {!token ? (
          <>
            <div className={styles.buttons}>
              <Link to="/login" className={styles.loginButton}>
                Login
              </Link>
              <Link to="/register" className={styles.registerButton}>
                Register
              </Link>
            </div>

            <div className={styles.menuMobile}>
              <MenuMobile />
            </div>
          </>
        ) : (
          <div className={styles.userMenu}>
            <UserMenu />
          </div>
        )}
      </div>
    </header>
  );
};
