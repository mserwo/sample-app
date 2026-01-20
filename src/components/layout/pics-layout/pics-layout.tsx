import React from "react";
import styles from "./pics.layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const PicsLayout = ({ children }: LayoutProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
