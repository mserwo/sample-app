import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { SectionColorLayout } from "../../components/layout/section-color-layout";
import { TextLayout } from "../../components/layout/text-layout";
import { PicsLayout } from "../../components/layout/pics-layout";

import styles from "./case-user-panel.module.scss";
import { TitleLayoutGreen } from "../../components/layout/title-layout-green";

import case_user_panel_1 from "../../assets/screens/case_user_panel_1.png";
import case_user_panel_1_2 from "../../assets/screens/case_user_panel_1_2.png";
import case_user_panel_2 from "../../assets/screens/case_user_panel_2.png";
import case_user_panel_3 from "../../assets/screens/case_user_panel_3.png";
import case_user_panel_4 from "../../assets/screens/case_user_panel_4.png";
import case_user_panel_5 from "../../assets/screens/case_user_panel_5.png";
import case_user_panel_6 from "../../assets/screens/case_user_panel_6.png";
import case_user_panel_7 from "../../assets/screens/case_user_panel_7.png";
import { Link } from "react-router-dom";

export const CaseUserPanel = () => {
  return (
    <Layout>
      <TitleLayoutGreen>Panel użytkownika - opis procesu</TitleLayoutGreen>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>
            1. Przekierowanie po zalogowaniu + pobranie danych użytkownika
          </div>
          <div style={{ marginBottom: "15px" }}>
            Po zalogowaniu użytkownika zostajemy przekierowani na stronę główną
            aplikacji. W pierwszej kolejności wykonują się instruckje zawarte w{" "}
            <b className={styles.bold}>useEffect()</b>, mające na celu pobranie
            aktualnych danych użytkownika z backendu. Sam proces łączenia się z
            serwerem i pobierania danych opisany jest w kolejnym punkcie.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Jeśli użytkownik został zalogowany, a jego dane poprawnie pobrane,
            wyświetlana jest sekcja z danymi użytkownika takimi jak{" "}
            <b className={styles.bold}>ID </b>
            oraz adres <b className={styles.bold}>email</b>. Na końcu sekcji
            wyświetla się przycisk z przekierowaniem do panelu użytkonika gdzie
            znjajdują się wszystkie dane oraz możliwość ich edycji.
          </div>
          <div>
            URL panelu użytkownika wykorzystuje ID pobrane wcześniej w fetchu.
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={case_user_panel_1} alt="pobranie danych uzytkownika"></img>
          <img
            src={case_user_panel_1_2}
            alt="wyświetlenie danych uzytkownika"
          ></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_user_panel_2} alt="pobranie danych przez API"></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>2. Pobranie danych przez API</div>
          <div style={{ marginBottom: "15px" }}>
            Używając <b className={styles.bold}>tokenu</b>, który pobieramy z
            globalnego kontekstu (<b className={styles.bold}>usecontext()</b>),
            wykonujemy <b className={styles.bold}>fetcha</b> łącząc się z
            endpointem <b className={styles.bold}>/me</b>. W tym celu wysyłamy
            zapytanie <b className={styles.bold}>metodą GET</b>, używającąc
            nagłówków z m.in. autoryzacją{" "}
            <b className={styles.bold}>'Bearer token'</b>.
          </div>
          <div>
            Otrzymane dane w postai obiektu Response odczytujemy w formacie
            <b className={styles.bold}> JSON</b> zwracając{" "}
            <b className={styles.bold}>ID</b> oraz{" "}
            <b className={styles.bold}>email</b>.
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>
            3. Endpoint /me + middleware verifyUser
          </div>
          <div style={{ marginBottom: "15px" }}>
            Endpoint <b className={styles.bold}>/me</b> działa podobnie jak{" "}
            <b className={styles.bold}>/getData</b> opisany w procesie
            logowania. W pierwszej kolejności uruchamiany jest
            <b className={styles.bold}> middleware veryfiUser</b> (opisany
            również w pkt. 7 procesu logowania), który na podstawie otrzymanego{" "}
            <b className={styles.bold}>tokenu</b>, dekoduje go i zwraca
            odszyfrowane <b className={styles.bold}>ID</b> użytkownika zawarte
            wcześniej w tokenie.
          </div>
          <div>
            Po prawidłowym uwierzytelnieniu wracamy do endpointu{" "}
            <b className={styles.bold}>/me</b>, który uruchamia funkcję{" "}
            <b className={styles.bold}>readUsers()</b>, ta z kolei odczytuje
            plik z danymi użytkowników. ID otrzymane po odszyfrowaniu tokenu
            porównywane jest z ID użytkowników z bazy danych. Po odnalezieniu
            takiego samego ID, zczytywane są pozostałe dane tego użytkownika i
            wysyłane wraz ze statusem 200 na frontend.
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={case_user_panel_3} alt="endpoint /me"></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_user_panel_4} alt=""></img>
        </PicsLayout>
        <TextLayout>
          <div className={styles.caption}>
            4. Przejście do panelu użytkownika: pobieranie pełnych danych
          </div>
          <div style={{ marginBottom: "15px" }}>
            Po kliknięciu przycisku Go to user settings użytkownik zostaje
            przekierowany na stronę:{" "}
            <b className={styles.bold}>userpage:userId</b>.
          </div>
          <div style={{ marginBottom: "15px" }}>
            W panelu użytkownika wykonywany jest kolejny{" "}
            <b className={styles.bold}>useEffect</b>
            który:
          </div>
          <ul style={{ marginBottom: "15px" }}>
            <li style={{ listStyle: "inside" }}>
              ponownie wysyła token do backendu (endpoint{" "}
              <b className={styles.bold}>/readUserData</b>
              ),
            </li>
            <li style={{ listStyle: "inside" }}>
              backend zwraca pełne dane zapisane w bazie: email, nick, imię,
              nazwisko, avatar, city, phone, description itd.
            </li>
            <li style={{ listStyle: "inside" }}>
              dane są ustawiane w stanie komponentu (userData) oraz jednocześnie
              w globalnym kontekście (<b className={styles.bold}>UserContext</b>
              ).
            </li>
          </ul>
          Dzięki temu formularz wyświetla zawsze aktualne dane zalogowanego
          użytkownika.
          <div style={{ marginBottom: "15px" }}>
            <b className={styles.bold}>
              Szczegółowy opis endpointu /readUserData znjaudje się w pkt. 6
              opisu procesu logowania.
            </b>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <div style={{ marginBottom: "15px" }}>
              Panel użytkownika działa w dwóch trybach:
            </div>
            <div style={{ marginBottom: "15px" }}>
              <b className={styles.bold}>Tryb podglądu</b>
            </div>
            <ul style={{ marginBottom: "15px" }}>
              <li style={{ listStyle: "inside" }}>
                wyświetlane są dane pobrane z backendu,
              </li>
              <li style={{ listStyle: "inside" }}>
                dane są przedstawione w estetycznej karcie użytkownika,
              </li>
              <li style={{ listStyle: "inside" }}>
                widoczny jest przycisk Edit Data.
              </li>
            </ul>
            <div style={{ marginBottom: "15px" }}>
              <b className={styles.bold}>Tryb edycji</b>
            </div>
            <div style={{ marginBottom: "15px" }}>
              Po kliknięciu Edit Data włączany jest tryb formularza:
            </div>
            <ul>
              <li style={{ listStyle: "inside" }}>
                formularz Formika wypełniony aktualnymi danymi (initialValues=
                userData),
              </li>
              <li style={{ listStyle: "inside" }}>
                walidacja pól za pomocą Yup (email, nick, imię, nazwisko,
                telefon itd.),
              </li>
            </ul>
            <div> użytkownik może edytować dowolne swoje dane. </div>
          </div>
        </TextLayout>
      </SectionColorLayout>
      <SectionLayout>
        <TextLayout>
          <div className={styles.caption}>
            5. Zapis danych – wysyłanie zmian do backendu.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Po zakończeniu edycji danych użytkownik zatwierdza formularz
            (walidacja poobnie jak w formularzu rejestracji i logowania odbywa
            się przy użyciu biblioteki <b className={styles.bold}>Yup</b>), co
            uruchamia funkcję
            <b className={styles.bold}> handleSubmit()</b>. Jej zadaniem jest
            zebranie wszystkich aktualnie wypełnionych pól oraz wywołanie
            funkcji
            <b className={styles.bold}> updateUserData()</b>, odpowiedzialnej za
            wysłanie zmian do backendu.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Proces aktualizacji przebiega wieloetapowo. Najpierw aplikacja
            sprawdza, czy w globalnym kontekście nadal znajduje się aktualny
            token użytkownika. Jeżeli tak, dane wpisane w formularzu są
            zapisywane w formcie JSON (<b className={styles.bold}>API</b>) i
            przesyłane na endpoint
            <b className={styles.bold}>/updateUser metodą PUT</b>. W nagłówkach
            wykorzystywany jest token użytkownika, przekazywany jako{" "}
            <b className={styles.bold}>Authorization: Bearer Token</b>, co
            pozwala backendowi jednoznacznie potwierdzić, który użytkownik
            wysłał żądanie.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Jeżeli backend poprawnie zapisze dane, komponent aktualizuje lokalny
            stan (<b className={styles.bold}>setDataUpdate(true)</b>) oraz
            wyłącza tryb edycji, co powoduje powrót do widoku podglądu. W
            przypadku błędów wyświetlany jest odpowiedni komunikat, a sam
            backend zwraca status błędu widoczny w konsoli.
          </div>
        </TextLayout>
        <PicsLayout>
          <img src={case_user_panel_5} alt="handleSubmit"></img>
          <img src={case_user_panel_6} alt="Api UpdateUser"></img>
        </PicsLayout>
      </SectionLayout>
      <SectionColorLayout>
        <PicsLayout>
          <img src={case_user_panel_7} alt="endpoint /updateUser"></img>
        </PicsLayout>{" "}
        <TextLayout>
          <div className={styles.caption}>
            6. Obsługa endpointu aktualizacji po stronie backendu
          </div>
          <div style={{ marginBottom: "15px" }}>
            Endpoint odpowiedzialny za aktualizację danych użytkownika działa w
            oparciu o <b className={styles.bold}>metodę PUT</b> oraz wcześniej
            stworzone <b className={styles.bold}>middleware verifyUser</b>{" "}
            (opisany szczegółowo w pkt. 7 procesu logowania). To właśnie
            middleware przejmuje token wysłany w nagłówku i odszyfrowuje z niego
            identyfikator użytkownika, który ma zostać zaktualizowany.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Po poprawnej autoryzacji endpoint pobiera z request body wszystkie
            pola, które mogą zostać zmienione, takie jak: adres e-mail, nick,
            imię, nazwisko, numer telefonu, avatar czy opis użytkownika.
            Następnie backend odnajduje w bazie danych (w tym przypadku w pliku{" "}
            <b className={styles.bold}>JSON</b> z danymi użytkownikow)
            użytkownika o przekazanym <b className={styles.bold}>ID</b>.
          </div>
          <div style={{ marginBottom: "15px" }}>
            Jeśli użytkownik istnieje, backend dokonuje aktualizacji. Kluczową
            cechą jest tutaj mechanizm częściowego nadpisywania danych — do
            każdego pola przypisywana jest albo nowa wartość przesłana przez
            frontend, albo stara wartość, jeśli użytkownik nie wprowadził zmian.
          </div>
          <div>
            Po zakończeniu procesu backend zapisuje zaktualizowaną listę
            użytkowników (<b className={styles.bold}>writeUsers()</b>)i zwraca
            odpowiedź z komunikatem potwierdzającym pomyślną aktualizację. Jeśli
            nie uda się odnaleźć użytkownika lub wystąpi błąd zapisu, endpoint
            zwraca odpowiednio status 404 lub 500, wraz z opisem błędu.
          </div>
        </TextLayout>
      </SectionColorLayout>
      <div className={styles.downContainer}>
        <div className={styles.caption2}>
          Zarejestruj się lub zaloguj i przetestuj jak działa panel użytkownika
        </div>
        <div className={styles.buttonSection}>
          <Link to="/register" className={styles.button}>
            Przejdź do rejestracji
          </Link>
          <Link to="/login" className={styles.button}>
            Przejdź do logowania
          </Link>
        </div>
      </div>
    </Layout>
  );
};
