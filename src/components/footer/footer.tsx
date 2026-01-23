import styles from "./footer.module.scss";
import { BottomBar } from "./bottom-bar/bottom-bar";
import LogoSection from "./logo-section/logo-section";
import { NavigationMenu } from "./navigation-menu/navigation-menu";
// import { JoinNewsletter } from "./join-newsletter/join-newsletter";
import MailIcon from "@/assets/images/mail.svg?react";
import GithubIcon from "@/assets/images/github.svg?react";
import LinkedinIcon from "@/assets/images/linkedin.svg?react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../App";

export const Footer = () => {
  const { language } = useContext(LanguageContext);
  const { navi } = language;

  const menu1items = [
    { title: navi.register, url: "/case/register" },
    { title: navi.login, url: "/case/login" },
    { title: navi.userPanel, url: "/case/user-panel" },
  ];

  const menu2items = [
    { title: navi.frontend, url: "/stack/frontend" },
    { title: navi.api, url: "/stack/api" },
    { title: navi.server, url: "/stack/server" },
  ];

  const menu3items = [
    { title: "Email", url: "mailto:marcin.serwotka@op.pl", icon: <MailIcon /> },
    {
      title: "Github",
      url: "https://github.com/mserwo",
      external: true,
      icon: <GithubIcon />,
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/marcin-serwotka-b25072194/?originalSubdomain=pl",
      external: true,
      icon: <LinkedinIcon />,
    },
  ];

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link
            className={styles.logoLink}
            to={`/`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <LogoSection />
          </Link>
          <div className={styles.navigation}>
            <NavigationMenu
              title="Use Case"
              menuElements={menu1items}
              variant="useCase"
            />
            <NavigationMenu
              title="Tech Stack"
              menuElements={menu2items}
              variant="techStack"
            />
            <NavigationMenu
              title={navi.contactTitle}
              menuElements={menu3items}
              variant="contact"
            />
          </div>
        </div>
        <BottomBar />
      </div>
    </footer>
  );
};
