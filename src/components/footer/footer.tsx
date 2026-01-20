import styles from "./footer.module.scss";
import { BottomBar } from "./bottom-bar/bottom-bar";
import LogoSection from "./logo-section/logo-section";
import { NavigationMenu } from "./navigation-menu/navigation-menu";
// import { JoinNewsletter } from "./join-newsletter/join-newsletter";
import MailIcon from "@/assets/images/mail.svg?react";
import GithubIcon from "@/assets/images/github.svg?react";
import LinkedinIcon from "@/assets/images/linkedin.svg?react";
import { Link } from "react-router-dom";

const menu1items = [
  { title: "Register", url: "/case/register" },
  { title: "Login", url: "/case/login" },
  { title: "User panel", url: "/case/user-panel" },
];

const menu2items = [
  { title: "Frontend", url: "/stack/frontend" },
  { title: "Api", url: "/stack/api" },
  { title: "Server", url: "/stack/server" },
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

export const Footer = () => {
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
              title="Contact"
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
