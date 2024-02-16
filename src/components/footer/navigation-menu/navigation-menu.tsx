import { ArrowDownSimpleComponent } from "../arrowDownSimple/arrow-down-simple";
import { ArrowUpSimpleComponent } from "../arrowUpSimple/arrow-up-simple";
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
  const [arrow, setArrow] = useState("down");

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
          <div className={styles.img} onClick={() => ArrowChange()}>
            <ArrowDownSimpleComponent task={ArrowChange} id={menuElements} />
          </div>
          <div className={styles.img} onClick={() => ArrowChange()}>
            <ArrowUpSimpleComponent task={ArrowChange} id={menuElements} />
          </div>
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
