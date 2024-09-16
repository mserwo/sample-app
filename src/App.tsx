import { useState, createContext, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Discover, Error, Home, HowItWorks, Register, Login } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/discover", element: <Discover /> },
  { path: "/howitworks", element: <HowItWorks /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

export interface UserDataType {
  username: string;
  password: string;
}

interface UserContextType {
  data: UserDataType;
  changeUserData: (data: UserDataType) => void;
}

export const UserContext = createContext<UserContextType>({
  data: { username: "username", password: "password" },
  changeUserData: () => {},
});

function App() {
  const [data, setData] = useState<UserDataType>({
    username: "userName",
    password: "password",
  });

  const changeUserData = ({ username, password }: UserDataType) => {
    setData({ username, password });
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ data, changeUserData }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
