import styles from "./navigation-menu.module.scss";
import { useState } from "react";
import ArrowDownSimpleIcon from "@/assets/images/arrowDownSimple.svg?react";
import cn from "classnames";
import { useScreenWidth } from "../../../hooks";
import { Link } from "react-router-dom"; // dodane

interface MenuElement {
  title: string;
  url: string;
  external?: boolean;
  icon?: React.ReactNode;
}

type NavigationVariant = "useCase" | "techStack" | "contact";

interface NavigationMenuProps {
  title: string;
  menuElements: MenuElement[];
  variant: NavigationVariant;
}

export const NavigationMenu = ({
  title,
  menuElements,
  variant,
}: NavigationMenuProps) => {
  const [isRollUp, setIsRollUp] = useState(false);
  const isMobile = useScreenWidth() < 768;

  const handleArrowChange = () => {
    setIsRollUp(!isRollUp);
  };

  return (
    <div className={cn(styles.container, styles[`container--${variant}`])}>
      <div className={styles.container_top} onClick={handleArrowChange}>
        <div className={styles.container_title}>{title}</div>
        <div
          className={cn(styles.arrowContainer, {
            [styles.arrowContainer_rotated]: isRollUp,
          })}
        >
          <ArrowDownSimpleIcon className={styles.img} />
        </div>
      </div>

      <ul
        className={cn(styles.container_menu, {
          [styles.container_menu_hide]: isRollUp && isMobile,
        })}
      >
        {menuElements.map((item) => (
          <li key={item.title + item.url}>
            <Link
              to={item.url}
              className={styles.link}
              onClick={() => window.scrollTo(0, 0)}
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
