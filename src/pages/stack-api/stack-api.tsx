import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { SectionColorLayout } from "../../components/layout/section-color-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";
import { TitleLayoutBlue } from "../../components/layout/title-layout-blue";

import styles from "./stack-api.module.scss";
import { Link } from "react-router-dom";

import stack_api_1 from "../../assets/screens/stack_api_1.png";
import stack_api_3 from "../../assets/screens/stack_api_3.png";
import stack_api_4 from "../../assets/screens/stack_api_4.png";
import { useContext } from "react";
import { LanguageContext } from "../../App";

export const StackApi = () => {
  const { language } = useContext(LanguageContext);
  const {
    techStack: { api },
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

  const colour = "#4bc9f0";

  return (
    <Layout>
      <TitleLayoutBlue>{api.title}</TitleLayoutBlue>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{api.caption1}</div>

          <div className={styles.caption_margin}>
            {withColour(api.caption1_text, colour)}
          </div>

          <div className={styles.caption}>{api.caption2}</div>

          <div className={styles.caption_margin}>
            {withColour(api.caption2_text, colour)}
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_api_1} alt={api.caption1_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_api_3} alt={api.caption3_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{api.caption3}</div>

          {api.caption3_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{api.caption4}</div>

          {api.caption4_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}

          <div className={styles.caption}>{api.caption5}</div>

          <div className={styles.caption_margin}>
            {withColour(api.caption5_text, colour)}
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_api_4} alt={api.caption5_alt}></img>
        </PicsLayout>
      </SectionLayout>
    </Layout>
  );
};
