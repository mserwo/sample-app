import React from "react";
import { redirect } from "react-router-dom";
import styles from "./title.layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const TitleLayout = ({ children }: LayoutProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
