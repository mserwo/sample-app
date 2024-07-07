import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Discover, Error, Home, HowItWorks, Register, Login } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/discover", element: <Discover /> },
  { path: "/howitworks", element: <HowItWorks /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
