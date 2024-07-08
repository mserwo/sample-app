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

export const UserContext = createContext(null);

function App() {
  const [data, setData] = useState({
    userName: "userName",
    password: "password",
  });

  const onDataChange = (userName: string, password: string) => {
    setData({ userName, password });
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ data, setData }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
