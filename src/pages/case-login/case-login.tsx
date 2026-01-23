import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { SectionColorLayout } from "../../components/layout/section-color-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";

import styles from "./case-login.module.scss";
import { TitleLayoutGreen } from "../../components/layout/title-layout-green";

import case_login_1 from "../../assets/screens/case_login_1.png";
import case_login_2 from "../../assets/screens/case_login_2.png";
import case_login_3 from "../../assets/screens/case_login_3.png";
import case_login_4 from "../../assets/screens/case_login_4.png";
import case_login_5 from "../../assets/screens/case_login_5.png";
import case_login_6 from "../../assets/screens/case_login_6.png";
import case_login_6_2 from "../../assets/screens/case_login_6_2.png";
import case_login_7 from "../../assets/screens/case_login_7.png";
import case_login_8 from "../../assets/screens/case_login_8.png";
import case_login_8_2 from "../../assets/screens/case_login_8_2.png";
import case_login_9 from "../../assets/screens/case_login_9.png";
import { Link } from "react-router-dom";

import { LanguageContext } from "../../App";
import { useContext } from "react";

export const CaseLogin = () => {
  const { language } = useContext(LanguageContext);
  const {
    useCase: { login },
  } = language;

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
      <TitleLayoutGreen>{login.title}</TitleLayoutGreen>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{login.caption1}</div>

          {login.caption1_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={case_login_1} alt={login.caption1_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_login_2} alt={login.caption2_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{login.caption2}</div>

          {login.caption2_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{login.caption3}</div>

          {login.caption3_text1.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}

          <ul className={styles.caption_margin}>
            {login.caption3_text2.map((text, idx) => (
              <div key={idx}>
                <li style={{ listStyle: "inside" }}>
                  {withColour(text, colour)}
                </li>
              </div>
            ))}
          </ul>

          <div className={styles.caption_margin}>
            {withColour(login.caption3_text3, colour)}
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={case_login_3} alt={login.caption3_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_login_4} alt={login.caption4_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{login.caption4}</div>

          {login.caption4_text1.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}

          <ul className={styles.caption_margin}>
            {login.caption4_text2.map((text, idx) => (
              <div key={idx}>
                <li style={{ listStyle: "inside" }}>
                  {withColour(text, colour)}
                </li>
              </div>
            ))}
          </ul>

          <div className={styles.caption_margin}>
            {withColour(login.caption4_text3, colour)}
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{login.caption5}</div>

          {login.caption5_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={case_login_5} alt={login.caption5_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_login_6_2} alt={login.caption6_alt2}></img>
          <img src={case_login_6} alt={login.caption6_alt1}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{login.caption6}</div>

          {login.caption6_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{login.caption7}</div>

          {login.caption7_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={case_login_7} alt={login.caption7_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_login_8} alt={login.caption8_alt1}></img>
          <img src={case_login_8_2} alt={login.caption8_alt2}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{login.caption8}</div>

          {login.caption8_text1.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}

          <ul className={styles.caption_margin}>
            {login.caption8_text2.map((text, idx) => (
              <div key={idx}>
                <li style={{ listStyle: "inside" }}>
                  {withColour(text, colour)}
                </li>
              </div>
            ))}
          </ul>

          {login.caption8_text3.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{login.caption9}</div>

          <div className={styles.caption_margin}>
            {withColour(login.caption9_text, colour)}
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={case_login_9} alt={login.caption9_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <div className={styles.buttonSection}>
        <Link
          to="/login"
          className={styles.button}
          onClick={() => window.scrollTo(0, 0)}
        >
          {login.button_goToLogin}
        </Link>
      </div>
    </Layout>
  );
};
