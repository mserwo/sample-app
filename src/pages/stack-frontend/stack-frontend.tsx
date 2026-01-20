import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { SectionColorLayout } from "../../components/layout/section-color-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";
import { TitleLayoutBlue } from "../../components/layout/title-layout-blue";

import styles from "./stack-frontend.module.scss";
import { Link } from "react-router-dom";

import stack_frontend_1 from "../../assets/screens/stack_frontend_1.png";
import stack_frontend_2 from "../../assets/screens/stack_frontend_2.png";
import stack_frontend_3 from "../../assets/screens/stack_frontend_3.png";
import stack_frontend_4 from "../../assets/screens/stack_frontend_4.png";
import stack_frontend_5 from "../../assets/screens/stack_frontend_5.png";
import stack_frontend_6 from "../../assets/screens/stack_frontend_6.png";
import stack_frontend_7 from "../../assets/screens/stack_frontend_7.png";
import stack_frontend_8 from "../../assets/screens/stack_frontend_8.png";
import stack_frontend_9 from "../../assets/screens/stack_frontend_9.png";
import { useContext } from "react";
import { LanguageContext } from "../../App";

export const StackFrontend = () => {
  const {
    techStack: { frontend },
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

  const colour = "#4bc9f0";

  return (
    <Layout>
      <TitleLayoutBlue>{frontend.title}</TitleLayoutBlue>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{frontend.caption1}</div>

          {frontend.caption1_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={stack_frontend_1} alt={frontend.caption1_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_frontend_2} alt={frontend.caption2_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{frontend.caption2}</div>

          {frontend.caption2_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{frontend.caption3}</div>

          <div className={styles.caption_margin}>
            {withColour(frontend.caption3_text, colour)}
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_frontend_3} alt={frontend.caption3_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_frontend_4} alt={frontend.caption4_alt}></img>
        </PicsLayout>{" "}
        <TextLayout>
          <div className={styles.caption}>{frontend.caption4}</div>

          {frontend.caption4_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{frontend.caption5}</div>

          {frontend.caption5_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
        <PicsLayout>
          <img src={stack_frontend_5} alt={frontend.caption5_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_frontend_6} alt={frontend.caption6_alt}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{frontend.caption6}</div>

          <div className={styles.caption_margin}>
            {withColour(frontend.caption6_text, colour)}
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionColorLayout>
        <TextLayout>
          <div className={styles.caption}>{frontend.caption7}</div>

          {frontend.caption7_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
          <PicsLayout>
            <img src={stack_frontend_7} alt={frontend.caption7_alt1}></img>
          </PicsLayout>
        </TextLayout>
        <PicsLayout>
          <img
            className={styles.footerPic1}
            src={stack_frontend_8}
            alt={frontend.caption7_alt2}
          ></img>
          <img
            className={styles.footerPic1}
            src={stack_frontend_9}
            alt={frontend.caption7_alt3}
          ></img>
        </PicsLayout>
      </SectionColorLayout>
    </Layout>
  );
};
