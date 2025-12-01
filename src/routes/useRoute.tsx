import type { RouteObject } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DemosPage } from "../pages/DemosPage";
import { AboutPage } from "../pages/AboutPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { PricingPage } from "../pages/PricingPage";
import { WaitlistPage } from "../pages/WaitlistPage";
import { LandingPage } from "../pages/LandingPage";
import { ArticlePage } from "../pages/ArticlePage";
import { ShopPage } from "../pages/ShopPage";
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
      {
        path: ROUTES.WAITLIST,
        element: <WaitlistPage />,
      },
      {
        path: ROUTES.LANDING,
        element: <LandingPage />,
      },
      {
        path: ROUTES.ARTICLE,
        element: <ArticlePage />,
      },
      {
        path: ROUTES.SHOP,
        element: <ShopPage />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
