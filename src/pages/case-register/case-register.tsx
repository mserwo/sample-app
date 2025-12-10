import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";

import styles from "./case-register.module.scss";
import { TitleLayout } from "../../components/layout/title-layout";
import case_register_1 from "../../assets/screens/case_register_1.png";
import case_register_2 from "../../assets/screens/case_register_2.png";
import case_register_3 from "../../assets/screens/case_register_3.png";
import case_register_4 from "../../assets/screens/case_register_4.png";
import case_register_5 from "../../assets/screens/case_register_5.png";
import case_register_6 from "../../assets/screens/case_register_6.png";
import case_register_7 from "../../assets/screens/case_register_7.png";
import { Link } from "react-router-dom";

export const CaseRegister = () => {
  return (
    <Layout>
      <PageLayout>
        <TitleLayout>Rejestracja użytkownika - opis procesu</TitleLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              1. Formularz rejestracji (Frontend)
            </div>
            <div style={{ marginBottom: "15px" }}>
              Proces rejestracji zaczyna się na stronie z formularzem, który
              pozwala użytkownikowi podać adres e-mail oraz hasło.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Do obsługi formularza użyłem bibliotekę <b>Formik</b>, która
              ułatwia zarządzanie stanem pól formularza, obsługą błędów i samym
              procesem wysyłania danych do backendu.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Walidacja danych odbywa się jeszcze przed wysłaniem formularza —
              biblioteka <b>Yup</b> sprawdza poprawność adresu e-mail oraz to,
              czy pola nie są puste.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Po zatwierdzeniu formularza dane logowania są przekazywane do
              backendu, gdzie następuje ich weryfikacja z danymi zapisanymi w
              pliku users.json.
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_register_1} alt="formularz rejestracji"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>2. Walidacja danych (Yup)</div>
            <div>
              Zanim formularz wyśle dane, <b>Yup</b> sprawdza ich poprawność —
              np. format adresu e-mail oraz to, czy hasła są takie same, co
              pozwala walidować dane przed wysyłką do backendu.
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_register_2} alt="Walidacja danych (Yup)"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              3. onHandleSubmit — wysłanie danych
            </div>
            <div style={{ marginBottom: "15px" }}>
              Po pozytywnej walidacji wywołuję funkcję onHandleSubmit. W tej
              funkcji przygotowuję callbacki odpowiedzialne za reakcję frontendu
              na sukces lub błąd oraz przekazuję dane do <b>API</b>.
            </div>
            <ul>
              <li style={{ listStyle: "inside" }}>
                tworzę funkcję onSuccess → wyświetla komunikat i przekierowuje
                do logowania
              </li>
              <li style={{ listStyle: "inside" }}>
                tworzę funkcję onError → wyświetla komunikat błędu
              </li>
              <li style={{ listStyle: "inside" }}>
                wykonuję żądanie przez postRegister
              </li>
            </ul>
          </TextLayout>
          <PicsLayout>
            <img
              src={case_register_3}
              alt="onHandleSubmit — wysłanie danych"
            ></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              4. Wysyłanie danych do API (Fetch + JSON)
            </div>
            <div style={{ marginBottom: "15px" }}>
              Po zatwierdzeniu formularza dane użytkownika są wysyłane do
              backendu przy użyciu <b>Fetch API</b>. Dane są przekazywane w
              formacie <b>JSON</b>, dlatego przed wysłaniem są konwertowane za
              pomocą <b>JSON.stringify</b>, a nagłówek Content-Type:
              application/json informuje backend <b>(Express)</b>, jak powinien
              je odczytać.
            </div>
            <div>
              Żądanie ma strukturę <b>HTTP POST</b>, a body zawiera dane
              przesyłane do rejestracji. Po otrzymaniu odpowiedzi serwera
              frontend wykonuje przygotowane callbacki:
              <ul style={{ marginTop: "10px" }}>
                <li style={{ listStyle: "inside" }}>
                  w przypadku sukcesu → <b>onSuccess()</b>, komunikat +
                  przekierowanie
                </li>
                <li style={{ listStyle: "inside" }}>
                  w przypadku błędu → <b>onError()</b>, wyświetlenie błędu
                  użytkownikowi
                </li>
              </ul>
            </div>
          </TextLayout>
          <PicsLayout>
            <img
              src={case_register_4}
              alt="Wysyłanie danych do API (Fetch + JSON)"
            ></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              5. Backend — Express, endpoint /register
            </div>
            <div style={{ marginBottom: "15px" }}>
              Po stronie serwera za obsługę rejestracji odpowiada <b>Express</b>
              . Dane w formacie <b>JSON</b> trafiają do endpointu "/register".
            </div>
            <div style={{ marginBottom: "15px" }}>
              Następnie dane są porównywane z istniejącą bazą danych. Funkcja
              <b> readUsers()</b> odczytuje dane użytkowników z bazy i
              przypiusje do zmiennej. Jeśli użytkownik jeszcze nie znajduje się
              w bazie, przechodzimy do szyfrowania hasła za pomocą
              <b> bcypt.hash</b>, dzięki czemu hasła nie są zapisywane w postaci
              jawnej.
            </div>
            <div style={{ marginBottom: "15px" }}>
              W następnym kroku dla każdego użytkownika tworzę ID poprzez
              <b> uuidv4()</b>. Ten unikalny identyfikator (<b>ID</b>), wraz z
              zahashowanym hasłem, oraz odebranym na początku adresem email, są
              zapisywane w nowym obiekcie newUser.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Sam obiekt newUser z danymi użytkownika zawiera również puste pola
              takie jak
              <i> nick, firstName, lastname, city, phone oraz description</i>,
              które użytkownik będzie mógł uzupełnić jak i edytować wszytkie
              wartości w swoim panelu użytkownika.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Obiekt zawiera również <i>avatar</i> do którego przypisana jest
              losowa grafika wygenerowana przez piscum. Docelowo w wersji
              produkcyjnej w tym miejscu będzie istniała możliwość wgrania
              własnej grafiki przez np. <b>S3 BUCKET</b>.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Tak przygotowany obiekt z danymi użytkownika jest dopisywany do
              tablicy użytkowników (<b>users.push()</b>) i zapisywany w
              users.json (<b>writeUsers()</b>).
            </div>
          </TextLayout>
          <PicsLayout>
            <img
              src={case_register_5}
              alt="Backend — Express, endpoint /register"
            ></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              6. Odczyt i zapis użytkowników (file-based storage)
            </div>
            <div style={{ marginBottom: "15px" }}>
              Użytkownicy są przechowywani w pliku <b>users.json</b>. W
              projekcie wykorzystuję prostą bazę danych opartą na pliku
              users.json, w której przechowywane są dane użytkowników. Ze
              względu na charakter projektu, nie było potrzeby stawiania
              profesjonalnej bazy danych (DB).
            </div>
            <div style={{ marginBottom: "15px" }}>
              Funkcja <b>readUsers()</b> pozwala na odczyt danych użytkowników a
              następnie:
              <ul style={{ marginTop: "10px" }}>
                <li style={{ listStyle: "inside" }}>
                  zwrócenie pustej tablicy w przypadku pustej bazy (brak
                  użytkowników),
                </li>
                <li style={{ listStyle: "inside" }}>
                  lub zwrócenie istniejących danych użytkowników
                </li>
              </ul>
            </div>
            <div style={{ marginBottom: "15px" }}>
              Funkcja <b>writeUsers()</b> nadpisuje istniejący plik tablicą z
              nowymi danymi.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Do funkcji readUsers() jak i writeUsers() odwołuję się w kilku
              endpointach.
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_register_6} alt="Odczyt i zapis użytkowników"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              7. Komunikat o sukcesie + przekierowanie
            </div>
            <div>
              Po otrzymaniu pozytywnej odpowiedzi frontend:
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li style={{ listStyle: "inside" }}>
                  wyświetla komunikat o sukcesie i uruchamia goToLogin()
                </li>
                <li style={{ listStyle: "inside" }}>
                  po 2 sekundach przekierowuje na stronę /login.
                </li>
              </ul>
              Dzięki temu po poprawnej rejestracji użytkownik zostaje
              przekierowany na stronę z logowaniem.
            </div>
          </TextLayout>
          <PicsLayout>
            <img
              src={case_register_7}
              alt="Komunikat o sukcesie + przekierowanie"
            ></img>
          </PicsLayout>
        </SectionLayout>
        <div className={styles.buttonSection}>
          <Link to="/register" className={styles.button}>
            Przejdź do rejestracji
          </Link>
        </div>
      </PageLayout>
    </Layout>
  );
};
