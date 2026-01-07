import React from "react";
import { redirect } from "react-router-dom";
import styles from "./title.layout.green.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const TitleLayoutGreen = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
