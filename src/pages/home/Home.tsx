import React from "react";
import { Layout } from "../../components/layout";
import { useScreenWidth } from "../../hooks";

export const Home = () => {
  useScreenWidth();
  return (
    <Layout>
      <div>home</div>
    </Layout>
  );
};
