import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { SectionColorLayout } from "../../components/layout/section-color-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";

import styles from "./case-register.module.scss";
import { TitleLayoutGreen } from "../../components/layout/title-layout-green";
import case_register_1 from "../../assets/screens/case_register_1.png";
import case_register_2 from "../../assets/screens/case_register_2.png";
import case_register_3 from "../../assets/screens/case_register_3.png";
import case_register_4 from "../../assets/screens/case_register_4.png";
import case_register_5 from "../../assets/screens/case_register_5.png";
import case_register_6 from "../../assets/screens/case_register_6.png";
import case_register_7 from "../../assets/screens/case_register_7.png";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";
import { useContext } from "react";

export const CaseRegister = () => {
  const { language } = useContext(LanguageContext);
  const {
    useCase: { register },
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

  const green = "#45b26b";

  return (
    <Layout>
      <TitleLayoutGreen>{register.title}</TitleLayoutGreen>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption1}</div>
          {register.caption1_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, green)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={case_register_1} alt={register.caption1_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_register_2} alt={register.caption2_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption2}</div>
          {withColour(register.caption2_text, green)}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption3}</div>
          <div className={styles.caption_margin}>
            {withColour(register.caption3_text1, green)}
          </div>
          <ul>
            {register.caption3_text2.map((text, idx) => (
              <li key={idx} style={{ listStyle: "inside" }}>
                {withColour(text, "#45b26b")}
              </li>
            ))}
          </ul>
        </TextLayout>
        <PicsLayout>
          <img src={case_register_3} alt={register.caption3_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_register_4} alt={register.caption4_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption4}</div>
          {register.caption4_text1.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, green)}
            </div>
          ))}

          <ul>
            {register.caption4_text2.map((text, idx) => (
              <li key={idx} style={{ listStyle: "inside" }}>
                {withColour(text, green)}
              </li>
            ))}
          </ul>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption5}</div>
          {register.caption5_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, green)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={case_register_5} alt={register.caption5_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_register_6} alt={register.caption6_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption6}</div>

          {register.caption6_text1.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, green)}
            </div>
          ))}
          <ul className={styles.caption_margin}>
            {register.caption6_text2.map((text, idx) => (
              <div key={idx}>
                <li style={{ listStyle: "inside" }}>
                  {withColour(text, green)}
                </li>
              </div>
            ))}
          </ul>
          {register.caption6_text3.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, green)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption7}</div>
          <div className={styles.caption_margin}>{register.caption7_text1}</div>
          <ul className={styles.caption_margin}>
            {register.caption7_text2.map((text, idx) => (
              <li key={idx} style={{ listStyle: "inside" }}>
                {text}
              </li>
            ))}
          </ul>
          <div className={styles.caption_margin}>{register.caption7_text3}</div>
        </TextLayout>
        <PicsLayout>
          <img src={case_register_7} alt={register.caption7_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <div className={styles.buttonSection}>
        <Link
          to="/register"
          className={styles.button}
          onClick={() => window.scrollTo(0, 0)}
        >
          {register.button_goToRegister}
        </Link>
      </div>
    </Layout>
  );
};
