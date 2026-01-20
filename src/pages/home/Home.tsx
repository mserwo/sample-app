import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { getUserId } from "../../api/fetch-user-id";
import { LanguageContext, UserContext } from "../../App";
import { Layout } from "../../components/layout";
import { SectionLayout } from "../../components/layout/section-layout";

import classNames from "classnames";
import styles from "./home.module.scss";

import MsPhoto from "@/assets/images/MS.png";
import { Box } from "../../components/box";

interface UserData {
  id: string;
  email: string;
}

export const Home = () => {
  const { home } = useContext(LanguageContext);
  const { token } = useContext(UserContext);

  const mockUser = JSON.parse(sessionStorage.getItem("mockUser") || "{}");

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
      <div className={styles.userBar}>
        {userData || mockUser.mockToken ? (
          <div className={styles.userBar_container}>
            <div className={styles.userBar_container_element}>
              Token:
              <div className={styles.userBar_container_element_field}>
                {userData ? token : mockUser.mockToken}
              </div>
            </div>
            <div className={styles.userBar_container_element}>
              Email:
              <div className={styles.userBar_container_element_field}>
                {userData ? userData.email : mockUser.mockEmail}
              </div>
            </div>
            <div className={styles.userBar_container_Field}>
              <Link
                className={styles.userBar_container_Field_button}
                to={userData ? `/userpage/${userData.id}` : `/userpage/mock`}
              >
                {home.userBarButton}
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      <SectionLayout>
        <div className={styles.hero}>
          <div className={styles.hero_description}>
            <div className={styles.hero_description_mainCaption}>
              {home.hero.header}
            </div>
            <div className={styles.hero_description_caption}>
              {home.hero.text1}
              <ul className={styles.hero_description_caption_list}>
                {home.hero.list.map((text, idx) => (
                  <li
                    key={idx}
                    className={styles.hero_description_caption_list_text}
                  >
                    {text}
                  </li>
                ))}
              </ul>
              <div>{home.hero.text2}</div>
            </div>
            <div className={styles.hero_description_tech}>
              {home.hero.techList.map((text, idx) => (
                <div key={idx} className={styles.hero_description_tech_text}>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.hero_imgContainer}>
            <img
              className={styles.hero_imgContainer_pic}
              src={MsPhoto}
              alt="Marcin Serwotka photo"
            />
          </div>
        </div>
      </SectionLayout>
      <section className={styles.tilesSection}>
        <div className={styles.useCase}>
          <div className={styles.useCase_text}>{home.useCase.main}</div>
        </div>
        <div className={styles.tiles}>
          <div className={styles.tiles_inner}>
            <Box
              title={home.useCase.box1.title}
              text={home.useCase.box1.text}
              list={home.useCase.box1.list}
              primaryButtonText={home.useCase.box1.button1}
              primaryButtonUrl="/register"
              secondaryButtonText={home.useCase.box1.button2}
              secondaryButtonUrl="/case/register"
            />

            <Box
              title={home.useCase.box2.title}
              text={home.useCase.box2.text}
              list={home.useCase.box2.list}
              primaryButtonText={home.useCase.box2.button1}
              primaryButtonUrl="/login"
              secondaryButtonText={home.useCase.box2.button2}
              secondaryButtonUrl="/case/login"
            />

            <Box
              title={home.useCase.box3.title}
              text={home.useCase.box3.text}
              list={home.useCase.box3.list}
              primaryButtonText={home.useCase.box3.button1}
              primaryButtonUrl="/case/user-panel"
            />
          </div>
        </div>
      </section>

      <section className={styles.tilesSection}>
        <div className={styles.useCase}>
          <div
            className={classNames(
              styles.useCase_text,
              styles["useCase_text_blue"],
            )}
          >
            {home.techStack.main}
          </div>
        </div>
        <div className={styles.tiles}>
          <div className={styles.tiles_inner}>
            <Box
              title={home.techStack.box1.title}
              text={home.techStack.box1.text}
              list={home.techStack.box1.list}
              primaryButtonText={home.techStack.box1.button1}
              primaryButtonUrl="/stack/frontend"
              color="blue"
            />

            <Box
              title={home.techStack.box2.title}
              text={home.techStack.box2.text}
              list={home.techStack.box2.list}
              primaryButtonText={home.techStack.box2.button1}
              primaryButtonUrl="/stack/api"
              color="blue"
            />

            <Box
              title={home.techStack.box3.title}
              text={home.techStack.box3.text}
              list={home.techStack.box3.list}
              primaryButtonText={home.techStack.box3.button1}
              primaryButtonUrl="/stack/server"
              color="blue"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};
