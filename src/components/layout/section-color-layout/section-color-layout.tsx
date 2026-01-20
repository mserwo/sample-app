import React from "react";
import { redirect } from "react-router-dom";
import styles from "./section.color.layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const SectionColorLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
