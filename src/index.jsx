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
import Logo from "./components/logo";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Root>
        <Error />
      </Root>
    ),
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => await fetch("http://localhost:3000/logements.json"),
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "housing-sheet/:id",
        element: <Housing />,
        loader: async ({ params }) => {
          const response = await fetch("http://localhost:3000/logements.json");
          const data = await response.json();
          const ad = data.find((ad) => ad.id === params.id);
          if (!ad) {
            throw new Response("ID not found", { status: 404 });
        }
          return ad;
        },
      },
    ],
  },
]);

function Root({ children }) {
  return (
    <>
      <header>
        <Logo width={211} height={68} fill="#FF6060" />
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about-us">A propos</NavLink>
        </nav>
      </header>
      <div className="container-page">{children ?? <Outlet />}</div>
      <footer>
        <Logo width={122} height={39} fill="#ffffff" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
