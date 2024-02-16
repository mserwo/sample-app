import { ArrowDownSimple } from "../arrowDownSimple/arrow-down-simple";
import { ArrowUpSimple } from "../arrowUpSimple/arrow-up-simple";
import styles from "./navigation-menu.module.scss";
import { useState } from "react";

interface NavigationMenuProps {
  title: string;
  menuElements: { title: string; url: string }[];
}

export const NavigationMenu = ({
  title,
  menuElements,
}: NavigationMenuProps) => {
  const [arrow, setArrow] = useState<string>("down");

  const ArrowChange = (id) => {
    console.log(id);
    setArrow("up");
    console.log(arrow);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <div className={styles.container_title}>{title}</div>
        <div className={styles.container_arrow}>
          <ArrowDownSimple task={ArrowChange} id={menuElements} />
          <ArrowUpSimple />
          {arrow}
        </div>
      </div>

      <ul className={styles.container_menu}>
        {menuElements.map((item) => (
          <li>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
