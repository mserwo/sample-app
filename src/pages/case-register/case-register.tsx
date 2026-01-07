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
  const {
    useCase: { register },
  } = useContext(LanguageContext);

  return (
    <Layout>
      <TitleLayoutGreen>{register.title}</TitleLayoutGreen>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption1}</div>
          <div style={{ marginBottom: "15px" }}>{register.text1}</div>
          <div style={{ marginBottom: "15px" }}>
            {register.text2}
            <b className={styles.bold}>{register.text3_bold}</b>
            {register.text4}
          </div>
          <div style={{ marginBottom: "15px" }}>
            {register.text5}{" "}
            <b className={styles.bold}>{register.text6_bold}</b>
            {register.text7}
          </div>
          <div style={{ marginBottom: "15px" }}>{register.text8}</div>
        </TextLayout>
        <PicsLayout>
          <img src={case_register_1} alt={register.alt1}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_register_2} alt={register.alt2}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption2}</div>
          <div>
            {register.text9}
            <b className={styles.bold}>{register.text10_bold}</b>
            {register.text11}
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption3}</div>
          <div style={{ marginBottom: "15px" }}>
            {register.text12}
            <b className={styles.bold}>{register.text13_bold}</b>.
          </div>
          <ul>
            <li style={{ listStyle: "inside" }}>{register.text14_li}</li>
            <li style={{ listStyle: "inside" }}>{register.text15_li}</li>
            <li style={{ listStyle: "inside" }}>{register.text16_li}</li>
          </ul>
        </TextLayout>
        <PicsLayout>
          <img
            src={case_register_3}
            alt="onHandleSubmit — wysłanie danych"
          ></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img
            src={case_register_4}
            alt="Wysyłanie danych do API (Fetch + JSON)"
          ></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption4}</div>
          <div style={{ marginBottom: "15px" }}>
            {register.text17}
            <b className={styles.bold}>{register.text18_bold}</b>
            {register.text19}
            <b className={styles.bold}>{register.text20_bold}</b>
            {register.text21}
            <b className={styles.bold}>{register.text22_bold}</b>
            {register.text23}
            <b className={styles.bold}>{register.text24_bold}</b>
            {register.text25}.
          </div>
          <div>
            {register.text26}
            <b className={styles.bold}>{register.text27_bold}</b>
            {register.text28}
            <ul style={{ marginTop: "10px" }}>
              <li style={{ listStyle: "inside" }}>
                {register.text29}
                <b className={styles.bold}>{register.text30_bold}</b>
                {register.text31}
              </li>
              <li style={{ listStyle: "inside" }}>
                {register.text32}
                <b className={styles.bold}>{register.text33_bold}</b>
                {register.text34}
              </li>
            </ul>
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption5}</div>
          <div style={{ marginBottom: "15px" }}>
            {register.text35}
            <b className={styles.bold}>{register.text36_bold}</b>
            {register.text37}
            <b className={styles.bold}>{register.text38_bold}</b>
            {register.text39}
          </div>
          <div style={{ marginBottom: "15px" }}>
            {register.text40}
            <b className={styles.bold}>{register.text41_bold}</b>
            {register.text42}
            <b className={styles.bold}>{register.text43_bold}</b>
            {register.text44}
          </div>
          <div style={{ marginBottom: "15px" }}>
            {register.text45}
            <b className={styles.bold}>{register.text46_bold}</b>
            {register.text47}(
            <b className={styles.bold}>{register.text48_bold}</b>)
            {register.text49}
          </div>
          <div style={{ marginBottom: "15px" }}>
            {register.text50}
            <i>{register.text51_i}</i>
            {register.text52}
          </div>
          <div style={{ marginBottom: "15px" }}>
            {register.text53}
            <i>{register.text54_i}</i>
            {register.text55}
            <b className={styles.bold}>{register.text56_bold}</b>.
          </div>
          <div style={{ marginBottom: "15px" }}>
            {register.text57}(
            <b className={styles.bold}>{register.text58_bold}</b>)
            {register.text59}(
            <b className={styles.bold}>{register.text60_bold}</b>
            ).
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={case_register_5} alt={register.alt5}></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_register_6} alt={register.alt6}></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption6}</div>
          <div style={{ marginBottom: "15px" }}>
            {register.text61}
            <b className={styles.bold}>{register.text62_bold}</b>
            {register.text63}
          </div>
          <div style={{ marginBottom: "15px" }}>
            {register.text64}
            <b className={styles.bold}>{register.text65_bold}</b>
            {register.text66}
            <ul style={{ marginTop: "10px" }}>
              <li style={{ listStyle: "inside" }}>{register.text67_li}</li>
              <li style={{ listStyle: "inside" }}>{register.text68_li}</li>
            </ul>
          </div>
          <div style={{ marginBottom: "15px" }}>
            {register.text69}
            <b className={styles.bold}>{register.text70_bold}</b>
            {register.text71}
          </div>
          <div style={{ marginBottom: "15px" }}>{register.text72}</div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>{register.caption7}</div>
          <div>
            {register.text73}
            <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
              <li style={{ listStyle: "inside" }}>{register.text74_li}</li>
              <li style={{ listStyle: "inside" }}>{register.text75_li}</li>
            </ul>
            {register.text76}
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={case_register_7} alt={register.alt7}></img>
        </PicsLayout>
      </SectionLayout>
      <div className={styles.buttonSection}>
        <Link to="/register" className={styles.button}>
          {register.text77}
        </Link>
      </div>
    </Layout>
  );
};
