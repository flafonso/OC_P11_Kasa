import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Housing from "./pages/Housing";
import Error from "./components/Error";

import "./index.scss";

// import logo from "./assets/logo.svg";
import Logo from "./components/logo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "housing-sheet",
        element: <Housing />,
      },
    ],
  },
]);

function Root() {
  return (
    <div>
      <header>
        <Logo width={211} height={68} fill="#FF6060" />
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about-us">A propos</NavLink>
        </nav>
      </header>
      <div className="container-page">
        <Outlet />
      </div>
      <footer>
        <Logo width={122} height={39} fill="#ffffff" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
