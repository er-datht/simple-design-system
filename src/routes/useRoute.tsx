import type { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DemosPage } from "../pages/DemosPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Container } from "../ui/layout/Container";
import { ROUTES } from ".";

// Route definitions
export const Routes: RouteObject[] = [
  {
    element: <Container withLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.COMPONENTS,
        element: <DemosPage />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
