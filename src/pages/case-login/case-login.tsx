import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";

import styles from "./case-login.module.scss";
import { TitleLayout } from "../../components/layout/title-layout";

import case_login_1 from "../../assets/screens/case_login_1.png";
import case_login_2 from "../../assets/screens/case_login_2.png";
import case_login_3 from "../../assets/screens/case_login_3.png";
import case_login_4 from "../../assets/screens/case_login_4.png";
import case_login_5 from "../../assets/screens/case_login_5.png";
import case_login_6 from "../../assets/screens/case_login_6.png";
import case_login_6_2 from "../../assets/screens/case_login_6_2.png";
import case_login_7 from "../../assets/screens/case_login_7.png";
import case_login_8 from "../../assets/screens/case_login_8.png";
import case_login_8_2 from "../../assets/screens/case_login_8_2.png";
import case_login_9 from "../../assets/screens/case_login_9.png";
import { Link } from "react-router-dom";

export const CaseLogin = () => {
  return (
    <Layout>
      <PageLayout>
        <TitleLayout>Logowanie użytkownika - opis procesu</TitleLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              1. Formularz lgowania (Frontend)
            </div>
            <div style={{ marginBottom: "15px" }}>
              Podobnie jak w przypadku rejestracji użytkowanika - proces
              logowania zaczyna się na stronie z formularzem, który umożliwia
              użytkownikowi podanie adresu e-mail oraz hasła.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Cała obsługa formularza działa dzięki bibliotece <b>Formik</b>,
              która ułatwia zarządzanie stanem pól formularza, obługą błędów i
              samym procesem wysyłania danych do backendu.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Walidacja danych odbywa się jeszcze przed wysłaniem formularza
              dzięki bibliotece <b>Yup</b>, która sprawdza czy email ma
              prawidłowy format oraz czy hasło nie jest puste.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Po kliknięciu przycisku „Submit” formularz przekazuje dane do
              funkcji <b>onHandleSubmit</b>, która rozpoczyna proces logowania i
              przekazania danych przez <b>API</b> do backendu.
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_login_1} alt="formularz logowania"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>2. Walidacja danych (Yup)</div>
            <div style={{ marginBottom: "15px" }}>
              Zanim formularz wyśle dane do API, Yup sprawdza ich poprawność - w
              tym wypadku sprawdzany jest prawidłowy format wpisanego adresu
              email oraz czy pole z hasłem nie jest puste.
            </div>
            <div style={{ marginTop: "15px" }}>
              Dzięki temu użytkownik szybciej otrzymuje informację o błędzie,
              bez konieczności wysyłania formularza na backend.
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_login_2} alt="Walidacja danych"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              3. onHandleSubmit — rozpoczęcie procesu logowania
            </div>
            <div style={{ marginBottom: "15px" }}>
              Po pozytywnej walidacji uruchamiana jest funkcja
              <b>onHandleSubmit</b>
              zawierająca dalsze instrukcje przepływu danych i odpowiedniej
              rakcji frontendu.
            </div>
            <div style={{ marginBottom: "10px" }}>W tej funkcji:</div>
            <ul>
              <li style={{ listStyle: "inside" }}>
                tworzę funkcję onSuccess — uruchamiana gdy backend zwróci
                poprawny token,
              </li>
              <li style={{ listStyle: "inside" }}>
                tworzę funckję onError — wyświetla komunikat o błędnych danych,
              </li>
              <li style={{ listStyle: "inside" }}>
                wywołuję funkcję postLogin, która wysyła dane logowania do
                backendu.
              </li>
              <div style={{ marginTop: "15px" }}>
                To miejsce, w którym zaczyna się komunikacja z <b>API</b>.
              </div>
            </ul>
          </TextLayout>
          <PicsLayout>
            <img src={case_login_3} alt="funkcja onHandleSubmit"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              4. Wysyłanie danych do API (Fetch + JSON)
            </div>
            <div style={{ marginBottom: "15px" }}>
              Podobnie jak w przypadku procesu rejestracji - po zatwierdzeniu
              formularza logowania, dane użytkownika wysyłane są do backendu
              przy użyciu <b>Fetch API</b>. Dane przekazywane są w formacie
              JSON, dlatego przed wysłaniem są konwertowane za pomocą
              <b>JSON.stringify</b>. Występuje również nagłówek
              Content-Type:application/json, który informuje backend (
              <b>Express</b>), jak powienien je odczytać. Żądanie ma strukturę
              HTTP POST, a w body przekazywane są dane logowania.
            </div>
            <div style={{ marginBottom: "10px" }}>
              Po otrzymaniu odpowiedzi serwera frontend wykonuje przygotowane
              callbacki:
            </div>
            <ul style={{ marginBottom: "10px" }}>
              <li style={{ listStyle: "inside" }}>
                jeśli backend zwróci status 200, uruchamiany jest callback
                <b>onSuccess()</b>
              </li>
              <li style={{ listStyle: "inside" }}>
                jeśli dane są nieprawidłowe (status 401), wyświetlany jest
                komunikat o błędnym logowaniu - callback <b>onError()</b>
              </li>
            </ul>
            <div>
              <b>
                W tym miejscu kończą się podobieństwa procesu rejestracji oraz
                logowania. Wprowadzanie danych do formularza, walidacja oraz
                przekazanie do API wygląda podobnie w obydwu przypadkach. W
                dalszym kroku dane trafiają na serwer gdzie ścieżka wygląda już
                troche inaczej.
              </b>
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_login_4} alt="Wysyłanie danych do API"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              5. Backend — Express, endpoint /login
            </div>
            <div style={{ marginBottom: "15px" }}>
              Dane trafiają do endpointu <b>POST /login</b>. Podobnie jak przy
              rejestracji - uruchamiana jest funkcja <b>readUsers()</b>, która
              odczytuje zawartość pliku <b>users.json</b>.
            </div>
            <div style={{ marginBottom: "15px" }}>
              W dalszym kroku adres email podany przy logowaniu (który trafił do
              endpointu) porównywany jest z zawartością dotychczasowej bazy
              danych. Jeśli adres zostanie odszukany w bazie, następuje
              sprwdzenie prawidłowości hasła.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Zaszyfrowane hasło przypisane w bazie danych do wyfiltrowanego
              wcześniej adresu email - porównywane jest z hasłem które trafiło
              do endpointu z formularza logowania (<b>bcrypt.comapre</b>).
            </div>
            <div>
              Jeśli hasła są zgodne, generowany jest <b>JWT token</b> (JSON WEB
              TOKEN), który zawiera identyfikator użytkownika i ważność tokenu
              (1h). Token jest następnie odsyłany do frontendu, gdzie zapisywany
              jest w local state (<b>useContext</b>) oraz w
              <b> sessionStorage</b>.
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_login_5} alt="endpoint login"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              6. Backend — endpoint /readUserData
            </div>
            <div style={{ marginBottom: "15px" }}>
              Po zalogowaniu i odebraniu tokenu frontend wykonuje kolejną
              instruckję zawartą w <b>onHandleSubmit</b> - zapytanie do
              endpointu
              <b> /readUserData</b>. Ten endpoint jest odpowiedzialny za
              pobranie pełnych danych użytkownika z bazy, aby frontend mógł
              zapisać je w kontekście aplikacji (<b>useContext</b>).
            </div>
            <div style={{ marginBottom: "15px" }}>
              Tym razem zapytanie jest wysyłane metodą <b>GET</b> (
              <b>fetch API</b>). Poza dotychczas stosowanym nagłówkiem:
              <b> Content-Type: application/json</b>, do backendu jest też
              przekazywany nagłówek z autoryzacją:
              <b> Authorization: Bearer token</b>.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Gdy dane dotrą do endpontu <b>/readUserData</b>, w pierwszej
              kolejności uruchumiany jest <b>middleware verifyUser</b>, który ma
              na celu weryfikację tokenu użytkownika, a którego szczegółowe
              działanie opisane jest w kolejnym punkcie.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Jeśli użytkownik został poprawnie uwierzytelniony, backend za
              pomocą funkcji <b> readUsers()</b> odczytuje plik JSON z danymi
              użytkownika.
            </div>
            <div style={{ marginBottom: "15px" }}>
              W następnym kroku porównywane jest <b> ID</b> użytkownika z
              otrzymanego
              <b> tokenu</b>, z ID użytkownikow zapisanych w bazie danych. Jeśli
              ID są zgodne, odczytane zostają pozostałe informacje przypisane do
              użytkownika. Następnie zwracane są wszystkie dane użytkownika:
              <i>
                {" "}
                email, nick, imię, nazwisko, avatar, miasto, telefon, opis{" "}
              </i>
              itd.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Jeśli użytkownik nie istnieje lub token jest nieprawidłowy,
              backend zwraca odpowiedni komunikat błędu.
            </div>
            <div style={{ marginBottom: "15px" }}>
              W dalszym kroku po otrzymaniu danych z serwera, frontend zapisuje
              je w kontekście (<b>useContext()</b>)
            </div>
            <div>
              <b>
                Dzięki temu frontend natychmiast po zalogowaniu wyświetla dane
                użytkownika bez czekania na dodatkowe przeładowanie strony (np.
                nick w nagłówku strony, jeśli został uzupełniony przez
                użytkownika)
              </b>
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_login_6_2} alt="API readUserData"></img>
            <img src={case_login_6} alt="endpoint readUserData"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>7. Middleware — verifyUser</div>
            <div style={{ marginBottom: "15px" }}>
              <b>VeryfyUser</b>, czyli <b>middleware</b> który jest uruchamiany
              przed wykonaniem właściwego kodu w ednpoincie, sprawdza czy
              zapytanie wysłane na serwer zawiera nagłówek z tokenem (
              <b>Bearer Token</b>).
            </div>
            <div>
              Jeśli token jest obecny, <b>jwt.verify</b> dekoduje go używając
              zmiennej środowiskowej <b>.env</b> wraz z sekretnym kluczem, a
              następnie uzyskane w ten sposób <b>ID</b> użytkownika zawarte
              wcześniej w tokenie przekazuje jako zmienną do endpointu
              <b> /readUserData</b>.
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_login_7} alt="Middleware — verifyUser"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              8. Zapis danych użytkownika w useContext
            </div>
            <div style={{ marginBottom: "15px" }}>
              Frontend zapisuje wybrane dane w kontekście globalnym UserContext
              (<b>useContext()</b>), korzystając z przekazanych setterów (
              <b>useState()</b>)
            </div>
            <div style={{ marginBottom: "15px" }}>
              Do globalnego kontekstu trafiają
            </div>
            <ul style={{ marginBottom: "15px" }}>
              <li style={{ listStyle: "inside" }}>id</li>
              <li style={{ listStyle: "inside" }}>email</li>
              <li style={{ listStyle: "inside" }}>nick</li>
              <li style={{ listStyle: "inside" }}>firstName</li>
              <li style={{ listStyle: "inside" }}>lastName</li>
            </ul>
            <div style={{ marginBottom: "15px" }}>
              Context zdefiniowany jest w głównym pliku aplikacji (
              <b>App.tsx</b>) w którym znajduje się <b>router</b> z pathami do
              poszczególnych stron aplikacji.
              <b> Provider</b> który udostępnia dane z kontekstu, przekazuje je
              wszystkim ścieżkom w projekcie, dzięki czemu wszystkie strony
              aplikacji mają dostęp do poszczególnych danych oraz do możliwości
              ich edycji.
            </div>
            <div style={{ marginBottom: "15px" }}>
              Istotna w tym miejscu jest funkcja <b>handleSetToken()</b>, która
              po otrzymaniu <b>tokenu</b>, zapisuje go w pamięci przeglądarki,
              dzięki temu token zapisany w <b>sessionStorage</b> (a nie tylko w
              kontekście), nie jest resetowany przy ponowym renderowaniu
              komponentów.
            </div>
            <div style={{ marginBottom: "15px" }}>
              W kolejnym kroku przechodzimy do <b>useEffect()</b> który przy
              ponownym renderowaniu komponentów pobiera aktualny <b>token</b> z
              <b> sessionStorage</b> przeglądarki, po czym odtwarza poszczególne
              stany danych (uzupełnia kontekst). W tym celu ponownie wykonywany
              jest fetch do endpointu <b>/readUserData</b>.
            </div>
            <div>
              <b>
                Dzięki temu po odświeżeniu strony czy też przejściu na inną
                stronę aplikacji, użytkownik pozostaje zalogowany a kontekst z
                danymi użytkownika (np. nick w nagłówku strony) pozostaje zawsze
                aktualny.
              </b>
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_login_8} alt="useContext"></img>
            <img src={case_login_8_2} alt="useContext_2"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div className={styles.caption}>
              9. Komunikat + przekierowanie po logowaniu
            </div>
            <div style={{ marginBottom: "15px" }}>
              Po poprawnym zalogowaniu i wyświetleniu komunikatu "You are logged
              in!" przechodzimy do ostatniej instruckji zawartej w
              <b> onHandleSubmit</b>: <b> goToHome()</b>. po 2 sekundach
              użytkownik jest automatycznie przekierowany do strony głównej.
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={case_login_9} alt="przekierowanie po zalogowaniu"></img>
          </PicsLayout>
        </SectionLayout>
        <div className={styles.buttonSection}>
          <Link to="/login" className={styles.button}>
            Przejdź do logowania
          </Link>
        </div>
      </PageLayout>
    </Layout>
  );
};
