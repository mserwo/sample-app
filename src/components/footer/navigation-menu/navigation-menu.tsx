import styles from "./navigation-menu.module.scss";
import { useState } from "react";
import { ReactComponent as ArrowDownSimpleIcon } from "../../../assets/images/arrowDownSimple.svg";

import classNames from "classnames";
import { useScreenWidth } from "../../../hooks";

interface NavigationMenuProps {
  title: string;
  menuElements: { title: string; url: string }[];
}

export const NavigationMenu = ({
  title,
  menuElements,
}: NavigationMenuProps) => {
  const [isArrowDownClick, setIsArrowDownClick] = useState(false);
  const [isRollUp, setIsRollUp] = useState(false);

  const isMobile = useScreenWidth() < 768;

  const handleArrowChange = () => {
    setIsArrowDownClick(!isArrowDownClick);
    setIsRollUp(!isRollUp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <div className={styles.container_title}>{title}</div>
        <div className={styles.container_arrow}>
          <div
            className={styles.imgContainer}
            style={{
              transform: `rotate(${isRollUp ? 180 : 0}deg)`,
              transition: "transform 0.25s",
            }}
            onClick={handleArrowChange}
          >
            <ArrowDownSimpleIcon className={styles.img} />
          </div>
        </div>
      </div>
      <ul
        className={classNames(styles.container_menu, {
          [styles.container_menu_hide]: isRollUp && isMobile,
        })}
      >
        {menuElements.map((item) => (
          <li key={item.title + item.url}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
