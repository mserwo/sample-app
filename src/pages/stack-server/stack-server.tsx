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

export const StackServer = () => {
  return (
    <Layout>
      <TitleLayoutBlue>Serwer - opis technologii</TitleLayoutBlue>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>1. Rola serwera w projekcie</div>
          <div style={{ marginBottom: "15px" }}>
            Serwer pełni rolę dostawcy <b className={styles.bold}>API</b> i
            odpowiada za autoryzację, oraz operacje na danych użytkowników. Nie
            renderuje on widoków ani nie zarządza warstwą UI — całość interfejsu
            realizowana jest po stronie Reacta.
          </div>
          <div className={styles.caption}>2. Node.js i Express</div>
          <div style={{ marginBottom: "15px" }}>
            Backend został zbudowany w oparciu o środowisko <b>Node.js</b> oraz
            framework <b className={styles.bold}>Express</b>. Express odpowiada
            za obsługę
            <b className={styles.bold}> routingu</b>,{" "}
            <b className={styles.bold}>middleware</b> oraz strukturę{" "}
            <b className={styles.bold}>endpointów REST API</b>.
          </div>
          <div style={{ marginBottom: "15px" }}>
            W projekcie zastosowano middleware{" "}
            <b className={styles.bold}>CORS</b>, które umożliwia bezpieczną
            komunikację pomiędzy frontendem a backendem działającymi na{" "}
            <b className={styles.bold}>różnych adresach </b>. Dzięki temu
            aplikacja kliencka może wykonywać zapytania do API bez problemów
            związanych z polityką bezpieczeństwa przeglądarki.
          </div>
          <div style={{ marginBottom: "15px" }}>
            <b className={styles.bold}>
              Szczegółowe działanie middleware verifyUser zostało opisane w
              sekcji Use Case w pkt 7. procesu logowania.
            </b>
          </div>
          <div className={styles.containerLink}>
            <ArrowRight2 className={styles.arrow} />
            <Link to="/case/login" className={styles.link}>
              Przejdź do opisu procesu logowania
            </Link>
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_server_1} alt=""></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_server_2} alt=""></img>
          <img src={stack_server_3} alt=""></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>3. Autoryzacja i bezpieczeństwo</div>
          <div style={{ marginBottom: "15px" }}>
            Proces uwierzytelniania oparty jest na{" "}
            <b className={styles.bold}>JWT</b>. Hasła użytkowników są szyfrowane
            przy użyciu <b className={styles.bold}>biblioteki bcrypt</b>, co
            zabezpiecza dane przed zapisaniem w postaci jawnej.
          </div>
          <div>
            <b className={styles.bold}>Middleware</b> odpowiedzialne za
            weryfikację tokenu chroni endpointy wymagające autoryzacji i
            zapewnia, że tylko zalogowany użytkownik ma dostęp do swoich danych.
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>4. Przechowywanie danych</div>
          <div style={{ marginBottom: "15px" }}>
            Dane użytkowników przechowywane są w pliku{" "}
            <b className={styles.bold}>JSON</b>, który pełni rolę uproszczonej
            bazy danych. Takie rozwiązanie zostało zastosowane świadomie, aby
            skupić się na architekturze aplikacji i przepływie danych, a nie na
            konfiguracji zewnętrznej bazy.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Mechanizmy odczytu i zapisu danych zostały wydzielone do osobnych
            funkcji, co ułatwia ewentualną migrację do pełnoprawnej bazy danych
            w przyszłości.
          </div>
          <div style={{ marginBottom: "15px" }}>
            <b className={styles.bold}>
              Odczyt i zapis danych użytkowników został szczegółowo opisany w
              pkt. 6 procesu rejestracji.
            </b>
          </div>
          <div className={styles.containerLink}>
            <ArrowRight2 className={styles.arrow} />
            <Link to="/case/register" className={styles.link}>
              Przejdź do opisu procesu rejestracji
            </Link>
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_server_4} alt=""></img>
        </PicsLayout>
      </SectionLayout>
    </Layout>
  );
};
