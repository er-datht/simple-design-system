import type { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DemosPage } from "../pages/DemosPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { PricingPage } from "../pages/PricingPage";
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
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.CONTACT,
        element: <ContactUsPage />,
      },
      {
        path: ROUTES.PRICING,
        element: <PricingPage />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
