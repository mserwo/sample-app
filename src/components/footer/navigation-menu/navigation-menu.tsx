import styles from "./navigation-menu.module.scss";

interface NavigationMenuProps {
  title: string;
  menuElements: { title: string; url: string }[];
}

export const NavigationMenu = ({
  title,
  menuElements,
}: NavigationMenuProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>{title}</div>
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
