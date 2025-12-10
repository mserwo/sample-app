import { createContext, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error, Home, Register, Login, CaseRegister } from "./pages";
import { CaseLogin } from "./pages/case-login";
import { CaseUserPanel } from "./pages/case-user-panel";
import { UserPage } from "./pages/user-page";
import { readUserData } from "./api/read-user-data";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/case/register", element: <CaseRegister /> },
  { path: "/case/login", element: <CaseLogin /> },
  { path: "/case/user-panel", element: <CaseUserPanel /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/userpage/:userId", element: <UserPage /> },
]);

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

export const UserContext = createContext<userDataType>(userData);

function App() {
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [nick, setNick] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  return (
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
  );
}

export default App;
