import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { getUserId } from "../../api/fetch-user-id";
import { UserContext } from "../../App";
import { Layout } from "../../components/layout";
import classNames from "classnames";
import styles from "./home.module.scss";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";

interface UserData {
  id: string;
  email: string;
}

export const Home = () => {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const receiveUserData = async () => {
      if (token) {
        try {
          const data = await getUserId(token);
          if (data) {
            setUserData(data);
          }
        } catch (error) {
          console.error("Error fetching user ID", error);
        }
      } else {
        setUserData(null);
      }
    };

    receiveUserData();
  }, [token, navigate]);

  return (
    <Layout>
      <div className={styles.wrapper}>
        {
          userData ? (
            <div className={styles.container}>
              <div className={styles.element}>
                Token: <div className={styles.field}>{token}</div>
              </div>
              <div className={styles.element}>
                Email: <div className={styles.field}> {userData.email}</div>
              </div>
              <div className={styles.buttonContainer}>
                <Link className={styles.button} to={`/userpage/${userData.id}`}>
                  Go to user settings
                </Link>
              </div>
            </div>
          ) : null
          // <div className={styles.containerWelcome}>
          //   <div className={styles.register}>
          //     register to join the community
          //     <Link className={styles.registerButton} to={`/register`}>
          //       Sign up
          //     </Link>
          //   </div>

          //   <div className={styles.login}>
          //     or log in if you have an account
          //     <Link className={styles.loginButton} to={`/login`}>
          //       Sign in
          //     </Link>
          //   </div>
          // </div>
        }
      </div>
      <PageLayout>
        <SectionLayout>tu będzie o mnie</SectionLayout>
        <SectionLayout>tu niestety tez</SectionLayout>
      </PageLayout>
    </Layout>
  );
};
