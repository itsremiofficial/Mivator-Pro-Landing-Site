import { lazy } from "react";
import IconsPage from "../pages/IconsPage";
const Home = lazy(() => import("../pages/Home"));
const ERROR404 = lazy(() => import("../pages/Error404"));

const routes = [
  // dashboard
  {
    path: "/",
    element: <Home />,
    layout: "site",
  },
  {
    path: "/icons",
    element: <IconsPage />,
    layout: "site",
  },
  {
    path: "*",
    element: <ERROR404 />,
    layout: "site",
  },
];

export { routes };
