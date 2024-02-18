import styles from "./navigation-menu.module.scss";
import { useState } from "react";
import { ReactComponent as ArrowDownSimpleIcon } from "../../../assets/images/arrowDownSimple.svg";
import { ReactComponent as ArrowUpSimpleIcon } from "../../../assets/images/arrowUpSimple.svg";
import classNames from "classnames";

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

  const ArrowChange = () => {
    setIsArrowDownClick(!isArrowDownClick);
    {
      !isArrowDownClick
        ? (console.log("zwijam menu"), setIsRollUp(true))
        : (console.log("rozwijam menu"), setIsRollUp(false));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <div className={styles.container_title}>{title}</div>
        <div className={styles.container_arrow}>
          <div className={styles.img} onClick={ArrowChange}>
            {isArrowDownClick ? <ArrowUpSimpleIcon /> : <ArrowDownSimpleIcon />}
          </div>
        </div>
      </div>
      <ul
        className={classNames(styles.container_menu, {
          [styles.container_menu_hide]: isRollUp,
        })}
      >
        {menuElements.map((item) => (
          <li>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
