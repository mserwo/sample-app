import React from "react";
import { Footer } from "../footer";
import { Header } from "../header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />
      <section
        style={{
          flex: 1,
          margin: "0px auto",
          overflow: "hidden",
          maxWidth: 1120,
        }}
      >
        {children}
      </section>
      <Footer />
    </div>
  );
};
