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

export const StackApi = () => {
  return (
    <Layout>
      <TitleLayoutBlue>API - komunikacja frontend - backend</TitleLayoutBlue>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>1. Rola warstwy API</div>
          <div style={{ marginBottom: "15px" }}>
            Warstwa API pełni rolę pośrednika pomiędzy frontendem a backendem.
            Frontend nie ma bezpośredniego dostępu do danych, a wszelkie
            operacje wykonywane są poprzez jawnie zdefiniowane
            <b className={styles.bold}> endpointy REST API</b>.
          </div>
          <div className={styles.caption}>2. Organizacja zapytań API</div>
          <div>
            Każda funkcja w warstwie API odpowiada jednemu endpointowi backendu
            i obsługuje konkretną operację, taką jak logowanie, rejestracja czy
            pobieranie danych użytkownika.
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_api_1} alt=""></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_api_3} alt=""></img>
        </PicsLayout>{" "}
        <TextLayout>
          <div className={styles.caption}>3. TypeScript - typowanie danych</div>
          <div style={{ marginBottom: "15px" }}>
            Projekt wykorzystuje <b className={styles.bold}>TypeScript</b>,
            który zapewnia spójność danych pomiędzy frontendem a backendem. Typy
            danych opisują strukturę odpowiedzi API i pomagają uniknąć błędów
            wynikających z niezgodnych danych.
          </div>
          <div>
            Dzięki temu frontend już na etapie pisania kodu wie, jakie dane
            otrzyma z <b className={styles.bold}>API</b> i jak może je poprawnie
            obsłużyć.
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>4. Autoryzacja zapytań</div>
          <div style={{ marginBottom: "15px" }}>
            Endpointy wymagające autoryzacji korzystają z mechanizmu{" "}
            <b className={styles.bold}>Bearer Token</b>.{" "}
            <b className={styles.bold}>Token JWT</b> przesyłany jest w nagłówku{" "}
            <b className={styles.bold}>Authorization</b> , co pozwala backendowi
            jednoznacznie zidentyfikować użytkownika wykonującego żądanie.
          </div>
          <div style={{ marginBottom: "15px" }}>
            <b className={styles.bold}>Token</b> pobierany jest z{" "}
            <b className={styles.bold}>globalnego stanu</b> aplikacji, a jego
            obecność decyduje o dostępie do chronionych zasobów.
          </div>
          <div className={styles.caption}>5. Przepływ danych w aplikacji</div>
          <div>
            Po zalogowaniu użytkownika <b className={styles.bold}>backend</b>{" "}
            zwraca <b className={styles.bold}>token JWT</b>, który zapisywany
            jest w <b className={styles.bold}>kontekście aplikacji</b> oraz w{" "}
            <b className={styles.bold}>sessionStorage</b>. Token wykorzystywany
            jest następnie przy kolejnych zapytaniach do{" "}
            <b className={styles.bold}>API</b>.
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_api_4} alt=""></img>
        </PicsLayout>
      </SectionLayout>
    </Layout>
  );
};
