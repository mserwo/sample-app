import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { SectionColorLayout } from "../../components/layout/section-color-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";
import { TitleLayoutBlue } from "../../components/layout/title-layout-blue";

import ArrowRight2 from "../../assets/images/arrowRight2.svg?react";

import styles from "./stack-server.module.scss";
import { Link } from "react-router-dom";

import stack_server_1 from "../../assets/screens/stack_server_1.png";
import stack_server_2 from "../../assets/screens/stack_server_2.png";
import stack_server_3 from "../../assets/screens/stack_server_3.png";
import stack_server_4 from "../../assets/screens/stack_server_4.png";
import { useContext } from "react";
import { LanguageContext } from "../../App";

export const StackServer = () => {
  const { language } = useContext(LanguageContext);
  const {
    techStack: { server },
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
      <TitleLayoutBlue>{server.title}</TitleLayoutBlue>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{server.caption1}</div>

          <div className={styles.caption_margin}>
            {withColour(server.caption1_text, colour)}
          </div>
          <div className={styles.caption}>{server.caption2}</div>

          {server.caption2_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}

          <div className={styles.containerLink}>
            <ArrowRight2 className={styles.arrow} />
            <Link
              to="/case/login"
              className={styles.link}
              onClick={() => window.scrollTo(0, 0)}
            >
              {server.caption_2_button}
            </Link>
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_server_1} alt={server.caption1_alt}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_server_2} alt={server.caption3_alt1}></img>
          <img src={stack_server_3} alt={server.caption3_alt2}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{server.caption3}</div>

          {server.caption3_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{server.caption4}</div>

          {server.caption4_text.map((text, idx) => (
            <div key={idx} className={styles.caption_margin}>
              {withColour(text, colour)}
            </div>
          ))}

          <div className={styles.containerLink}>
            <ArrowRight2 className={styles.arrow} />
            <Link
              to="/case/register"
              className={styles.link}
              onClick={() => window.scrollTo(0, 0)}
            >
              {server.caption_4_button}
            </Link>
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_server_4} alt={server.caption4_alt}></img>
        </PicsLayout>
      </SectionLayout>
    </Layout>
  );
};
