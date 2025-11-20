import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DemosPage } from "../pages/DemosPage";
import { ROUTES } from ".";

// Route definitions
export const Routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.DEMOS,
    element: <DemosPage />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
];
