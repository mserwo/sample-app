import { createContext, useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { Error, Home, Register, Login, CaseRegister } from "./pages";
import { CaseLogin } from "./pages/case-login";
import { CaseUserPanel } from "./pages/case-user-panel";
import { UserPage } from "./pages/user-page";
import { readUserData } from "./api/read-user-data";
import { StackFrontend } from "./pages/stack-frontend";
import { StackApi } from "./pages/stack-api";
import { StackServer } from "./pages/stack-server";
import polish from "./translations/polish.json";
import english from "./translations/english.json";

// basename dla GH Pages
const isGhPages = import.meta.env.MODE === "production";
export const basename = isGhPages ? "/sample-app" : "/";

// Typy dla UserContext
interface userDataType {
  token: string;
  setToken: (token: string) => void;
  id: string;
  setId: (id: string) => void;
  email: string;
  setEmail: (email: string) => void;
  nick: string;
  setNick: (nick: string) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
}

// Domyślne wartości UserContext
const userData = {
  token: "",
  setToken: () => {},
  id: "",
  setId: () => {},
  email: "",
  setEmail: () => {},
  nick: "",
  setNick: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
};

// Typy dla LanguageContext
interface LanguageContextType {
  language: LanguageType;
  toggleLang: () => void;
}
type LanguageType = typeof polish;

// Contexty
export const UserContext = createContext<userDataType>(userData);
export const LanguageContext = createContext<LanguageContextType>({
  language: polish,
  toggleLang: () => {},
});

// Komponent, który przekierowuje nieznane URL-e na stronę główną
// działa TYLKO przy pierwszym starcie aplikacji
const AppStartupRedirect = ({ basename }: { basename: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) return;
    setChecked(true);

    const knownPaths = [
      "/",
      "/register",
      "/login",
      "/userpage",
      "/case/register",
      "/case/login",
      "/case/user-panel",
      "/stack/frontend",
      "/stack/api",
      "/stack/server",
    ];

    const path = location.pathname.replace(basename, "") || "/";

    if (!knownPaths.includes(path)) {
      navigate("/", { replace: true });
    }
  }, []); // działa tylko raz przy starcie

  return null;
};

// Layout, który pozwala używać AppStartupRedirect w kontekście routera
const AppLayout = ({ basename }: { basename: string }) => {
  return (
    <>
      <AppStartupRedirect basename={basename} />
      <Outlet /> {/* Tu router wstrzykuje Twoje podstrony */}
    </>
  );
};

// Router z layoutem i podstronami
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout basename={basename} />,
      children: [
        { path: "", element: <Home /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "userpage/:userId", element: <UserPage /> },
        { path: "case/register", element: <CaseRegister /> },
        { path: "case/login", element: <CaseLogin /> },
        { path: "case/user-panel", element: <CaseUserPanel /> },
        { path: "stack/frontend", element: <StackFrontend /> },
        { path: "stack/api", element: <StackApi /> },
        { path: "stack/server", element: <StackServer /> },
      ],
      errorElement: <Error />,
    },
  ],
  { basename },
);

// Główny komponent App
function App() {
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [nick, setNick] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [lang, setLang] = useState<"pl" | "en">("pl");

  // Wczytywanie danych użytkownika z sessionStorage
  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    if (!sessionToken) return;

    setToken(sessionToken);

    const loadUser = async () => {
      try {
        const allUserData = await readUserData(sessionToken);
        setId(allUserData.id);
        setEmail(allUserData.email);
        setNick(allUserData.nick);
        setFirstName(allUserData.firstName);
        setLastName(allUserData.lastName);
      } catch (err) {
        console.error(err);
      }
    };

    loadUser();
  }, []);

  const handleSetToken = (token: string) => {
    setToken(token);
    sessionStorage.setItem("token", token);
  };

  // Przełączanie języka
  const toggleLang = () => {
    if (lang === "pl") setLang("en"), sessionStorage.setItem("lang", "en");
    else setLang("pl"), sessionStorage.setItem("lang", "pl");
  };

  const language = lang === "pl" ? polish : english;

  // Wczytywanie języka z sessionStorage
  useEffect(() => {
    const currentLang = sessionStorage.getItem("lang") as "pl" | "en";
    if (!currentLang) setLang("pl");
    else setLang(currentLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLang }}>
      <UserContext.Provider
        value={{
          token,
          setToken: handleSetToken,
          id,
          setId,
          email,
          setEmail,
          nick,
          setNick,
          firstName,
          setFirstName,
          lastName,
          setLastName,
        }}
      >
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </UserContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
