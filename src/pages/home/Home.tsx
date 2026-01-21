import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { getUserId } from "../../api/fetch-user-id";
import { LanguageContext, UserContext } from "../../App";
import { Layout } from "../../components/layout";
import { SectionLayout } from "../../components/layout/section-layout";
import type { ComponentType, SVGProps } from "react";

import classNames from "classnames";
import styles from "./home.module.scss";

import MsPhoto from "@/assets/images/MS.png";
import { Box } from "../../components/box";

import JsIcon from "@/assets/icons/jsIcon.svg?react";
import ReactIcon from "@/assets/icons/reactIcon.svg?react";
import ReactRouterIcon from "@/assets/icons/reactRouterIcon.svg?react";
import ViteIcon from "@/assets/icons/viteIcon.svg?react";
import HtmlIcon from "@/assets/icons/htmlIcon.svg?react";
import ScssIcon from "@/assets/icons/scssIcon.svg?react";
import JsonIcon from "@/assets/icons/jsonIcon.svg?react";
import JwtIcon from "@/assets/icons/jwtIcon.svg?react";
import FormikIcon from "@/assets/icons/formikIcon.svg?react";
import NodeJsIcon from "@/assets/icons/nodeJsIcon.svg?react";

interface UserData {
  id: string;
  email: string;
}

type TechItem = {
  text: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

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

  const techListWithIcons: TechItem[] = [
    { text: home.hero.techList[0], Icon: JsIcon },
    { text: home.hero.techList[1], Icon: ReactIcon },
    { text: home.hero.techList[2], Icon: ReactRouterIcon },
    { text: home.hero.techList[3], Icon: ViteIcon },
    { text: home.hero.techList[4], Icon: HtmlIcon },
    { text: home.hero.techList[5], Icon: ScssIcon },
    { text: home.hero.techList[6] },
    { text: home.hero.techList[7], Icon: JsonIcon },
    { text: home.hero.techList[8], Icon: JwtIcon },
    { text: home.hero.techList[9] },
    { text: home.hero.techList[10], Icon: FormikIcon },
    { text: home.hero.techList[11] },
    { text: home.hero.techList[12], Icon: NodeJsIcon },
    { text: home.hero.techList[13] },
  ];

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
              {techListWithIcons.map((item, idx) => {
                const IconComponent = item.Icon;

                return (
                  <div key={idx} className={styles.hero_description_tech_text}>
                    {IconComponent && (
                      <IconComponent className={styles.techIcon} />
                    )}
                    <span>{item.text}</span>
                  </div>
                );
              })}
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
