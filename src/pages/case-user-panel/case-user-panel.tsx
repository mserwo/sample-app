import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { SectionColorLayout } from "../../components/layout/section-color-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";

import styles from "./case-user-panel.module.scss";
import { TitleLayoutGreen } from "../../components/layout/title-layout-green";

import case_user_panel_1 from "../../assets/screens/case_user_panel_1.png";
import case_user_panel_1_2 from "../../assets/screens/case_user_panel_1_2.png";
import case_user_panel_2 from "../../assets/screens/case_user_panel_2.png";
import case_user_panel_3 from "../../assets/screens/case_user_panel_3.png";
import case_user_panel_4 from "../../assets/screens/case_user_panel_4.png";
import case_user_panel_5 from "../../assets/screens/case_user_panel_5.png";
import case_user_panel_6 from "../../assets/screens/case_user_panel_6.png";
import case_user_panel_7 from "../../assets/screens/case_user_panel_7.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../App";

export const CaseUserPanel = () => {
  const {
    useCase: { userPanel },
  } = useContext(LanguageContext);

  const withColour = (text: string, colour: string) => {
    const textArr = text.match(/&.*?&|[^&]+/g);

    if (!textArr) return text;

    return textArr.map((text, idx) => {
      let resultText = text;
      const toBeColoured = text.at(0) === "&";

      if (toBeColoured) {
        resultText = text.slice(1, -1);
      }

      return (
        <span
          key={idx}
          style={{
            color: toBeColoured ? colour : "#b1b5c3",
            fontWeight: toBeColoured ? "700" : "400",
          }}
        >
          {toBeColoured ? resultText : text}
        </span>
      );
    });
  };

  const colour = "#45b26b";

  return (
    <Layout>
      <TitleLayoutGreen>Panel użytkownika - opis procesu</TitleLayoutGreen>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{userPanel.caption1}</div>

          {userPanel.caption1_text.map((text) => (
            <div className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={case_user_panel_1} alt={userPanel.caption1_alt1}></img>
          <img src={case_user_panel_1_2} alt={userPanel.caption1_alt2}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_user_panel_2} alt={userPanel.caption2_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{userPanel.caption2}</div>

          {userPanel.caption2_text.map((text) => (
            <div className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{userPanel.caption3}</div>

          {userPanel.caption3_text.map((text) => (
            <div className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={case_user_panel_3} alt={userPanel.caption3_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_user_panel_4} alt={userPanel.caption4_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{userPanel.caption4}</div>

          {userPanel.caption4_text1.map((text) => (
            <div className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}

          <ul className={styles.caption_margin}>
            {userPanel.caption4_text2.map((text) => (
              <div>
                <li style={{ listStyle: "inside" }}>
                  {withColour(text, colour)}
                </li>
              </div>
            ))}
          </ul>

          {userPanel.caption4_text3.map((text) => (
            <div className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}

          <ul className={styles.caption_margin}>
            {userPanel.caption4_text4.map((text) => (
              <div>
                <li style={{ listStyle: "inside" }}>
                  {withColour(text, colour)}
                </li>
              </div>
            ))}
          </ul>

          {userPanel.caption4_text5.map((text) => (
            <div className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}

          <ul className={styles.caption_margin}>
            {userPanel.caption4_text6.map((text) => (
              <div>
                <li style={{ listStyle: "inside" }}>
                  {withColour(text, colour)}
                </li>
              </div>
            ))}
          </ul>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{userPanel.caption5}</div>

          {userPanel.caption5_text.map((text) => (
            <div className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={case_user_panel_5} alt={userPanel.caption5_alt1}></img>
          <img src={case_user_panel_6} alt={userPanel.caption5_alt2}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_user_panel_7} alt={userPanel.caption6_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{userPanel.caption6}</div>

          {userPanel.caption6_text.map((text) => (
            <div className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <div className={styles.downContainer}>
        <div className={styles.caption2}>{userPanel.text_bottom}</div>
        <div className={styles.buttonSection}>
          <Link to="/register" className={styles.button}>
            {userPanel.button_goToRegistration}
          </Link>
          <Link to="/login" className={styles.button}>
            {userPanel.button_goToLogin}
          </Link>
        </div>
      </div>
    </Layout>
  );
};
