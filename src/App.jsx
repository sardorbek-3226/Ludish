import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Return from "./component/Return";
import MainLayout from "./layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "return", element: <Return /> },
    ],
  },
]);

const App = () => <RouterProvider router={routes} />;

export default App;
