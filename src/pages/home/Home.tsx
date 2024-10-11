import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { getUserId } from "../../api/fetch-user-id";
import { UserContext } from "../../App";
import { Layout } from "../../components/layout";
import classNames from "classnames";
import styles from "./home.module.scss";

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
        // navigate("/login");
      }
    };

    receiveUserData();
  }, [token, navigate]);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.header}>You are logged in!</div>
        {userData ? (
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
        ) : (
          <div className={styles.loading}>Loading user data...</div>
        )}
      </div>
    </Layout>
  );
};
