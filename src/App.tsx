import { createContext, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Discover, Error, Home, HowItWorks, Register, Login } from "./pages";
import { UserPage } from "./pages/user-page";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/discover", element: <Discover /> },
  { path: "/howitworks", element: <HowItWorks /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/userpage/:userId", element: <UserPage /> },
]);

interface userDataType {
  token: string;
  setToken: (token: string) => void;
}

const userData = {
  token: "",
  setToken: () => {
    return;
  },
};

export const UserContext = createContext<userDataType>(userData);

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    if (sessionToken) {
      setToken(sessionToken);
    }
  }, []);

  const handleSetToken = (token: string) => {
    setToken(token);
    sessionStorage.setItem("token", token);
  };

  return (
    <UserContext.Provider value={{ token: token, setToken: handleSetToken }}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
