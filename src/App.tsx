import { createContext, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import FlagPl from "@/assets/images/flag_pl.svg?react";
import FlagEngl from "@/assets/images/flag_engl.svg?react";

const isGhPages = import.meta.env.MODE === "production";
export const basename = isGhPages ? "/sample-app" : "/";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home />, errorElement: <Error /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/userpage/:userId", element: <UserPage /> },
    { path: "/case/register", element: <CaseRegister /> },
    { path: "/case/login", element: <CaseLogin /> },
    { path: "/case/user-panel", element: <CaseUserPanel /> },
    { path: "/stack/frontend", element: <StackFrontend /> },
    { path: "/stack/api", element: <StackApi /> },
    { path: "/stack/server", element: <StackServer /> },
  ],
  { basename: isGhPages ? "/sample-app" : "/" },
);

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

type LanguageType = typeof polish;

export const UserContext = createContext<userDataType>(userData);
export const LanguageContext = createContext<LanguageType>(polish);

function App() {
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [nick, setNick] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [lang, setLang] = useState<"pl" | "en">("pl");

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

  const toggleLang = () => {
    if (lang === "pl") setLang("en"), sessionStorage.setItem("lang", "en");
    else return setLang("pl"), sessionStorage.setItem("lang", "pl");

    console.log("zmiana języka");
  };

  const language = lang === "pl" ? polish : english;

  useEffect(() => {
    const currentLang = sessionStorage.getItem("lang") as "pl" | "en";
    if (!currentLang) setLang("pl");
    else return setLang(currentLang);
  }, []);

  return (
    <>
      <div
        onClick={toggleLang}
        style={{
          position: "fixed",
          left: "10px",
          bottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "auto",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {lang === "en" ? (
          <FlagPl style={{ width: "100%", height: "100%" }} />
        ) : (
          <FlagEngl style={{ width: "100%", height: "100%" }} />
        )}
      </div>

      <LanguageContext.Provider value={language}>
        <UserContext.Provider
          value={{
            token: token,
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
    </>
  );
}

export default App;
