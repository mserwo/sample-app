import React from "react";
import { redirect } from "react-router-dom";
import styles from "./section.layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const SectionLayout = ({ children }: LayoutProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
