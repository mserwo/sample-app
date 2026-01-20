import React from "react";
import styles from "./text.layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const TextLayout = ({ children }: LayoutProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
