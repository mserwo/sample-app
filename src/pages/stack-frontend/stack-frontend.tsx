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

export const StackFrontend = () => {
  return (
    <Layout>
      <TitleLayoutBlue>Frontend - opis technologii</TitleLayoutBlue>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>1. Rola Reacta w projekcie</div>
          <div style={{ marginBottom: "15px" }}>
            <b className={styles.bold}>Frontend</b> aplikacji został zbudowany
            jako
            <b className={styles.bold}> Single Page Application</b> w oparciu o
            <b className={styles.bold}> React i React Router</b>. Struktura
            projektu opiera się na wyraźnym podziale na widoki stron (
            <b className={styles.bold}>pages</b>), komponenty wielokrotnego
            użytku (<b className={styles.bold}>components</b>) oraz warstwę
            komunikacji z <b className={styles.bold}>API</b>.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Aplikacja korzysta z kontekstów Reacta do zarządzania globalnym
            stanem zalogowanego użytkownika. W{" "}
            <b className={styles.bold}>UserContext</b> przechowywane są dane
            sesji (token, dane użytkownika), co pozwala na dostęp do nich w
            dowolnym miejscu aplikacji bez potrzeby przekazywania propsów. Stan
            sesji jest inicjalizowany na podstawie danych zapisanych w{" "}
            <b className={styles.bold}>sessionStorage</b>, dzięki czemu
            użytkownik pozostaje zalogowany po odświeżeniu strony.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Logika komponentów opiera się na hookach funkcyjnych (
            <b className={styles.bold}>useState, useEffect, useContext</b>), a
            powtarzalne mechanizmy zostały wydzielone do{" "}
            <b className={styles.bold}>własnych hooków</b> (np. obsługa
            szerokości ekranu).
          </div>
          <div style={{ marginBottom: "15px" }}>
            <b className={styles.bold}>Formularze</b> (rejestracja, logowanie,
            edycja danych użytkownika) zostały zaimplementowane przy użyciu
            biblioteki <b className={styles.bold}>Formik</b> oraz{" "}
            <b className={styles.bold}>Yup</b>, co zapewnia spójne zarządzanie
            stanem formularzy, walidacją danych i obsługą błędów po stronie
            klienta.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Komponenty UI są oddzielone od logiki komunikacji z backendem —
            <b className={styles.bold}> zapytania HTTP</b> zostały wydzielone do
            osobnej warstwy <b className={styles.bold}>API</b>. Dzięki temu
            frontend pozostaje czytelny, łatwy do testowania i{" "}
            <b className={styles.bold}>przygotowany na dalszą rozbudowę</b>.
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_frontend_1} alt=""></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_frontend_2} alt=""></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>2. Architektura komponentów</div>
          <div style={{ marginBottom: "15px" }}>
            Struktura projektu oparta jest na czytelnym podziale
            odpowiedzialności pomiędzy poszczególne komponenty. Widoki stron
            znajdują się w katalogu <b className={styles.bold}>pages</b> i
            odpowiadają za logikę konkretnych ekranów aplikacji. Komponenty
            wspólne, takie jak
            <b className={styles.bold}> layouty, header czy footer</b>, zostały
            wydzielone do osobnych katalogów.
          </div>
          <div>
            Komponenty <b className={styles.bold}>Layoutów</b> odpowiadają za
            wspólną strukturę stron aplikacji, zapewniając spójny wygląd oraz
            oddzielenie warstwy prezentacyjnej od logiki poszczególnych widoków.
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>3. Routing i nawigacja</div>
          <div>
            Do obsługi routingu wykorzystany został{" "}
            <b className={styles.bold}>React Router v6</b> z konfiguracją opartą
            o <b className={styles.bold}>createBrowserRouter</b>. Zdefiniowane
            zostały zarówno <b className={styles.bold}>trasy statyczne</b>, jak
            i <b className={styles.bold}>dynamiczne</b>, np. strona użytkownika
            zawierająca parametr identyfikatora.
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_frontend_3} alt=""></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_frontend_4} alt=""></img>
        </PicsLayout>{" "}
        <TextLayout>
          <div className={styles.caption}>
            4. Zarządzanie stanem użytkownika
          </div>
          <div style={{ marginBottom: "15px" }}>
            Stan zalogowanego użytkownika zarządzany jest globalnie przy użyciu
            mechanizmu <b className={styles.bold}>kontekstu Reacta</b>. W
            kontekście przechowywane są kluczowe informacje, takie jak{" "}
            <b className={styles.bold}>dane użytkownika </b>
            oraz <b className={styles.bold}>token autoryzacyjny</b>. Dzięki temu
            wszystkie komponenty aplikacji mają dostęp do aktualnego stanu
            użytkownika bez potrzeby przekazywania propsów przez wiele poziomów.
          </div>
          <div>
            Dodatkowo <b className={styles.bold}>token</b> zapisywany jest w{" "}
            <b className={styles.bold}>sessionStorage</b> , co pozwala na
            odtworzenie sesji użytkownika po odświeżeniu strony. Przy ponownym
            renderowaniu aplikacji wykonywany jest mechanizm inicjalizujący,
            który na podstawie zapisanego tokenu pobiera aktualne dane
            użytkownika z <b className={styles.bold}>backendu</b>.
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>5. Formularze i walidacja danych</div>
          <div style={{ marginBottom: "15px" }}>
            W projekcie wykorzystano{" "}
            <b className={styles.bold}>bibliotekę Formik</b> do obsługi
            formularzy. Pozwala ona na wygodne zarządzanie stanem pól
            formularza, obsługę wysyłania danych oraz reakcję na błędy. Każdy
            formularz (
            <b className={styles.bold}>
              logowanie, rejestracja, edycja danych użytkownika
            </b>
            ) oparty jest na tym samym, spójnym mechanizmie.
          </div>
          <div>
            Walidacja danych realizowana jest za pomocą{" "}
            <b className={styles.bold}>biblioteki Yup</b>, co umożliwia
            sprawdzanie poprawności danych jeszcze po stronie klienta. Dzięki
            temu użytkownik otrzymuje natychmiastową informację o błędach, a
            backend nie jest obciążany niepoprawnymi zapytaniami.
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_frontend_5} alt=""></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={stack_frontend_6} alt=""></img>
        </PicsLayout>{" "}
        <TextLayout>
          <div className={styles.caption}>6. Własne hooki</div>
          <div>
            W projekcie wykorzystywane są{" "}
            <b className={styles.bold}>własne hooki Reactowe</b>, które
            pozwalają oddzielić powtarzalną logikę od komponentów. Przykładem
            jest hook obsługujący szerokość ekranu, który reaguje na{" "}
            <b className={styles.bold}>zmianę rozmiaru okna przeglądarki</b> i
            dba o poprawne usuwanie nasłuchiwaczy zdarzeń.
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>
            7. Stylowanie komponentów – CSS Modules i Sass
          </div>
          <div style={{ marginBottom: "15px" }}>
            Stylowanie frontendu odbyło się za pomocą{" "}
            <b className={styles.bold}>CSS Modules</b> w połączeniu z
            <b className={styles.bold}> Sass/SCSS</b>. Dzięki temu każdemu
            komponentowi został przypisany zestaw klas, który jest izolowany od
            reszty aplikacji, co zapobiega konfliktom przy boundlowaniu strony.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Dla zachowania spójności kolorów i typografii, korzystam z
            globalnych plików zmiennych, takich jak{" "}
            <b className={styles.bold}>_colors.scss</b> i
            <b className={styles.bold}>_typography.scss</b>.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Do <b className={styles.bold}>responsywności</b> wykorzystałem{" "}
            <b className={styles.bold}>mixiny</b> (max-width i min-width)
            zdefiniowanych w <b className={styles.bold}>_breakpoints.scss</b>.
            Dzięki temu układ strony i komponentów jest dopasowany do różnych
            rozdzielczości w zależności od szerokości ekranu.
          </div>
          <div>
            <b className={styles.bold}>Zagnieżdzenia i modyfikatory</b>{" "}
            zastosowane w plikach .scss pozwalają w prosty sposób nadawać różne
            warianty komponentom w zależności od kontekstu.
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={stack_frontend_7} alt=""></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img
            className={styles.footerPic1}
            src={stack_frontend_8}
            alt=""
          ></img>
        </PicsLayout>{" "}
        <PicsLayout>
          <img
            className={styles.footerPic2}
            src={stack_frontend_9}
            alt=""
          ></img>
        </PicsLayout>
      </SectionColorLayout>
    </Layout>
  );
};
