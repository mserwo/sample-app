import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { getUserId } from "../../api/fetch-user-id";
import { UserContext } from "../../App";
import { Layout } from "../../components/layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { SectionColorLayout } from "../../components/layout/section-color-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";
import classNames from "classnames";
import styles from "./home.module.scss";
import { PageLayout } from "../../components/layout/page-layout";

import FlagPl from "@/assets/images/flag_pl.svg?react";
import FlagEngl from "@/assets/images/flag_engl.svg?react";
import MsPhoto from "@/assets/images/MS.png";

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
        ) : null}
      </div>
      {/* <div className={styles.flagContainer}>
        <div className={styles.flag}>
          <FlagPl />
        </div>
        <div className={styles.flag}>
          <FlagEngl />
        </div>
      </div> */}

      <SectionLayout>
        <TextLayout>
          <div className={styles.meText}>
            loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren
            ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
            loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren
            ipsum loren ipsum loren ipsum loren ipsum loren ipsum
          </div>
        </TextLayout>
        <PicsLayout>
          <img
            className={styles.mePic}
            src={MsPhoto}
            alt="Marcin Serwotka photo"
          />
        </PicsLayout>
      </SectionLayout>

      <div className={styles.appContainer}>opis apki</div>
      <div className={styles.useCaseContainer}>panel use case</div>
      <div className={styles.useCaseElements}>kafelki use case</div>
      <div className={styles.techStackContainer}>panel tech stack</div>
      <div className={styles.techStackElements}>kafelki tech stack</div>
    </Layout>
  );
};
