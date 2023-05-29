import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { Error } from "./pages/ErrorPage";
import { Login } from "./pages/LoginPage";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default App;
